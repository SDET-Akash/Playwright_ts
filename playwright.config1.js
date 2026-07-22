// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  retries:1,

  timeout: 100 * 1000,

  expect: {
    timeout: 5000,
  },

  reporter: 'html',
  use: {
    screenshot: 'on',

    trace: 'on',

  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'playwright-01',
      use:
      {
        browserName: "chromium", //
        headless: false,
        // viewport: { width: 1280, height: 720 }, // to verify the responsive design of the application
        video: "retain-on-failure",
        screenshot: "only-on-failure",
        trace: 'on',
        ignoreHTTPSErrors: true,  // this will used when the website is private and give ssl certification error
        permissions: ['geolocation'], // location permission popup will handle
        // ...devices['iPhone 13'], // to run the test on mobile devices
        // viewport: {width:720,height:720}

      },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // }


  ],


});

