import { test } from '../fixtures/testFixtures';

import { CartHelper } from '../helpers/cartHelper';

test('Add Product To Cart', async ({
  page,
  homePage,
  cartPage
}) => {

  const cartHelper = new CartHelper(page);

  const productName = 'Samsung galaxy s6';

  await homePage.open();

  await cartHelper.addProductToCart(productName);

  await cartPage.verifyProductInCart(productName);
});