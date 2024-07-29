import {test, expect} from '@playwright/test'

test('Text Match / Mismatch Assertion', async({page})=>{
    await page.goto('https://letcode.in/buttons');
    await expect(page.locator('[id="color"]')).toHaveText('What is my color?');
    await expect(page.locator('[id="color"]')).not.toHaveText('abcd');

    await page.close();

})