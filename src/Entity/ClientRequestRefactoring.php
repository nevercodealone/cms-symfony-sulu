<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity]
#[ORM\Table(name: 'client_request_refactoring')]
class ClientRequestRefactoring
{
    final public const RESOURCE_KEY = 'client_request_refactorings';
    final public const FORM_KEY = 'client_request_refactoring_details';
    final public const LIST_KEY = 'client_request_refactorings';
    final public const SECURITY_CONTEXT = 'sulu.client_request_refactoring.client_request_refactorings';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: Types::INTEGER)]
    private ?int $id = null;

    #[ORM\Column(type: Types::STRING, length: 255)]
    #[Assert\NotBlank]
    #[Assert\Email]
    private ?string $email = null;

    #[ORM\Column(type: Types::STRING, length: 255)]
    #[Assert\NotBlank]
    private string $name;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $projectUrl = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Assert\NotBlank]
    private ?string $projectDescription = null;

    #[ORM\Column(type: Types::STRING, length: 20)]
    #[Assert\Choice(choices: ['frontendDevs', 'backendDevs'])]
    private ?string $team = null;

    #[ORM\Column(type: Types::STRING, length: 20, nullable: true)]
    private ?string $contactType = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $additionalInformation = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;
        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }

    public function getProjectUrl(): ?string
    {
        return $this->projectUrl;
    }

    public function setProjectUrl(?string $projectUrl): self
    {
        $this->projectUrl = $projectUrl;
        return $this;
    }

    public function getProjectDescription(): ?string
    {
        return $this->projectDescription;
    }

    public function setProjectDescription(string $projectDescription): self
    {
        $this->projectDescription = $projectDescription;
        return $this;
    }

    public function getTeam(): ?string
    {
        return $this->team;
    }

    public function setTeam(string $team): self
    {
        $this->team = $team;
        return $this;
    }

    public function getContactType(): ?string
    {
        return $this->contactType;
    }

    public function setContactType(string $contactType): self
    {
        $this->contactType = $contactType;
        return $this;
    }

    public function getAdditionalInformation(): ?string
    {
        return $this->additionalInformation;
    }

    public function setAdditionalInformation(?string $additionalInformation): self
    {
        $this->additionalInformation = $additionalInformation;
        return $this;
    }
}
