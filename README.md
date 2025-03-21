# Swiss Sign UI Tests

This repository contains automated UI tests for the Swiss Sign application using Playwright.

## Prerequisites

- Node.js (version specified in package.json)
- npm (Node Package Manager)

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
├── tests/                    # Test files
│   ├── login.spec.ts        # Login test scenarios
│   ├── pages/               # Page object models
│   └── flows/               # Test flows and scenarios
├── playwright.config.ts     # Playwright configuration
└── package.json            # Project dependencies and scripts
```

## Running Tests

To run the tests, use the following command:

```bash
npx playwright test
```

## Test Reports

After running the tests, you can find:
- Test results in the `test-results/` directory
- Playwright reports in the `playwright-report/` directory

## Development

This project uses:
- Playwright for end-to-end testing
- TypeScript for type safety
- Page Object Model pattern for better test organization

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License. 