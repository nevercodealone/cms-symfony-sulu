<?php

declare(strict_types=1);

namespace App\Chat;

use Symfony\AI\Agent\Agent;
use Symfony\AI\Platform\Message\Message;
use Symfony\AI\Platform\Message\MessageBag;

final class RelevanceChecker
{
    public function __construct(
        private readonly Agent $youtubeBotAgent,
    ) {
    }

    /**
     * Check if user input is related to our YouTube channel content
     */
    public function isRelevantToYouTubeChannel(string $userInput): bool
    {
        $checkMessages = new MessageBag(
            Message::forSystem('Du bist ein Filter-System für einen YouTube-Kanal Chat-Bot. Deine Aufgabe ist zu bestimmen, ob eine Benutzereingabe zu unserem YouTube-Kanal über PHP, Symfony, Laravel, Programmierung, Software-Entwicklung oder verwandte Technologien gehört.

Antworte nur mit "JA" wenn die Frage zu diesen Themen gehört:
- PHP Programmierung
- Symfony Framework  
- Laravel Framework
- Web-Entwicklung
- Software-Entwicklung
- Programmier-Tutorials
- Code-Reviews
- Technische Konzepte
- Entwickler-Tools
- Datenbanken (MySQL, etc.)
- Frontend-Technologien (HTML, CSS, JavaScript)
- DevOps und Deployment

Antworte mit "NEIN" wenn die Frage zu anderen Themen gehört wie:
- Kochen, Rezepte
- Sport, Fitness
- Politik
- Persönliche Fragen über Personen
- Allgemeine Unterhaltung
- Nicht-technische Themen
- Medizin, Gesundheit
- Reisen
- Mode
- etc.

Antworte nur mit "JA" oder "NEIN" - keine anderen Wörter.'),
            Message::ofUser($userInput)
        );

        try {
            $result = $this->youtubeBotAgent->call($checkMessages);
            
            $response = trim(strtoupper($result->getContent()));
            
            return $response === 'JA';
        } catch (\Exception $e) {
            // If AI check fails, allow the question through to avoid blocking valid queries
            return true;
        }
    }
}