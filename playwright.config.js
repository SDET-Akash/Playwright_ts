// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 100 * 1000,

  expect: {
    timeout: 5000,
  },

  // Retries
  retries: process.env.CI ? 2 : 0,

  // Optional: stop after too many failures in CI
  // maxFailures: process.env.CI ? 10 : undefined,

  reporter: [
    ['list'],
    ['allure-playwright']
  ],

  use: {
    screenshot: 'on',

    trace: 'retain-on-failure',

    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});