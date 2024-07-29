import {test, expect} from '@playwright/test';

test('Searchable Dropdown', async({page}) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('span[role="combobox"]').click();
    await page.waitForTimeout(2000);
    await page.locator('ul#select2-country-results')
    .locator("li",{
        hasText: "United States of America"
    }).click();

    await page.pause();
    await page.close();





})