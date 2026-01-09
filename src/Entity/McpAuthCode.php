<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\McpAuthCodeRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: McpAuthCodeRepository::class)]
#[ORM\Table(name: 'mcp_auth_codes')]
#[ORM\Index(columns: ['code'], name: 'idx_mcp_auth_code')]
#[ORM\Index(columns: ['expires_at'], name: 'idx_mcp_auth_expires')]
#[ORM\HasLifecycleCallbacks]
class McpAuthCode
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: Types::INTEGER)]
    private ?int $id = null;

    #[ORM\Column(type: Types::STRING, length: 128, unique: true)]
    private string $code;

    #[ORM\Column(type: Types::STRING, length: 128, nullable: true)]
    private ?string $pkceChallenge = null;

    #[ORM\Column(type: Types::STRING, length: 10, options: ['default' => 'S256'])]
    private string $pkceMethod = 'S256';

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $clientName = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $redirectUri = null;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $state = null;

    #[ORM\Column(type: Types::DATETIME_IMMUTABLE)]
    private \DateTimeImmutable $expiresAt;

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

    public function getCode(): string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;
        return $this;
    }

    public function getPkceChallenge(): ?string
    {
        return $this->pkceChallenge;
    }

    public function setPkceChallenge(?string $pkceChallenge): self
    {
        $this->pkceChallenge = $pkceChallenge;
        return $this;
    }

    public function getPkceMethod(): string
    {
        return $this->pkceMethod;
    }

    public function setPkceMethod(string $pkceMethod): self
    {
        $this->pkceMethod = $pkceMethod;
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

    public function getRedirectUri(): ?string
    {
        return $this->redirectUri;
    }

    public function setRedirectUri(?string $redirectUri): self
    {
        $this->redirectUri = $redirectUri;
        return $this;
    }

    public function getState(): ?string
    {
        return $this->state;
    }

    public function setState(?string $state): self
    {
        $this->state = $state;
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
}
