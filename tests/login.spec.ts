import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const baseUrl = process.env.BASE_URL!;
const validUser = process.env.VALID_USERNAME!;
const validPass = process.env.VALID_PASSWORD!;
const invalidUser = process.env.INVALID_USERNAME!;
const invalidPass = process.env.INVALID_PASSWORD!;

test.describe('Login Tests', () => {

  test('Positive: Valid login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate(baseUrl);
    await loginPage.login(validUser, validPass);
    await loginPage.verifySuccess();
  });

  test('Negative: Invalid username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate(baseUrl);
    await loginPage.login(invalidUser, validPass);
    await loginPage.verifyError();
  });

  test('Negative: Invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate(baseUrl);
    await loginPage.login(validUser, invalidPass);
    await loginPage.verifyError();
  });

  test('Negative: Empty credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate(baseUrl);
    await loginPage.login('', '');
    await loginPage.verifyError();
  });

});
