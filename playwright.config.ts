import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',

  timeout: 30000,

  retries: 1,

  workers: 2,

  reporter: [
    ['html'],
    ['list'],
    ['allure-playwright']
  ],

  use: {
    baseURL: process.env.BASE_URL,

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    },
   // {
     // name: 'firefox',
      //use: { browserName: 'firefox' }
    //}
  ]
});