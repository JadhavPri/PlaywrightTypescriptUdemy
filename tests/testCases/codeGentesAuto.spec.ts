import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('button', { name: 'OK, got it' }).click();
});