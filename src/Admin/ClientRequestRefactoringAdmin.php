<?php

declare(strict_types=1);

namespace App\Admin;

use App\Entity\ClientRequestRefactoring;
use Sulu\Bundle\AdminBundle\Admin\Admin;
use Sulu\Bundle\AdminBundle\Admin\Navigation\NavigationItem;
use Sulu\Bundle\AdminBundle\Admin\Navigation\NavigationItemCollection;
use Sulu\Bundle\AdminBundle\Admin\View\ToolbarAction;
use Sulu\Bundle\AdminBundle\Admin\View\ViewBuilderFactoryInterface;
use Sulu\Bundle\AdminBundle\Admin\View\ViewCollection;
use Sulu\Component\Security\Authorization\PermissionTypes;
use Sulu\Component\Security\Authorization\SecurityCheckerInterface;

class ClientRequestRefactoringAdmin extends Admin
{
  final public const LIST_VIEW = 'app.client_request_refactoring.list';
  final public const ADD_FORM_VIEW = 'app.client_request_refactoring.add_form';
  final public const ADD_FORM_DETAILS_VIEW = 'app.client_request_refactoring.add_form.details';
  final public const EDIT_FORM_VIEW = 'app.client_request_refactoring.edit_form';
  final public const EDIT_FORM_DETAILS_VIEW = 'app.client_request_refactoring.edit_form.details';

  public function __construct(private readonly ViewBuilderFactoryInterface $viewBuilderFactory, private readonly SecurityCheckerInterface $securityChecker)
  {
  }

  public function configureNavigationItems(NavigationItemCollection $navigationItemCollection): void
  {
    if ($this->securityChecker->hasPermission(ClientRequestRefactoring::SECURITY_CONTEXT, PermissionTypes::EDIT)) {
      $rootNavigationItem = new NavigationItem('app.client_request_refactoring');
      $rootNavigationItem->setIcon('fa-music');
      $rootNavigationItem->setPosition(25);

      $navigationItem = new NavigationItem('app.client_request_refactoring');
      $navigationItem->setView(static::LIST_VIEW);

      $rootNavigationItem->addChild($navigationItem);
      $navigationItemCollection->add($rootNavigationItem);
    }
  }

  public function configureViews(ViewCollection $viewCollection): void
  {
    $formToolbarActions = [];
    $listToolbarActions = [];

    if ($this->securityChecker->hasPermission(ClientRequestRefactoring::SECURITY_CONTEXT, PermissionTypes::ADD)) {
      $listToolbarActions[] = new ToolbarAction('sulu_admin.add');
    }

    if ($this->securityChecker->hasPermission(ClientRequestRefactoring::SECURITY_CONTEXT, PermissionTypes::EDIT)) {
      $formToolbarActions[] = new ToolbarAction('sulu_admin.save');
    }

    if ($this->securityChecker->hasPermission(ClientRequestRefactoring::SECURITY_CONTEXT, PermissionTypes::DELETE)) {
      $formToolbarActions[] = new ToolbarAction('sulu_admin.delete');
      $listToolbarActions[] = new ToolbarAction('sulu_admin.delete');
    }

    if ($this->securityChecker->hasPermission(ClientRequestRefactoring::SECURITY_CONTEXT, PermissionTypes::VIEW)) {
      $listToolbarActions[] = new ToolbarAction('sulu_admin.export');
    }

    if ($this->securityChecker->hasPermission(ClientRequestRefactoring::SECURITY_CONTEXT, PermissionTypes::EDIT)) {
      $viewCollection->add(
        $this->viewBuilderFactory->createListViewBuilder(static::LIST_VIEW, '/albums')
          ->setResourceKey(ClientRequestRefactoring::RESOURCE_KEY)
          ->setListKey(ClientRequestRefactoring::LIST_KEY)
          ->setTitle('app.albums')
          ->addListAdapters(['table'])
          ->setAddView(static::ADD_FORM_VIEW)
          ->setEditView(static::EDIT_FORM_VIEW)
          ->addToolbarActions($listToolbarActions),
      );

      $viewCollection->add(
        $this->viewBuilderFactory->createResourceTabViewBuilder(static::ADD_FORM_VIEW, '/albums/add')
          ->setResourceKey(ClientRequestRefactoring::RESOURCE_KEY)
          ->setBackView(static::LIST_VIEW),
      );

      $viewCollection->add(
        $this->viewBuilderFactory->createFormViewBuilder(static::ADD_FORM_DETAILS_VIEW, '/details')
          ->setResourceKey(ClientRequestRefactoring::RESOURCE_KEY)
          ->setFormKey(ClientRequestRefactoring::FORM_KEY)
          ->setTabTitle('sulu_admin.details')
          ->setEditView(static::EDIT_FORM_VIEW)
          ->addToolbarActions($formToolbarActions)
          ->setParent(static::ADD_FORM_VIEW),
      );

      $viewCollection->add(
        $this->viewBuilderFactory->createResourceTabViewBuilder(static::EDIT_FORM_VIEW, '/albums/:id')
          ->setResourceKey(ClientRequestRefactoring::RESOURCE_KEY)
          ->setBackView(static::LIST_VIEW),
      );

      $viewCollection->add(
        $this->viewBuilderFactory->createFormViewBuilder(static::EDIT_FORM_DETAILS_VIEW, '/details')
          ->setResourceKey(ClientRequestRefactoring::RESOURCE_KEY)
          ->setFormKey(ClientRequestRefactoring::FORM_KEY)
          ->setTabTitle('sulu_admin.details')
          ->addToolbarActions($formToolbarActions)
          ->setParent(static::EDIT_FORM_VIEW),
      );
    }
  }

  /**
   * @return array[]
   */
  public function getSecurityContexts(): array
  {
    return [
      self::SULU_ADMIN_SECURITY_SYSTEM => [
        'clientrequestrefactoring' => [
          ClientRequestRefactoring::SECURITY_CONTEXT => [
            PermissionTypes::VIEW,
            PermissionTypes::ADD,
            PermissionTypes::EDIT,
            PermissionTypes::DELETE,
          ],
        ],
      ],
    ];
  }
}
