import { defineConfig } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'api',
      testDir: './tests/api',
      use: {
        baseURL: 'https://pokeapi.co/api/v2/',
      },
    },
    {
      name: 'e2e-chromium',
      testDir: './tests/e2e',
      use: {
        baseURL: 'https://www.saucedemo.com',
        browserName: 'chromium',
      },
    },
    {
      name: 'e2e-firefox',
      testDir: './tests/e2e',
      use: {
        baseURL: 'https://www.saucedemo.com',
        browserName: 'firefox',
      },
    },
    {
      name: 'e2e-webkit',
      testDir: './tests/e2e',
      use: {
        baseURL: 'https://www.saucedemo.com',
        browserName: 'webkit',
      },
    },
  ],
});