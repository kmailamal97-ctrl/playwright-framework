import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class CartPage extends BasePage {

  async openCart() {
    await this.click('#cartur');
  }

 async verifyProductExists(product: string) {

  await expect(
    this.page.getByRole('cell', { name: product }).first()
  ).toBeVisible();
}
}