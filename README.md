# SwissSign UI Tests

This repository contains automated UI tests.

## Prerequisites

- Node.js
- npm/yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/znevrly/swiss-sign-ui-tests.git
cd swiss-sign-ui-tests
```

2. Install dependencies:
```bash
npm install
```

## Project Structure

```
swiss-sign-ui-tests/
├── tests/                    
│   ├── login.spec.ts        # test scenarios
│   ├── pages/               # Page object models
│   └── flows/               # flows 
```

## Running Tests

Run tests in headless mode:
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
