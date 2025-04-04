# Smart Expense API

Personal income and expense tracking REST API.

## Solved Problem

This project demonstrates a practical portfolio implementation for personal income and expense tracking rest api.

## Features

- User registration
- JWT authentication
- Income and expense records
- Category management
- Monthly reporting
- Excel export

## Technologies

- Category: dotnet-api
- Template: api-service
- Difficulty: medium

## Architecture

The project is organized around a small but expandable production-style structure:

- `src/` contains the application source.
- `tests/` contains automated checks.
- `docs/` contains architecture and usage notes.
- `.github/workflows/` contains the CI workflow.

## Installation

Clone the repository and use the command documented for the selected technology stack.

## Environment Variables

No secrets are committed. Use local environment variables or a private `.env` file when integrating real services.

## API Usage Examples

See `docs/usage.md` for example flows and commands.

## Test Commands

Run the test command configured in the CI workflow for this project type.

## Screenshots

Screenshots can be added under `docs/screenshots/` after the UI or API demo is available.

## Planned Development Stages

- chore: initialize project structure
- feat: add core domain model
- feat: configure persistence or state layer
- feat: implement main workflow
- feat: add public interface
- test: add automated coverage
- docs: add installation and usage documentation
- ci: add build and test workflow
- feat: add validation rules for income and expense records
- feat: add reporting view for category management
- feat: add export or integration support for monthly reporting
- refactor: improve service boundaries for excel export
- fix: handle edge cases for user registration
- perf: improve query or request performance for jwt authentication

## Future Improvements

- Add production deployment notes.
- Add observability and monitoring examples.
- Add richer integration tests.
