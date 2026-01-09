<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\McpAccessTokenRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: McpAccessTokenRepository::class)]
#[ORM\Table(name: 'mcp_access_tokens')]
#[ORM\Index(columns: ['token'], name: 'idx_mcp_token')]
#[ORM\Index(columns: ['expires_at'], name: 'idx_mcp_token_expires')]
#[ORM\HasLifecycleCallbacks]
class McpAccessToken
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: Types::INTEGER)]
    private ?int $id = null;

    #[ORM\Column(type: Types::STRING, length: 128, unique: true)]
    private string $token;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $clientName = null;

    #[ORM\Column(type: Types::DATETIME_IMMUTABLE)]
    private \DateTimeImmutable $expiresAt;

    #[ORM\Column(type: Types::DATETIME_IMMUTABLE, nullable: true)]
    private ?\DateTimeImmutable $lastUsedAt = null;

    #[ORM\Column(type: Types::STRING, length: 45, nullable: true)]
    private ?string $createdIp = null;

    #[ORM\Column(type: Types::STRING, length: 45, nullable: true)]
    private ?string $lastUsedIp = null;

    #[ORM\Column(type: Types::DATETIME_IMMUTABLE)]
    private \DateTimeImmutable $createdAt;

    #[ORM\PrePersist]
    public function onPrePersist(): void
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getToken(): string
    {
        return $this->token;
    }

    public function setToken(string $token): self
    {
        $this->token = $token;
        return $this;
    }

    public function getClientName(): ?string
    {
        return $this->clientName;
    }

    public function setClientName(?string $clientName): self
    {
        $this->clientName = $clientName;
        return $this;
    }

    public function getExpiresAt(): \DateTimeImmutable
    {
        return $this->expiresAt;
    }

    public function setExpiresAt(\DateTimeImmutable $expiresAt): self
    {
        $this->expiresAt = $expiresAt;
        return $this;
    }

    public function getLastUsedAt(): ?\DateTimeImmutable
    {
        return $this->lastUsedAt;
    }

    public function setLastUsedAt(?\DateTimeImmutable $lastUsedAt): self
    {
        $this->lastUsedAt = $lastUsedAt;
        return $this;
    }

    public function getCreatedIp(): ?string
    {
        return $this->createdIp;
    }

    public function setCreatedIp(?string $createdIp): self
    {
        $this->createdIp = $createdIp;
        return $this;
    }

    public function getLastUsedIp(): ?string
    {
        return $this->lastUsedIp;
    }

    public function setLastUsedIp(?string $lastUsedIp): self
    {
        $this->lastUsedIp = $lastUsedIp;
        return $this;
    }

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;
        return $this;
    }

    public function isExpired(): bool
    {
        return $this->expiresAt < new \DateTimeImmutable();
    }

    public function getExpiresIn(): int
    {
        return max(0, $this->expiresAt->getTimestamp() - time());
    }
}
