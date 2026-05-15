import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

  readonly cartLink: Locator;

  constructor(page: Page) {
    super(page);

    this.cartLink = page.locator('#cartur');
  }

  async open() {
    await this.navigateTo('/');
  }

  productByName(productName: string): Locator {
    return this.page.getByRole('link', { name: productName });
  }

  async openProduct(productName: string) {
    await this.click(this.productByName(productName));
  }

  async openCart() {
    await this.click(this.cartLink);
  }
}