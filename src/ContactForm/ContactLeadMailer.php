<?php

declare(strict_types=1);

namespace App\ContactForm;

use App\Entity\ContactLead;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

final class ContactLeadMailer
{
    public function __construct(
        private readonly MailerInterface $mailer,
        private readonly string $recipientEmail,
    ) {
    }

    public function sendNotification(ContactLead $lead): void
    {
        $productLabels = [
            'vibe-coding' => 'Vibe Coding Consulting',
            'php-refactoring' => 'PHP Refactoring',
            'ai-content' => 'AI Content Marketing',
        ];

        $productLabel = $productLabels[$lead->getProduct()] ?? $lead->getProduct();
        $answers = $lead->getAnswers();

        $body = "Neue Kontaktanfrage: {$productLabel}\n\n";
        $body .= "E-Mail: {$lead->getEmail()}\n";

        if ($lead->getName()) {
            $body .= "Name: {$lead->getName()}\n";
        }

        $body .= "\nQualifizierung:\n";
        foreach ($answers as $questionId => $answer) {
            $body .= "- {$questionId}: {$answer}\n";
        }

        if ($lead->getMessage()) {
            $body .= "\nNachricht:\n{$lead->getMessage()}\n";
        }

        $email = (new Email())
            ->from('noreply@nevercodealone.de')
            ->to($this->recipientEmail)
            ->subject("[NCA Lead] {$productLabel} — {$lead->getName()}")
            ->text($body);

        $this->mailer->send($email);
    }
}
