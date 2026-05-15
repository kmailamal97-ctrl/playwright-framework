import { expect, Locator, Page } from '@playwright/test';

export class BasePage {

  constructor(protected page: Page) {}

  async navigateTo(path: string = '/') {
    await this.page.goto(path);
  }

  async click(locator: Locator) {
    await expect(locator).toBeVisible();
    await locator.click();
  }

  async type(locator: Locator, value: string) {
    await expect(locator).toBeVisible();
    await locator.fill(value);
  }

  async verifyVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }

  async verifyText(locator: Locator, text: string) {
    await expect(locator).toContainText(text);
  }
}