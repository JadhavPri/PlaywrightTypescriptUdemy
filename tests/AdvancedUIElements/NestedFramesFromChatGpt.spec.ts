import { test, expect } from '@playwright/test';

test('Nested Frames', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame3 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });

    if (!frame3) {
        throw new Error('Frame with the specified URL not found');
    }

    const childFrames = frame3.childFrames();
    console.log("Number of child frames: " + childFrames.length);

    if (childFrames.length > 0) {
        const firstChildFrame = childFrames[0];

        await firstChildFrame.waitForLoadState('load');

        // Use Locator methods
        const locator1 = firstChildFrame.locator('//*[@id="i8"]/div[3]/div');
        await locator1.click({ force: true }); // Ensure the correct method is used

        // Check if the checkbox is checked (or radio button is selected)
        const isChecked1 = await locator1.evaluate(el => (el as HTMLInputElement).checked);
        console.log('Element 1 is checked: ' + isChecked1);

        const locator2 = firstChildFrame.locator('//*[@id="i19"]/div[3]');
        await locator2.click({ force: true });

        const isChecked2 = await locator2.evaluate(el => (el as HTMLInputElement).checked);
        console.log('Element 2 is checked: ' + isChecked2);
    } else {
        console.log('No child frames found');
    }

    await page.waitForTimeout(5000);
    await page.close();
});
