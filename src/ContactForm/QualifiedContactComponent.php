<?php

declare(strict_types=1);

namespace App\ContactForm;

use App\Entity\ContactLead;
use App\Repository\ContactLeadRepository;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent('qualified-contact')]
final class QualifiedContactComponent
{
    use DefaultActionTrait;

    public const STEP_SERVICE = 'service';
    public const STEP_DETAILS = 'details';
    public const STEP_CONTACT = 'contact';
    public const STEP_DONE = 'done';

    #[LiveProp(writable: true)]
    public string $step = self::STEP_SERVICE;

    #[LiveProp(writable: true)]
    public string $selectedService = '';

    /** @var array<string, string> */
    #[LiveProp(writable: true)]
    public array $answers = [];

    /** @var array<int, string> */
    #[LiveProp(writable: true)]
    public array $checkboxSelections = [];

    #[LiveProp(writable: true)]
    public bool $submitted = false;

    #[LiveProp(writable: true)]
    public string $contactEmail = '';

    #[LiveProp(writable: true)]
    public string $contactName = '';

    #[LiveProp(writable: true)]
    public string $contactMessage = '';

    /** @var array<string, string> Per-field validation errors (keys: message, name, email, _step, _general). */
    #[LiveProp(writable: true)]
    public array $errors = [];

    public function __construct(
        private readonly QuestionTree $questionTree,
        private readonly EntityManagerInterface $entityManager,
        private readonly ContactLeadMailer $mailer,
        private readonly RequestStack $requestStack,
        private readonly ContactLeadRepository $contactLeadRepository,
        private readonly LoggerInterface $logger,
        private readonly ValidatorInterface $validator,
    ) {
    }

    /** @return array<int, array<string, mixed>> */
    public function getServices(): array
    {
        return $this->questionTree->getServices();
    }

    /** @return array<string, mixed>|null */
    public function getCurrentService(): ?array
    {
        return $this->questionTree->getService($this->selectedService);
    }

    /** @return array<int, array<string, mixed>> */
    public function getCurrentQuestions(): array
    {
        return $this->questionTree->getQuestions($this->selectedService);
    }

    /**
     * Grouped checkbox options for the current service's checkbox question.
     *
     * @return array<string, array<int, array<string, mixed>>>
     */
    public function getGroupedCheckboxOptions(): array
    {
        foreach ($this->getCurrentQuestions() as $question) {
            if (($question['type'] ?? '') === 'checkbox') {
                return $this->questionTree->groupOptions($question['options'] ?? []);
            }
        }

        return [];
    }

    public function getProgressPercent(): int
    {
        return match ($this->step) {
            self::STEP_SERVICE => 33,
            self::STEP_DETAILS => 67,
            self::STEP_CONTACT => 100,
            self::STEP_DONE => 100,
            default => 0,
        };
    }

    /** @return array<int, array<string, mixed>> */
    public function getStepTrail(): array
    {
        return [
            [
                'key' => self::STEP_SERVICE,
                'label' => 'Hands-on Consulting wählen',
                'hint' => 'Wähle eine unserer drei Spezialgebiete für den Einstieg.',
            ],
            [
                'key' => self::STEP_DETAILS,
                'label' => 'Infos auswählen',
                'hint' => 'Spezifiziere deine Anforderungen und den technischen Rahmen.',
            ],
            [
                'key' => self::STEP_CONTACT,
                'label' => 'Finalisierung',
                'hint' => 'Letzte Details und direkter Kontakt für deinen Termin.',
            ],
        ];
    }

