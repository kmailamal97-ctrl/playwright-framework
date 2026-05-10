import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  async openWebsite() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.click('#login2');
    await this.fill('#loginusername', username);
    await this.fill('#loginpassword', password);
    await this.click('button:has-text("Log in")');
  }
}