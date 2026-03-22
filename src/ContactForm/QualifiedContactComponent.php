<?php

declare(strict_types=1);

namespace App\ContactForm;

use App\Entity\ContactLead;
use App\Repository\ContactLeadRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent('qualified-contact')]
final class QualifiedContactComponent
{
    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public string $activeTab = 'vibe-coding';

    #[LiveProp(writable: true)]
    public int $currentStep = 0;

    /** @var array<string, string> */
    #[LiveProp(writable: true)]
    public array $answers = [];

    #[LiveProp(writable: true)]
    public bool $showContactForm = false;

    #[LiveProp(writable: true)]
    public bool $submitted = false;

    #[LiveProp(writable: true)]
    public string $contactEmail = '';

    #[LiveProp(writable: true)]
    public string $contactName = '';

    #[LiveProp(writable: true)]
    public string $contactMessage = '';

    #[LiveProp(writable: true)]
    public string $textAnswer = '';

    /** @var array<int, string> */
    #[LiveProp(writable: true)]
    public array $checkboxSelections = [];

    #[LiveProp(writable: true)]
    public string $error = '';

    public function __construct(
        private readonly QuestionTree $questionTree,
        private readonly EntityManagerInterface $entityManager,
        private readonly ContactLeadMailer $mailer,
        private readonly RequestStack $requestStack,
        private readonly ContactLeadRepository $contactLeadRepository,
    ) {
    }

    /** @return array<int, array<string, mixed>> */
    public function getTabs(): array
    {
        return $this->questionTree->getTabs();
    }

    /** @return array<string, mixed>|null */
    public function getCurrentQuestion(): ?array
    {
        return $this->questionTree->getQuestion($this->activeTab, $this->currentStep);
    }

    /** @return array<string, string> */
    public function getAssistant(): array
    {
        foreach ($this->questionTree->getTabs() as $tab) {
            if ($tab['key'] === $this->activeTab) {
                return $tab['assistant'];
            }
        }

        return [];
    }

    public function getProgress(): int
    {
        $total = $this->questionTree->getTotalQuestions($this->activeTab);
        if ($total === 0) {
            return 0;
        }
        if ($this->showContactForm) {
            return 100;
        }

        return (int) round(($this->currentStep / $total) * 100);
    }

    #[LiveAction]
    public function selectTab(#[LiveArg] string $tab): void
    {
        $this->activeTab = $tab;
        $this->currentStep = 0;
        $this->answers = [];
        $this->textAnswer = '';
        $this->checkboxSelections = [];
        $this->showContactForm = false;
        $this->submitted = false;
    }

    #[LiveAction]
    public function answerQuestion(#[LiveArg] string $answer): void
    {
        $question = $this->getCurrentQuestion();
        if ($question === null) {
            return;
        }

        $this->answers[$question['id']] = $answer;

        if ($this->questionTree->isLastQuestion($this->activeTab, $this->currentStep)) {
            $this->showContactForm = true;
        } else {
            $this->currentStep++;
        }
    }

    #[LiveAction]
    public function submitTextAnswer(): void
    {
        $question = $this->getCurrentQuestion();
        if ($question === null || empty($this->textAnswer)) {
            return;
        }

        $this->answers[$question['id']] = $this->textAnswer;
        $this->textAnswer = '';

        if ($this->questionTree->isLastQuestion($this->activeTab, $this->currentStep)) {
            $this->showContactForm = true;
        } else {
            $this->currentStep++;
        }
    }

    #[LiveAction]
    public function toggleCheckbox(#[LiveArg] string $value): void
    {
        if (in_array($value, $this->checkboxSelections, true)) {
            $this->checkboxSelections = array_values(array_diff($this->checkboxSelections, [$value]));
        } else {
            $this->checkboxSelections[] = $value;
        }
    }

    #[LiveAction]
    public function confirmCheckboxes(): void
    {
        $question = $this->getCurrentQuestion();
        if ($question === null) {
            return;
        }

        $this->answers[$question['id']] = implode(', ', $this->checkboxSelections);
        $this->checkboxSelections = [];

        if ($this->questionTree->isLastQuestion($this->activeTab, $this->currentStep)) {
            $this->showContactForm = true;
        } else {
            $this->currentStep++;
        }
    }

    #[LiveAction]
    public function submitContact(): void
    {
        $this->error = '';

        if (empty($this->contactEmail)) {
            $this->error = 'Bitte gib deine E-Mail-Adresse ein.';
            return;
        }

        if (!filter_var($this->contactEmail, FILTER_VALIDATE_EMAIL)) {
            $this->error = 'Bitte gib eine gültige E-Mail-Adresse ein.';
            return;
        }

        $request = $this->requestStack->getCurrentRequest();
        $userIp = $request?->getClientIp() ?? '0.0.0.0';

        if ($this->contactLeadRepository->countLeadsFromIpInLastHour($userIp) >= 1) {
            $this->error = 'Du hast bereits eine Anfrage gesendet.';
            return;
        }

        try {
            $lead = new ContactLead();
            $lead->setProduct($this->activeTab);
            $lead->setAnswers($this->answers);
            $lead->setName($this->contactName ?: null);
            $lead->setEmail($this->contactEmail);
            $lead->setMessage($this->contactMessage ?: null);
            $lead->setUserIp($userIp);

            $this->entityManager->persist($lead);
            $this->entityManager->flush();

            $this->mailer->sendNotification($lead);

            $this->submitted = true;
        } catch (\Throwable) {
            $this->error = 'Etwas ist schiefgelaufen. Bitte versuche es erneut.';
        }
    }

    #[LiveAction]
    public function reset(): void
    {
        $this->currentStep = 0;
        $this->answers = [];
        $this->showContactForm = false;
        $this->submitted = false;
        $this->contactEmail = '';
        $this->contactName = '';
        $this->contactMessage = '';
        $this->textAnswer = '';
        $this->checkboxSelections = [];
        $this->error = '';
    }
}
