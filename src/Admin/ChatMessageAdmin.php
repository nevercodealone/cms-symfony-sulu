<?php

declare(strict_types=1);

namespace App\Admin;

use App\Entity\ChatMessage;
use Sulu\Bundle\AdminBundle\Admin\Admin;
use Sulu\Bundle\AdminBundle\Admin\Navigation\NavigationItem;
use Sulu\Bundle\AdminBundle\Admin\Navigation\NavigationItemCollection;
use Sulu\Bundle\AdminBundle\Admin\View\ListViewBuilderInterface;
use Sulu\Bundle\AdminBundle\Admin\View\ViewBuilderFactoryInterface;
use Sulu\Bundle\AdminBundle\Admin\View\ViewCollection;
use Sulu\Component\Security\Authorization\PermissionTypes;
use Sulu\Component\Security\Authorization\SecurityCheckerInterface;

class ChatMessageAdmin extends Admin
{
    final public const LIST_VIEW = 'app.chat_messages.list';
    final public const FORM_VIEW = 'app.chat_messages.form';

    public function __construct(
        private ViewBuilderFactoryInterface $viewBuilderFactory,
        private SecurityCheckerInterface $securityChecker
    ) {
    }

    public function configureNavigationItems(NavigationItemCollection $navigationItemCollection): void
    {
        if ($this->securityChecker->hasPermission(ChatMessage::SECURITY_CONTEXT, PermissionTypes::VIEW)) {
            $chatMessagesNavigationItem = new NavigationItem('app.chat_messages');
            $chatMessagesNavigationItem->setPosition(40);
            $chatMessagesNavigationItem->setView(static::LIST_VIEW);
            $chatMessagesNavigationItem->setIcon('su-comment');

            $navigationItemCollection->add($chatMessagesNavigationItem);
        }
    }

    public function configureViews(ViewCollection $viewCollection): void
    {
        if (!$this->securityChecker->hasPermission(ChatMessage::SECURITY_CONTEXT, PermissionTypes::VIEW)) {
            return;
        }

        $listView = $this->viewBuilderFactory
            ->createListViewBuilder(static::LIST_VIEW, '/chat-messages')
            ->setResourceKey(ChatMessage::RESOURCE_KEY)
            ->setListKey(ChatMessage::LIST_KEY)
            ->setTitle('app.chat_messages')
            ->addListAdapters(['table'])
            ->setEditView(static::FORM_VIEW);

        $viewCollection->add($listView);

        $formView = $this->viewBuilderFactory
            ->createResourceTabViewBuilder(static::FORM_VIEW, '/chat-messages/:id')
            ->setResourceKey(ChatMessage::RESOURCE_KEY)
            ->setBackView(static::LIST_VIEW)
            ->setTitleProperty('id');

        $viewCollection->add($formView);

        $detailsFormView = $this->viewBuilderFactory
            ->createFormViewBuilder(static::FORM_VIEW . '.details', '/details')
            ->setResourceKey(ChatMessage::RESOURCE_KEY)
            ->setFormKey(ChatMessage::FORM_KEY)
            ->setTabTitle('app.chat_message.details')
            ->setEditView(static::FORM_VIEW)
            ->setParent(static::FORM_VIEW);

        $viewCollection->add($detailsFormView);
    }

    /**
     * @return mixed[]
     */
    public function getSecurityContexts(): array
    {
        return [
            self::SULU_ADMIN_SECURITY_SYSTEM => [
                'Chat' => [
                    ChatMessage::SECURITY_CONTEXT => [
                        PermissionTypes::VIEW,
                        PermissionTypes::DELETE,
                    ],
                ],
            ],
        ];
    }
}