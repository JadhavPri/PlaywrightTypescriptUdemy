import { test, expect } from '@playwright/test';

test('Upload multiple files - Approach 1', async ({ page }) => {
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');

    const uploadFile = await Promise.all([
        
        page.waitForEvent('filechooser'),
        page.locator('input[name="files[]"]').click()
    ])
        await uploadFile[0].setFiles(['FilesToUpload/TestImageCheck.png', 'FilesToUpload/TestImageUpload.png']);

        await page.waitForTimeout(5000);
})

test('Upload multiple files - Approach 2', async ({ page }) => {
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');

    await page.setInputFiles('input[name="files[]"]',['FilesToUpload/TestImageCheck.png', 'FilesToUpload/TestImageUpload.png']);
    
    await page.waitForTimeout(5000);
})
