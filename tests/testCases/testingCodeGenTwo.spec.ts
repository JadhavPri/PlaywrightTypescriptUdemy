import { test, expect } from '@playwright/test';

test('My codegen test', async ({ page, context }) => {
  await context.tracing.start({snapshots:true, screenshots:true});

  await page.goto('https://www.google.com/');
  await page.getByLabel('Gmail').click();
  await page.getByText('Create an account').nth(2).click();
  await page.getByRole('link', { name: 'For my personal use' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await context.tracing.stop({path:'myTraceTest.zip'});
});