<?php

declare(strict_types=1);

namespace App\Tests\Unit\Deployment;

use PHPUnit\Framework\TestCase;

class BasicAuthProtectionTest extends TestCase
{
    private string $projectRoot;

    protected function setUp(): void
    {
        $this->projectRoot = dirname(__DIR__, 3);
    }

    private function getHtaccessContent(): string
    {
        $path = $this->projectRoot . '/public/.htaccess';
        $this->assertFileExists($path);

        return (string) file_get_contents($path);
    }

    public function test_htaccessRequiresBasicAuthForNonLiveHosts(): void
    {
        $htaccess = $this->getHtaccessContent();

        $this->assertStringContainsString(
            'AuthType Basic',
            $htaccess,
            'Basic Auth must be configured so staging hosts answer with 401 instead of being crawled.'
        );

        $this->assertStringContainsString(
            'Require valid-user',
            $htaccess,
            'Credentials must be required when the host is not the live domain.'
        );

        $this->assertStringContainsString(
            'AuthUserFile /var/www/html/public/.htpasswd',
            $htaccess,
            'The htpasswd file must be referenced by its absolute path inside the Docker image.'
        );
    }

    public function test_htaccessAllowsOnlyTheLiveDomainWithoutAuth(): void
    {
        $htaccess = $this->getHtaccessContent();

        $this->assertStringContainsString(
            'Require expr "%{HTTP_HOST} =~ m#^nevercodealone\.de$#i"',
            $htaccess,
            'Only the bare live domain (no www) may bypass Basic Auth.'
        );

        $this->assertStringNotContainsString(
            'www.nevercodealone.de',
            $htaccess,
            'The live domain has no www, so www must not be part of the allowlist.'
        );
    }

    public function test_htpasswdContainsBcryptEntryForNca(): void
    {
        $path = $this->projectRoot . '/public/.htpasswd';
        $this->assertFileExists($path);

        $content = (string) file_get_contents($path);

        $this->assertMatchesRegularExpression(
            '/^nca:\$2y\$.+$/m',
            $content,
            'The htpasswd must contain a bcrypt entry for user nca (Apache 2.4 supported format).'
        );
    }
}
