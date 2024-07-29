import {test, expect} from '@playwright/test';

test('Confirmation alert with Ok button', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    
    page.on("dialog",async(alert)=>{
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS Confirm');
        await alert.accept();
        await expect(page.locator('#result')).toHaveText('You clicked: Ok');  
    })
    await page.locator('button[onclick="jsConfirm()"]').click();
   
    await page.close();
})

test.only('Confirmation alert with Cancel button', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    
    page.on("dialog",async(alert)=>{
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS Confirm');
        await alert.dismiss();
        await expect(page.locator('#result')).toHaveText('You clicked: Cancel');  
    })
    await page.locator('button[onclick="jsConfirm()"]').click();
   
    await page.close();
})