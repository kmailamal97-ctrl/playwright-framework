import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {

  readonly placeOrderButton: Locator;

  constructor(page: Page) {
    super(page);

    this.placeOrderButton =
      page.getByRole('button', { name: 'Place Order' });
  }

  productInCart(productName: string): Locator {

    return this.page.locator('tr', {
      hasText: productName
    });
  }

  async verifyProductInCart(productName: string) {

    await expect(
      this.productInCart(productName)
    ).toBeVisible();
  }

  async placeOrder() {
    await this.click(this.placeOrderButton);
  }
}