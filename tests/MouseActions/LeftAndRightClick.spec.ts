import {test, expect} from '@playwright/test';

test('Mouse: Left Click', async({page}) => {
    await page.goto('https://play1.automationcamp.ir/mouse_events.html');
    await page.waitForTimeout(3000);
    await page.locator('#click_area').click();
    await expect(page.locator('#click_type')).toHaveText('Click');
    await page.waitForTimeout(3000)
    await page.close();

})

test('Mouse: Double Click', async({page}) => {
    await page.goto('https://play1.automationcamp.ir/mouse_events.html');
    await page.waitForTimeout(3000);
    await page.locator('#click_area').dblclick();
    await expect(page.locator('#click_type')).toHaveText('Double-Click');
    await page.waitForTimeout(3000)
    await page.close();

})

test('Mouse: Right Click', async({page}) => {
    await page.goto('https://play1.automationcamp.ir/mouse_events.html');
    await page.waitForTimeout(3000);
    await page.locator('#click_area').click({button:'right'});
    await expect(page.locator('#click_type')).toHaveText('Right-Click');
    await page.waitForTimeout(3000)
    await page.close();

})

