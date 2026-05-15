import { test } from '../fixtures/testFixtures';

import { CartHelper } from '../helpers/cartHelper';

import { generateOrderData }
  from '../utils/test-data';

test('Complete Checkout Process', async ({
  page,
  homePage,
  cartPage,
  checkoutPage
}) => {

  const cartHelper = new CartHelper(page);

  const productName = 'Samsung galaxy s6';

  const orderData = generateOrderData();

  await homePage.open();

  await cartHelper.addProductToCart(productName);

  await cartPage.placeOrder();

  await checkoutPage.fillCheckoutForm(orderData);

  await checkoutPage.purchase();

  await checkoutPage.verifyPurchaseSuccess();
});