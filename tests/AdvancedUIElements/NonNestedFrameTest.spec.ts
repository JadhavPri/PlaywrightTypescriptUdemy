import {test, expect, Locator, Page} from '@playwright/test';

test('Frame handling using Page.Frame()', async({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')

    // To find total number of frames 
    // Frames() : as returns array of all frames attached to the page
    const allFrames =  page.frames();
    const allFramesCount = allFrames.length;
    console.log('Total frames count is' + allFramesCount);


    // Check if the frame has the url 
    const frame1 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1?.locator('input[name="mytext1"]').fill('Playwright')

    await page.waitForTimeout(5000);
    await page.close();

    // we need to check if name attribute is present for the frames for the user
    /**
     If the frame attribute has a name attribute, then we can use it as
     await page.frame('name')
     
     */


})

test.only('Frame handling using Page.FrameLocator()', async({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')

    // Check if the frame has the url 
    const frame1 = page.frameLocator('frame[src="frame_1.html"]');
    await frame1?.locator('input[name="mytext1"]').fill('Playwright')
    await page.waitForTimeout(5000);
    await page.close();


})