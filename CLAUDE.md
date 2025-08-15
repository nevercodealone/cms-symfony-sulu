# Development Environment Instructions

## DDEV Usage
Always use `ddev exec` for all commands when working in this project. Do not run commands directly on the host system.

Example:
- Instead of: `composer remove package`
- Use: `ddev exec composer remove package`

This ensures all commands run within the proper development environment.