<?php

declare(strict_types=1);

namespace App\Chat;

use Symfony\AI\Platform\Message\MessageInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent('chat')]
final class TwigComponent
{
    use DefaultActionTrait;

    public function __construct(
        private readonly Chat $chat,
    ) {
    }

    /**
     * @return MessageInterface[]
     */
    public function getMessages(): array
    {
        return $this->chat->loadMessages()->withoutSystemMessage()->getMessages();
    }

    #[LiveAction]
    public function submit(#[LiveArg] string $message): void
    {
        $this->chat->submitMessage($message);
    }

    #[LiveAction]
    public function reset(): void
    {
        $this->chat->reset();
    }
}
