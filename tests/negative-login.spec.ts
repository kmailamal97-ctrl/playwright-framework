import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Invalid login should fail', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.openWebsite();
  await loginPage.login('wrong', 'wrong');

  await expect(page.locator('#nameofuser')).not.toBeVisible();
});