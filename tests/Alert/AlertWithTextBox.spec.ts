import {test, expect} from '@playwright/test';

test('Prompt alert with Ok button', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    
    page.on("dialog",async(alert)=>{
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS prompt');
        await alert.accept("Playwright");
        await expect(page.locator('#result')).toHaveText('You entered: Playwright');  
    })
    await page.locator('button[onclick="jsPrompt()"]').click();
   
    await page.close();
})

test('Prompt alert with Cancel button', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    
    page.on("dialog",async(alert)=>{
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS prompt');
        await alert.dismiss();
        await expect(page.locator('#result')).toHaveText('You entered: null');  
    })
    await page.locator('button[onclick="jsPrompt()"]').click();
   
    await page.close();
})