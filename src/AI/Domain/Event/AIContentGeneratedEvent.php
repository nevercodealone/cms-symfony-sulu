<?php

declare(strict_types=1);

namespace App\AI\Domain\Event;

use Sulu\Bundle\ActivityBundle\Domain\Event\DomainEvent;

class AIContentGeneratedEvent extends DomainEvent
{
    /**
     * @param array<string, mixed> $payload
     */
    public function __construct(
        private string $resourceKey,
        private string $resourceId,
        private string $locale,
        private array $payload
    ) {
        parent::__construct();
    }

    public function getEventType(): string
    {
        return 'ai_content_generated';
    }

    public function getEventPayload(): ?array
    {
        return $this->payload;
    }

    public function getResourceKey(): string
    {
        return $this->resourceKey;
    }

    public function getResourceId(): string
    {
        return $this->resourceId;
    }

    public function getResourceLocale(): ?string
    {
        return $this->locale;
    }

    public function getResourceWebspaceKey(): ?string
    {
        return 'example'; // From CMF path structure
    }

    public function getResourceTitle(): ?string
    {
        return $this->payload['headline'] ?? 'AI Generated Content';
    }

    public function getResourceTitleLocale(): ?string
    {
        return $this->locale;
    }

    public function getResourceSecurityContext(): ?string
    {
        return 'sulu.webspaces.example.pages';
    }

    public function getResourceSecurityObjectType(): ?string
    {
        return 'page';
    }

    public function getResourceSecurityObjectId(): ?string
    {
        return $this->resourceId;
    }
}