import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {

  readonly nameInput: Locator;
  readonly countryInput: Locator;
  readonly cityInput: Locator;
  readonly cardInput: Locator;
  readonly monthInput: Locator;
  readonly yearInput: Locator;
  readonly purchaseButton: Locator;
  readonly successMessage: Locator;
  readonly okButton: Locator;

  constructor(page: Page) {
    super(page);

    this.nameInput = page.locator('#name');

    this.countryInput = page.locator('#country');

    this.cityInput = page.locator('#city');

    this.cardInput = page.locator('#card');

    this.monthInput = page.locator('#month');

    this.yearInput = page.locator('#year');

    this.purchaseButton =
      page.getByRole('button', { name: 'Purchase' });

    this.successMessage =
      page.locator('.sweet-alert h2');

    this.okButton =
      page.getByRole('button', { name: 'OK' });
  }

  async fillCheckoutForm(data: {
    name: string;
    country: string;
    city: string;
    card: string;
    month: string;
    year: string;
  }) {

    await this.type(this.nameInput, data.name);

    await this.type(this.countryInput, data.country);

    await this.type(this.cityInput, data.city);

    await this.type(this.cardInput, data.card);

    await this.type(this.monthInput, data.month);

    await this.type(this.yearInput, data.year);
  }

  async purchase() {
    await this.click(this.purchaseButton);
  }

  async verifyPurchaseSuccess() {

    await expect(this.successMessage)
      .toHaveText('Thank you for your purchase!');

    await this.click(this.okButton);
  }
}