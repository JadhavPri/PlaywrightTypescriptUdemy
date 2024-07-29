import {test, expect} from '@playwright/test';

test('Automating web table', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('table[name="BookTable"]');


    await page.locator('label[for="days"]').scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);

    await page.locator('div[id="HTML1"] div[class="widget-content"]').scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);

    // Total rows and columns
    const columns = table.locator('tr th')
    console.log("Number of columns:", await columns.count());

    const rows = table.locator('tbody tr')
    console.log("Number of rows:", await rows.count());

    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(7);

    await page.close();

})