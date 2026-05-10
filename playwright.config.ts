import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30000,

  retries: 1, // مهم للاستقرار في CI

  workers: 2, // ممكن تزيديها حسب جهازك

  reporter: [
    ['html'],        // تقرير HTML
    ['list'],  
    ['allure-playwright']
      // output بالترمينال
  ],

  use: {
    baseURL: 'https://www.demoblaze.com/',
    headless: true,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  }
  ,projects: [
  {
    name: 'chromium',
    use: { browserName: 'chromium' }
  },
  {
    name: 'firefox',
    use: { browserName: 'firefox' }
  }
]
});