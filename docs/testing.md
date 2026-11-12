# Testing

How to run the test suites of this project, what each one covers, and the
verification gate that must pass before anything goes to production.

## Test layers

| Suite | Location | Runs on | Command |
|---|---|---|---|
| Unit | `tests/Unit/` | Mocks only, no database | `ddev exec composer test` |
| Functional | `tests/Functional/` | The real ddev database (`@group functional-manual`) | `ddev exec vendor/bin/phpunit tests/Functional/<File>.php` |
| Integration | `tests/Integration/` | The real ddev database | `ddev exec vendor/bin/phpunit tests/Integration/<File>.php` |

`phpunit.xml.dist` **excludes** `tests/Functional` and `tests/Integration` from
the default suite on purpose: they mutate the development database (create,
publish and delete test pages) and are not meant for CI runs.

**Always run all three layers before you consider work done:**

```bash
ddev exec composer test                                         # Unit (all of tests/Unit)
ddev exec vendor/bin/phpunit tests/Functional/PageServiceFunctionalTest.php
ddev exec vendor/bin/phpunit tests/Functional/RouteLifecycleFunctionalTest.php
ddev exec vendor/bin/phpunit tests/Integration/MCP/CardTrioBlockTest.php
ddev exec vendor/bin/phpstan analyse --no-progress              # Static analysis
```

## Known failure modes

### 1. A fresh live dump was imported

A dump from the live system is an exact copy of production: an older schema
(missing columns the local patched vendor expects) and pages whose draft
routes are missing. Symptoms:

- `Unknown column 'm4_.origin'` on the website → run
  `ddev exec bin/console doctrine:schema:update --force` (additive, no data
  loss; take a `ddev snapshot` first).
- `Parent page has no usable draft route` in functional tests → the first
  listed page in the dump has no healthy route. Tests pick a healthy parent
  via `healthyParentPath()`; to fix real pages run
  `ddev exec bin/console nca:routes:repair --dry-run` first.

### 2. Failed functional runs leak route nodes

When a functional test fails after publishing its test page, `tearDown()`
removes the content node and the route nodes that reference it. Older runs of
this suite leaked routes before that cleanup existed. If you see leftover
test routes in the tree:

```sql
SELECT id, path FROM phpcr_nodes WHERE path LIKE '%draft-test-%';
-- then delete the ids from phpcr_nodes and phpcr_nodes_references
```

### 3. `composer test` silently running nothing

The script previously pointed to a `bin/phpunit` that did not exist, so the
unit suite had not been run at all - unit tests asserting the old
dual-workspace write behaviour of `PageService` kept failing undetected.
The script now runs `vendor/bin/phpunit`. If you change
`PageService`, `SuluPagesTool` or any write path, run the full gate above -
never assume a green checkmark somewhere covers the unit suite.

## Deployment gate

Never deploy to the live system while any of the following fails:

1. `ddev exec vendor/bin/phpstan analyse --no-progress` (known pre-existing
   exceptions: the `#[ORM\Index]` repeatable warnings in
   `src/Entity/McpAuthCode.php` and `src/Entity/McpAccessToken.php`)
2. `ddev exec composer test` (Unit)
3. `ddev exec vendor/bin/phpunit tests/Functional/PageServiceFunctionalTest.php`
4. `ddev exec vendor/bin/phpunit tests/Functional/RouteLifecycleFunctionalTest.php`
5. `ddev exec vendor/bin/phpunit tests/Integration/MCP/CardTrioBlockTest.php`
6. `ddev exec bin/console doctrine:schema:validate` (schema in sync)
7. A quick smoke check of the local website (`/de` returns 200)

If a dump was imported: take a `ddev snapshot` **before** the import, sync the
schema, and re-run the whole gate. Failing tests after a dump import are a
sign of schema or route drift - fix the cause, do not deploy over it.
