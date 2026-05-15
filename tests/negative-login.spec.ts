import { test, expect } from '@playwright/test';

import { HomePage } from '../pages/HomePage';

import { LoginPage } from '../pages/LoginPage';

test.describe('Negative Login Scenarios', () => {

  test('Login with invalid credentials', async ({ page }) => {

    const homePage = new HomePage(page);

    const loginPage = new LoginPage(page);

    await homePage.open();

    page.once('dialog', async dialog => {

      expect(dialog.message())
        .toContain('Wrong password');

      await dialog.accept();
    });

    await loginPage.loginExpectingAlert(
      'wrongUser',
      'wrongPass'
    );
  });

  test('Login with empty username', async ({ page }) => {

    const homePage = new HomePage(page);

    const loginPage = new LoginPage(page);

    await homePage.open();

    page.once('dialog', async dialog => {

      expect(dialog.message())
        .toContain('Please fill out Username and Password');

      await dialog.accept();
    });

    await loginPage.loginExpectingAlert(
      '',
      'test123'
    );
  });

  test('Login with empty password', async ({ page }) => {

    const homePage = new HomePage(page);

    const loginPage = new LoginPage(page);

    await homePage.open();

    page.once('dialog', async dialog => {

      expect(dialog.message())
        .toContain('Please fill out Username and Password');

      await dialog.accept();
    });

    await loginPage.loginExpectingAlert(
      'test',
      ''
    );
  });
});