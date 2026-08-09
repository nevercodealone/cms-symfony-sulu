<?php

declare(strict_types=1);

namespace App\Admin;

use Sulu\Bundle\AdminBundle\Admin\Admin;
use Sulu\Bundle\AdminBundle\Admin\View\ToolbarAction;
use Sulu\Bundle\AdminBundle\Admin\View\ViewBuilderFactoryInterface;
use Sulu\Bundle\AdminBundle\Admin\View\ViewCollection;
use Sulu\Bundle\ContactBundle\Admin\ContactAdmin;
use Sulu\Component\Security\Authorization\PermissionTypes;
use Sulu\Component\Security\Authorization\SecurityCheckerInterface;

class ContactDetailPageAdmin extends Admin
{
    public const EDIT_FORM_VIEW = 'app.contact.detail_page';

    public function __construct(
        private ViewBuilderFactoryInterface $viewBuilderFactory,
        private SecurityCheckerInterface $securityChecker,
    ) {
    }

    public function configureViews(ViewCollection $viewCollection): void
    {
        if (!$this->securityChecker->hasPermission(ContactAdmin::CONTACT_SECURITY_CONTEXT, PermissionTypes::EDIT)) {
            return;
        }

        $viewCollection->add(
            $this->viewBuilderFactory
                ->createFormViewBuilder(static::EDIT_FORM_VIEW, '/detail-page')
                ->setResourceKey('contacts')
                ->setFormKey('contact_detail_page')
                ->setTabTitle('app.contact_detail_page')
                ->setTabOrder(2048)
                ->addToolbarActions([new ToolbarAction('sulu_admin.save')])
                ->setParent(ContactAdmin::CONTACT_EDIT_FORM_VIEW)
        );
    }
}
