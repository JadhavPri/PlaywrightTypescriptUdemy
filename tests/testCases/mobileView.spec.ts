import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 11 Pro'],
});

test('My mobile test', async ({ page }) => {
  await page.goto('https://www.google.com/?gws_rd=ssl');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
});