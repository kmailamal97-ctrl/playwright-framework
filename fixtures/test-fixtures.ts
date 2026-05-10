import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../utils/test-data';

export const test = base.extend<{
  loggedInPage: Page;
}>({

  loggedInPage: async ({ page }, use) => {

    const loginPage = new LoginPage(page);

    // 👇 افتح الموقع
    await loginPage.openWebsite();

    // 👇 اعمل login
    await loginPage.login(
      testData.user.username,
      testData.user.password
    );

    // 👇 مرر الصفحة بعد login
    await use(page);
  }

});

export { expect } from '@playwright/test';