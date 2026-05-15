import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { AlertHelper } from '../helpers/alertHelper';

export class ProductPage extends BasePage {

  readonly addToCartButton: Locator;

  private alertHelper: AlertHelper;

  constructor(page: Page) {
    super(page);

    this.addToCartButton =
      page.getByRole('link', { name: 'Add to cart' });

    this.alertHelper = new AlertHelper(page);
  }

  async addToCart() {

    await this.alertHelper.acceptAlert();

    await this.click(this.addToCartButton);
  }
}