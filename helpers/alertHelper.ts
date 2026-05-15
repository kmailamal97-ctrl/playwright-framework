import { Page } from '@playwright/test';

export class AlertHelper {

  constructor(private page: Page) {}

  async acceptAlert() {

    this.page.once('dialog', async dialog => {
      await dialog.accept();
    });
  }
}