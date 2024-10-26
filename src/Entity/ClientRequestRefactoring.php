<?php

namespace App\Entity;

use App\Repository\ClientRequestRefactoringRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity
 * @ORM\Table(name="client_request_refactoring")
 */
class ClientRequestRefactoring
{
  final public const RESOURCE_KEY = 'clientrequestrefactorings';
  final public const FORM_KEY = 'client_request_refactoring_details';
  final public const LIST_KEY = 'clientrequestrefactorings';
  final public const SECURITY_CONTEXT = 'sulu.clientrequestrefactoring.clientrequestrefactorings';

  /**
   * @ORM\Id
   * @ORM\GeneratedValue
   * @ORM\Column(type="integer")
   */
  private ?int $id = null;

  /**
   * @ORM\Column(type="string", length=255)
   * @Assert\NotBlank()
   * @Assert\Email()
   */
  private $email;

  /**
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private $projectUrl;

  /**
   * @ORM\Column(type="text")
   * @Assert\NotBlank()
   */
  private $projectDescription;

  /**
   * @ORM\Column(type="string", length=20)
   * @Assert\Choice({"frontendDevs", "backendDevs"})
   */
  private $team;

  /**
   * @ORM\Column(type="string", length=20)
   * @Assert\Choice({"Phone", "VideoCall"})
   */
  private $contactType;

  /**
   * @ORM\Column(type="text", nullable=true)
   */
  private $additionalInformation;

  // Getters and Setters
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
