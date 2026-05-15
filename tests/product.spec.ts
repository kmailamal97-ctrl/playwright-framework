import { test } from '@playwright/test';

import { HomePage } from '../pages/HomePage';

test('Open Product Details', async ({ page }) => {

  const homePage = new HomePage(page);

  await homePage.open();

  await homePage.openProduct('Samsung galaxy s6');
});