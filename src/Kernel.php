<?php

declare(strict_types=1);

namespace App;

/*
 * This file is part of Sulu.
 *
 * (c) MASSIVE ART WebServices GmbH
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

use App\Sulu\Contact\ContactManagerDecorator;
use FOS\HttpCache\SymfonyCache\HttpCacheProvider;
use Sulu\Bundle\HttpCacheBundle\Cache\SuluHttpCache;
use Sulu\Component\HttpKernel\SuluKernel;
use Symfony\Component\Config\Loader\LoaderInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\HttpKernelInterface;

class Kernel extends SuluKernel implements HttpCacheProvider
{
    /**
     * @var HttpKernelInterface
     */
    private $httpCache;

    public function __construct(string $environment, bool $debug, string $suluContext = self::CONTEXT_ADMIN)
    {
        parent::__construct($environment, $debug, $suluContext);
    }

    protected function configureContainer(ContainerBuilder $container, LoaderInterface $loader)
    {
        // Feel free to remove the "container.autowiring.strict_mode" parameter
        // if you are using symfony/dependency-injection 4.0+ as it is the default behavior
        $container->setParameter('container.autowiring.strict_mode', true);
        $container->setParameter('container.dumper.inline_class_loader', true);

        parent::configureContainer($container, $loader);
    }

    protected function build(ContainerBuilder $container): void
    {
        parent::build($container);

        $container->addCompilerPass(new class implements \Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface {
            public function process(ContainerBuilder $container): void
            {
                if ($container->hasDefinition('sulu_contact.contact_manager')) {
                    $container->getDefinition('sulu_contact.contact_manager')
                        ->setClass(ContactManagerDecorator::class);
                }
            }
        });
    }

    public function getHttpCache(): ?HttpKernelInterface
    {
        if (!$this->httpCache) {
            $this->httpCache = new SuluHttpCache($this);
        }

        return $this->httpCache;
    }
}
