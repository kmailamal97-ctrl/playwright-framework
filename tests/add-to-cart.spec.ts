import { test } from '../fixtures/test-fixtures';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { testData } from '../utils/test-data';

test('Add product to cart', async ({ loggedInPage }) => {

  const productPage = new ProductPage(loggedInPage);
  const cartPage = new CartPage(loggedInPage);

   await test.step('Select first product', async () => {
    await productPage.selectFirstProduct();
  });

  await test.step('Add product to cart', async () => {
    await productPage.addToCart();
  });

  await test.step('Open cart', async () => {
    await cartPage.openCart();
  });
//await allure(old).step  = await test(new).step
  await test.step('Verify product exists', async () => {
    await cartPage.verifyProductExists('Samsung galaxy s6');
  });
});