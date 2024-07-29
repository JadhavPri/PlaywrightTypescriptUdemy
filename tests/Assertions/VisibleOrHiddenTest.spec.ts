import {test, expect} from '@playwright/test'

test('Visible/Hidden Assertion', async({page})=>{
    await page.goto('https://www.letskodeit.com/practice');
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await page.waitForTimeout(1000);
    await expect(page.locator('#displayed-text')).toBeHidden();
    await page.close();

})

test('Negative test for Assertion', async({page})=>{
    await page.goto('https://www.letskodeit.com/practice');
    await expect(page.locator('#displayed-text')).toBeHidden();
    await page.locator('#hide-textbox').click();
    await page.waitForTimeout(1000);
    await expect(page.locator('#displayed-text')).toBeHidden();
    await page.close();

})