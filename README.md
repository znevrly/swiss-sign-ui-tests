# SwissSign UI Tests

This repository contains UI tests.

## Prerequisites

- Node.js
- npm/yarn

## Installation

Install dependencies
```bash
npm install
```

## Configuration

Copy `.env.example` to `.env` and fill in the required values:

```bash
cp .env.example .env
```

Required environment variables:
- `TEST_USER_PASSWORD`: Password to use for test accounts

## Running Tests

Run all tests in headless mode:
```bash
npx playwright test
```

Run tests in UI mode (with Playwright's UI):
```bash
npx playwright test --ui
```

Run tests in debug mode:
```bash
npx playwright test --debug
```

Run specific test by title:
```bash
npx playwright test -g "should be able to fill registration form"
```

Run specific test file:
```bash
npx playwright test tests/login.spec.ts
```

## Test Reports

After running the tests, you can find two types of reports:

1. **Test Results** (`test-results/`):
   - Raw test execution data
   - Screenshots from test failures
   - Test artifacts (traces, videos)
   - Detailed technical information for debugging

2. **Playwright Reports** (`playwright-report/`):
   - HTML report - visual representation of test steps
   - Test statistics and execution times
