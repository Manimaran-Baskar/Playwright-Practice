# Specs

This directory contains the test plans and automated test scripts for the SauceDemo application.

## Headed vs. Headless Test Execution

By default, Playwright runs tests in **Headless mode**, which means the browser UI is not displayed while the tests are executing. In **Headed mode** browser opened display in the UI


To run tests in headless mode:

```bash
npx playwright test <fileName>


To run tests in headed mode:

```bash
npx playwright test <fileName> --headed