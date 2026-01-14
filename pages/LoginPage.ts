import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('#submit');
    this.successMessage = page.locator('text=Logged In Successfully');
    this.errorMessage = page.locator('#error');
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async verifySuccess() {
    await expect(this.successMessage).toBeVisible();
  }

  async verifyError() {
    await expect(this.errorMessage).toBeVisible();
  }
}
