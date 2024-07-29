import { test, expect } from '@playwright/test';

test('Way 1 : File download with default name', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/FileDownload.html');
    await page.locator('#textbox').click();
    await page.locator('#textbox').pressSequentially('Playwright');

    await page.locator('//button[@id="createTxt"]').click();

    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#link-to-download').click()
    ]);

    // Remove path() and use saveAs() to save the file
    const fileName = download.suggestedFilename(); 
    await download.saveAs(fileName);

    console.log("File saved as: " + fileName);


    /*
    const download = await Promise.all([
        page.waitForEvent('download'),
        await page.locator('#link-to-download').click()

    ])

    const path = await download[0].path();
    console.log("Downloaded Path ..." + page);

    // way 1 : default file name
    const fileName = download[0]. suggestedFilename(); 
    await download[0].saveAs(fileName);

   */


})


test('Way 2 : File download with customized name', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/FileDownload.html');
    await page.locator('#textbox').click();
    await page.locator('#textbox').pressSequentially('Playwright');

    await page.locator('//button[@id="createTxt"]').click();

    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#link-to-download').click()
    ]);

    // Remove path() and use saveAs() to save the file
    const CustomizedfileName = "Playwright_Downloaded_File"; 
    await download.saveAs(CustomizedfileName);

    console.log("File saved as: " + CustomizedfileName);
})