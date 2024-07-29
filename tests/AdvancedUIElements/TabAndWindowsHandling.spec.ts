import { test, expect } from '@playwright/test';

test('Single Tab Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Windows.html');
    const [NewTab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button:has-text("click")')

    ]) 

   
    await NewTab.waitForLoadState();
  
    await NewTab.locator('#navbarDropdown').click();
 
    await NewTab.locator("a[href='/about']").click();

    await NewTab.waitForTimeout(5000);
    await NewTab.close()
    await page.close();

})

test('Single window Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Windows.html');
    await page.locator('.analystic[href="#Seperate"]').click();
    const [NewWIndow] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button[onclick="newwindow()"]')

    ]) 

   
    await NewWIndow.waitForLoadState();
  
    await NewWIndow.locator('#navbarDropdown').click();
 
    await NewWIndow.locator("a[href='/about']").click();

    await NewWIndow.waitForTimeout(5000);
    await NewWIndow.close()
    await page.close();

})


test.only('Multiple Tab Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Windows.html');
    await page.locator('.analystic[href="#Multiple"]').click();


    const [multipleTab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button[onclick="multiwindow()"]')

    ]) 

    await multipleTab.waitForLoadState();

    // pages gives how many pages are created
    const pages = multipleTab.context().pages();
    console.log("Total pages opened"+pages.length)

    await pages[1].waitForLoadState('networkidle');

   
    const emailLocator = pages[1].locator('//input[@id="email"]');
    await emailLocator.waitFor({ state: 'visible', timeout: 10000 });  // Adjust timeout as needed
    await emailLocator.fill('playwright@gmail.com');
    await pages[1].waitForTimeout(5000);
   
    // await pages[1].locator('//input[@id="email"]').fill('playwright@gmail.com');
    //await multipleTab.waitForTimeout(5000);

    //await pages[2].locator('#navbarDropdown').click();
 
    //await pages[2].locator("a[href='/about']").click();

    //await multipleTab.waitForTimeout(5000);

    await pages[2].waitForLoadState('networkidle');
    await pages[2].locator('#navbarDropdown').click();
    await pages[2].locator("a[href='/about']").click();
    await pages[1].close();
    await pages[2].close();

})