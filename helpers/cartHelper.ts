import { Page } from '@playwright/test';

import { HomePage } from '../pages/HomePage';

import { ProductPage } from '../pages/ProductPage';

export class CartHelper {

  constructor(private page: Page) {}

  async addProductToCart(productName: string) {

    const homePage = new HomePage(this.page);

    const productPage = new ProductPage(this.page);

    await homePage.openProduct(productName);

    await productPage.addToCart();

    await homePage.openCart();
  }
}