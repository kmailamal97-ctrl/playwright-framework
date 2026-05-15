import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  readonly loginLink: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly welcomeUser: Locator;

  constructor(page: Page) {
    super(page);

    this.loginLink = page.locator('#login2');

    this.usernameInput = page.locator('#loginusername');

    this.passwordInput = page.locator('#loginpassword');

    this.loginButton = page.locator('button[onclick="logIn()"]');

    this.welcomeUser = page.locator('#nameofuser');
  }

  async openLoginModal() {
    await this.click(this.loginLink);
  }

  async login(username: string, password: string) {

    await this.openLoginModal();

    await this.type(this.usernameInput, username);

    await this.type(this.passwordInput, password);

    await this.click(this.loginButton);
  }

  async loginExpectingAlert(
    username: string,
    password: string
  ) {

    await this.openLoginModal();

    await this.type(this.usernameInput, username);

    await this.type(this.passwordInput, password);

    await this.click(this.loginButton);
  }

  async verifyLoginSuccess(username: string) {
    await expect(this.welcomeUser)
      .toContainText(`Welcome ${username}`);
  }
}