    #[LiveAction]
    public function selectService(#[LiveArg] string $service): void
    {
        if ($this->questionTree->getService($service) === null) {
            return;
        }

        $this->selectedService = $service;
        $this->answers = [];
        $this->checkboxSelections = [];
        $this->errors = [];
        $this->step = self::STEP_DETAILS;

        // Pre-populate select answers that ship with a placeholder value
        // (e.g. "weiß nicht" for php_version) so the default is a valid answer.
        foreach ($this->questionTree->getQuestions($service) as $question) {
            if (($question['type'] ?? '') === 'select' && isset($question['placeholderValue'])) {
                $this->answers[$question['id']] = $question['placeholderValue'];
            }
        }
    }

    #[LiveAction]
    public function toggleCheckbox(#[LiveArg] string $value): void
    {
        if (in_array($value, $this->checkboxSelections, true)) {
            $this->checkboxSelections = array_values(array_diff($this->checkboxSelections, [$value]));

            return;
        }
        $this->checkboxSelections[] = $value;
    }

    #[LiveAction]
    public function goToContact(): void
    {
        $this->errors = [];
        $questions = $this->getCurrentQuestions();

        foreach ($questions as $question) {
            if ($question['type'] === 'select' && !isset($this->answers[$question['id']])) {
                $this->errors['_step'] = 'Bitte alle Pflichtfelder ausfüllen.';

                return;
            }
        }

        // Freeze checkbox selections into answers under the question id.
        foreach ($questions as $question) {
            if ($question['type'] === 'checkbox' && !isset($this->answers[$question['id']])) {
                $this->answers[$question['id']] = implode(', ', $this->checkboxSelections);
            }
        }

        $this->checkboxSelections = [];
        $this->step = self::STEP_CONTACT;
    }

    #[LiveAction]
    public function back(): void
    {
        $this->errors = [];
        $this->step = match ($this->step) {
            self::STEP_DETAILS => self::STEP_SERVICE,
            self::STEP_CONTACT => self::STEP_DETAILS,
            default => $this->step,
        };
    }

    #[LiveAction]
    public function submitContact(): void
    {
        $this->errors = [];

        if (trim($this->contactMessage) === '') {
            $this->errors['message'] = 'Bitte gib eine Nachricht ein.';
        }

        if (trim($this->contactName) === '') {
            $this->errors['name'] = 'Bitte gib deinen Namen ein.';
        }

        if (trim($this->contactEmail) === '') {
            $this->errors['email'] = 'Bitte gib deine E-Mail-Adresse ein.';
        }

        if (count($this->errors) > 0) {
            return;
        }

        $lead = new ContactLead();
        $lead->setProduct($this->selectedService);
        $lead->setAnswers($this->answers);
        $lead->setName($this->contactName ?: null);
        $lead->setEmail($this->contactEmail);
        $lead->setMessage($this->contactMessage ?: null);

        $violations = $this->validator->validate($lead);
        if ($violations->count() > 0) {
            // Route each violation to its field so the error lands next to the input.
            for ($i = 0; $i < $violations->count(); ++$i) {
                $violation = $violations->get($i);
                $field = match ($violation->getPropertyPath()) {
                    'email' => 'email',
                    'name' => 'name',
                    'message' => 'message',
                    default => '_general',
                };
                if (!isset($this->errors[$field])) {
                    $this->errors[$field] = $violation->getMessage();
                }
            }

            return;
        }

        $request = $this->requestStack->getCurrentRequest();
        $userIp = $request?->getClientIp() ?? '0.0.0.0';

        if ($this->contactLeadRepository->countLeadsFromIpInLastHour($userIp) >= 1) {
            $this->errors['_general'] = 'Du hast bereits eine Anfrage gesendet.';

            return;
        }

        try {
            $lead->setUserIp($userIp);

            $this->entityManager->persist($lead);
            $this->entityManager->flush();

            $this->mailer->sendNotification($lead);

            $this->submitted = true;
            $this->step = self::STEP_DONE;
        } catch (\Throwable $e) {
            $this->logger->error(
                'Contact lead submission failed: {message}',
                ['message' => $e->getMessage(), 'exception' => $e],
            );
            $this->errors['_general'] = 'Etwas ist schiefgelaufen. Bitte versuche es erneut.';
        }
    }

    #[LiveAction]
    public function reset(): void
    {
        $this->step = self::STEP_SERVICE;
        $this->selectedService = '';
        $this->answers = [];
        $this->checkboxSelections = [];
        $this->submitted = false;
        $this->contactEmail = '';
        $this->contactName = '';
        $this->contactMessage = '';
        $this->errors = [];
    }
}
