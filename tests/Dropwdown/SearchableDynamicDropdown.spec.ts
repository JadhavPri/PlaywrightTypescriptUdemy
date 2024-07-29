import {test, expect} from '@playwright/test';

test('Searchable Dropdown', async({page}) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('span[role="combobox"]').click();
    await page.locator('input[role="textbox"]').fill("United States of America");
    //li[role='treeitem']
    await page.waitForTimeout(2000);
    await page.locator('li[role="treeitem"]').click();
    await page.pause();


    await page.close();





})