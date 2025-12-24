import { Page } from '@playwright/test';
import { LoginLocators } from '../locators/loginLocatos';

export class LoginPage {
  constructor(private page: Page) { }

  async goTo() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.page.locator(LoginLocators.usernameInput).fill(username);
    await this.page.locator(LoginLocators.passwordInput).fill(password);
    await this.page.locator(LoginLocators.loginButton).click();
  }
}
