# Playwright Login Automation

This project automates the login functionality of a web application using **Playwright** with **TypeScript** and follows the **Page Object Model (POM)** design pattern.  
The framework is designed to be scalable, maintainable, and suitable for real-world automation testing.

## Tech Stack
- Playwright
- TypeScript
- Node.js
- Page Object Model

Ensure the following tools are installed on your machine:
- **Node.js** (version 18 or higher recommended)
- **npm** (comes with Node.js)
- **Git**

Verify installations using:

- node -v

- npm -v

- git --version

## Setup
- git clone https://github.com/vruttikalani30/Playwright-Login-Automation
- cd playwright-login 
- npm install
- npx playwright install

Create .env file

Run Tests
- npx playwright test

Run tests in headed mode
- npx playwright test --headed

Run a specific test file
- npx playwright test tests/login.spec.ts

View Report
- npx playwright show-report
