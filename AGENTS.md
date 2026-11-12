<!-- BEGIN AI_MATE_INSTRUCTIONS -->
AI Mate Summary:
- Role: MCP-powered, project-aware coding guidance and tools.
- Required action: Read and follow `mate/AGENT_INSTRUCTIONS.md` before taking any action in this project, and prefer MCP tools over raw CLI commands whenever possible.
- Installed extensions: symfony/ai-mate.
<!-- END AI_MATE_INSTRUCTIONS -->

## Git workflow

- Commit only when the user asks; never push unless the user explicitly says "push". "Commit" alone means NO push.
- Push only to `origin` (git.nevercodealone.de, GitLab). Never push to the `github` remote.

## Testing

- `composer test` (`ddev exec composer test`) runs ONLY the Unit suite - `phpunit.xml.dist` excludes `tests/Functional` and `tests/Integration`. Run functional and integration tests per file with `ddev exec vendor/bin/phpunit tests/...`.
- Functional/Integration tests run against the real ddev database and are marked `@group functional-manual`. They create, publish and delete test pages. A failed run cleans up its route nodes via `cleanupTestPage()`.
- After importing a live dump, the schema and route tree are stale: run `ddev exec bin/console doctrine:schema:update --force` (additive) and check `ddev exec bin/console nca:routes:repair --dry-run` before running or judging tests.
- Full verification gate (also see `docs/testing.md`): `vendor/bin/phpstan analyse`, `composer test`, the Functional and Integration files, `bin/console doctrine:schema:validate`. NEVER deploy to live while any gate step fails - a red suite means schema or route drift, not "known flakiness".
- When changing `PageService`, `SuluPagesTool` or any MCP write path, always run the Unit suite too - it asserts the draft-only write contract (one `UPDATE phpcr_nodes` on the `default` workspace, no live cache invalidation on writes).
