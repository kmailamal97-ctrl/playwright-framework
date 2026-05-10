import { test } from '../fixtures/test-fixtures';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('User can place order', async ({ loggedInPage }) => {

  const productPage = new ProductPage(loggedInPage);
  const cartPage = new CartPage(loggedInPage);
  const checkoutPage = new CheckoutPage(loggedInPage);

  await productPage.selectFirstProduct();
  await productPage.addToCart();

  await cartPage.openCart();

  await checkoutPage.placeOrder();

  await checkoutPage.fillOrderForm('Amal', 'card123');

  await checkoutPage.confirmOrder();
});
