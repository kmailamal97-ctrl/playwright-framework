import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {

  async placeOrder() {
await this.page.getByRole('button', { name: 'Place Order' }).click();
    // 👇 مهم جدًا
    await this.page.waitForSelector('#orderModal', { state: 'visible' });
  }

  async fillOrderForm(name: string, creditcard: string) {
    await this.fill('#name', name);
    await this.fill('#country', creditcard);
  }

  async confirmOrder() {
    await this.click('button:has-text("Purchase")');
  }
}