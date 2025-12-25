<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\ChatMessageRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ChatMessageRepository::class)]
#[ORM\Table(name: 'app_chat_messages')]
#[ORM\HasLifecycleCallbacks]
class ChatMessage
{
    final public const RESOURCE_KEY = 'chat_messages';
    final public const FORM_KEY = 'chat_message_details';
    final public const LIST_KEY = 'chat_messages';
    final public const SECURITY_CONTEXT = 'sulu.chat.messages';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: Types::INTEGER)]
    private ?int $id = null;

    #[ORM\Column(type: Types::STRING, length: 45)]
    private ?string $userIp = null;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $sessionId = null;

    #[ORM\Column(type: Types::TEXT)]
    private string $question;

    #[ORM\Column(type: Types::TEXT)]
    private string $answer;

    #[ORM\Column(type: Types::DATETIME_IMMUTABLE)]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(type: Types::INTEGER, nullable: true)]
    private ?int $responseTime = null;

    #[ORM\Column(type: Types::STRING, length: 50, nullable: true)]
    private ?string $locale = null;

    #[ORM\Column(type: Types::INTEGER, nullable: true)]
    private ?int $inputTokens = null;

    #[ORM\Column(type: Types::INTEGER, nullable: true)]
    private ?int $outputTokens = null;

    #[ORM\Column(type: Types::INTEGER, nullable: true)]
    private ?int $totalTokens = null;

    #[ORM\PrePersist]
    public function onPrePersist(): void
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUserIp(): ?string
    {
        return $this->userIp;
    }

    public function setUserIp(string $userIp): self
    {
        $this->userIp = $userIp;
        return $this;
    }

    public function getSessionId(): ?string
    {
        return $this->sessionId;
    }

    public function setSessionId(?string $sessionId): self
    {
        $this->sessionId = $sessionId;
        return $this;
    }

    public function getQuestion(): string
    {
        return $this->question;
    }

    public function setQuestion(string $question): self
    {
        $this->question = $question;
        return $this;
    }

    public function getAnswer(): string
    {
        return $this->answer;
    }

    public function setAnswer(string $answer): self
    {
        $this->answer = $answer;
        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;
        return $this;
    }

    public function getResponseTime(): ?int
    {
        return $this->responseTime;
    }

    public function setResponseTime(?int $responseTime): self
    {
        $this->responseTime = $responseTime;
        return $this;
    }

    public function getLocale(): ?string
    {
        return $this->locale;
    }

    public function setLocale(?string $locale): self
    {
        $this->locale = $locale;
        return $this;
    }

    public function getInputTokens(): ?int
    {
        return $this->inputTokens;
    }

    public function setInputTokens(?int $inputTokens): self
    {
        $this->inputTokens = $inputTokens;
        return $this;
    }

    public function getOutputTokens(): ?int
    {
        return $this->outputTokens;
    }

    public function setOutputTokens(?int $outputTokens): self
    {
        $this->outputTokens = $outputTokens;
        return $this;
    }

    public function getTotalTokens(): ?int
    {
        return $this->totalTokens;
    }

    public function setTotalTokens(?int $totalTokens): self
    {
        $this->totalTokens = $totalTokens;
        return $this;
    }
}
