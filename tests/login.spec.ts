import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../utils/test-data';

test('User can login successfully', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.openWebsite();
  await loginPage.login(
    testData.user.username,
    testData.user.password
  );

  await expect(page.locator('#nameofuser'))
    .toContainText(testData.user.username);
});