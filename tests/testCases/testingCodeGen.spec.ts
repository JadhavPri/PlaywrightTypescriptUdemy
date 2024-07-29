import { test, expect } from '@playwright/test';

test('My codegen test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Gmaillll').click();
  await page.getByText('Create an account').nth(2).click();
  await page.getByRole('link', { name: 'For my personal use' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
});