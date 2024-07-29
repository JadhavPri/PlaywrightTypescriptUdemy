import { test, expect } from '@playwright/test';

test('Test Calendar', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
    let date = '2024-01-01';
    await page.locator('#birthday').fill(date);
    await page.pause();



})
