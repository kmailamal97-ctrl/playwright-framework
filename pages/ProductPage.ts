import { BasePage } from './BasePage';

export class ProductPage extends BasePage {

  async selectFirstProduct() {

    await this.page.waitForSelector('.hrefch');

    await this.page.locator('.hrefch').first().click();
  }

  async addToCart() {

    this.page.once('dialog', async dialog => {
      await dialog.accept();
    });

    await this.click('text=Add to cart');

    // 👇 مهم جدًا
    await this.page.waitForTimeout(2000);
  }
}