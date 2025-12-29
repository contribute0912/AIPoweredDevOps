# AI-Powered DevOps CLI Demo

This project demonstrates AI-powered DevOps acceleration in VS Code using GitHub Actions, ESLint, Prettier, and automated tests.

## Features
- **Simple CLI**: Prints a hello message.
- **Automated CI/CD**: GitHub Actions workflow runs lint, tests, formatting, and CodeQL security scan on every push/PR.
- **Code Quality**: ESLint and Prettier enforce standards.
- **Unit Tests**: Jest tests for CLI output.
- **AI Onboarding**: This README and project structure generated with AI assistance.

## Getting Started
1. `npm install`
2. `npm start` — Run the CLI
3. `npm test` — Run tests
4. `npm run lint` — Lint code
5. `npm run format` — Format code

## Contributing & PRs
- Open a PR to `main`.
- All PRs must pass CI checks (lint, test, CodeQL).
- Use clear commit messages and follow code style.

## Project Structure
- `src/` — CLI source code
- `tests/` — Jest tests
- `.github/workflows/ci.yml` — GitHub Actions workflow

---
This project is designed for demo purposes to showcase how AI and DevOps tools can accelerate onboarding, enforce standards, and automate compliance in modern development workflows.
