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
  public const LIST_VIEW = 'app.client_request_refactoring.list';
  public const ADD_FORM_VIEW = 'app.client_request_refactoring.add_form';
  public const ADD_FORM_DETAILS_VIEW = 'app.client_request_refactoring.add_form.details';
  public const EDIT_FORM_VIEW = 'app.client_request_refactoring.edit_form';
  public const EDIT_FORM_DETAILS_VIEW = 'app.client_request_refactoring.edit_form.details';

  private ViewBuilderFactoryInterface $viewBuilderFactory;
  private SecurityCheckerInterface $securityChecker;

  public function __construct(
    ViewBuilderFactoryInterface $viewBuilderFactory,
    SecurityCheckerInterface $securityChecker
  ) {
    $this->viewBuilderFactory = $viewBuilderFactory;
    $this->securityChecker = $securityChecker;
  }

  public function configureNavigationItems(NavigationItemCollection $navigationItemCollection): void
  {
    if ($this->securityChecker->hasPermission(ClientRequestRefactoring::SECURITY_CONTEXT, PermissionTypes::EDIT)) {
      $rootNavigationItem = new NavigationItem('app.client_request_refactorings');
      $rootNavigationItem->setIcon('su-calendar');
      $rootNavigationItem->setPosition(30);
      $rootNavigationItem->setView(static::LIST_VIEW);

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
        $this->viewBuilderFactory->createListViewBuilder(static::LIST_VIEW, '/client_request_refactorings')
          ->setResourceKey(ClientRequestRefactoring::RESOURCE_KEY)
          ->setListKey(ClientRequestRefactoring::LIST_KEY)
          ->setTitle('app.client_request_refactorings')
          ->addListAdapters(['table'])
          ->setAddView(static::ADD_FORM_VIEW)
          ->setEditView(static::EDIT_FORM_VIEW)
          ->addToolbarActions($listToolbarActions)
      );

      $viewCollection->add(
        $this->viewBuilderFactory->createResourceTabViewBuilder(static::ADD_FORM_VIEW, '/client_request_refactorings/add')
          ->setResourceKey(ClientRequestRefactoring::RESOURCE_KEY)
          ->setBackView(static::LIST_VIEW)
      );

      $viewCollection->add(
        $this->viewBuilderFactory->createFormViewBuilder(static::ADD_FORM_DETAILS_VIEW, '/details')
          ->setResourceKey(ClientRequestRefactoring::RESOURCE_KEY)
          ->setFormKey(ClientRequestRefactoring::FORM_KEY)
          ->setTabTitle('sulu_admin.details')
          ->setEditView(static::EDIT_FORM_VIEW)
          ->addToolbarActions($formToolbarActions)
          ->setParent(static::ADD_FORM_VIEW)
      );

      $viewCollection->add(
        $this->viewBuilderFactory->createResourceTabViewBuilder(static::EDIT_FORM_VIEW, '/client_request_refactorings/:id')
          ->setResourceKey(ClientRequestRefactoring::RESOURCE_KEY)
          ->setBackView(static::LIST_VIEW)
      );

      $viewCollection->add(
        $this->viewBuilderFactory->createFormViewBuilder(static::EDIT_FORM_DETAILS_VIEW, '/details')
          ->setResourceKey(ClientRequestRefactoring::RESOURCE_KEY)
          ->setFormKey(ClientRequestRefactoring::FORM_KEY)
          ->setTabTitle('sulu_admin.details')
          ->addToolbarActions($formToolbarActions)
          ->setParent(static::EDIT_FORM_VIEW)
      );
    }
  }

  /**
   * @return mixed[]
   */
  public function getSecurityContexts(): array
  {
    return [
      self::SULU_ADMIN_SECURITY_SYSTEM => [
        'client_request_refactorings' => [
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
