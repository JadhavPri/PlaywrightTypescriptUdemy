import {test, expect} from '@playwright/test';

test('Simple alert Dropdown without reading the alert text', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.pause();
    await page.locator('button[onclick="jsAlert()"]').click();
    await page.pause();
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    await page.close();

})

test.only('Simple alert Dropdown with reading the alert text', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on("dialog",async(alert)=>{
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS Alert');
        await alert.accept();
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');  
    })
    await page.locator('button[onclick="jsAlert()"]').click();
   
    await page.close();
})