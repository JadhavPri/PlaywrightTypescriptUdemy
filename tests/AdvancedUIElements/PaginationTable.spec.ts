import {test, expect, Locator, Page} from '@playwright/test';

test('Single checkbox', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const columns = table.locator('thead tr th');
    const rows = table.locator('tbody tr');

    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Product 5'
    })

    await matchedRow.locator('input').check();
    await page.pause();

})


test('Multiple products with multiple pages', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const columns = table.locator('thead tr th');
    const rows = table.locator('tbody tr');

    await page.locator('label[for="days"]').scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);

    await page.locator('#HTML8').scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    
    await selectProduct(rows, page, 'Product 2');
    await selectProduct(rows, page, 'Product 4');
    await selectProduct(rows, page, 'Product 5');
    

    await page.pause();
    //await page.pause();

    await page.close();
})

// Writing a function to select products
async function selectProduct(rows: Locator,page: Page,productName: string ){
       
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: productName
})
await matchedRow.locator('input').check();

}

test('All items from page 1', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const columns = table.locator('thead tr th');
    const rows = table.locator('tbody tr');

   for(let i=0; i< await rows.count();i++){
        const row = rows.nth(i);
        const rowData = row.locator('td');
        for(let j=0; j < await rowData.count(); j++){
            const cellContent = await rowData.nth(j).textContent();
            console.log(cellContent) 
        }
   }


})

test('All items from all pages', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const columns = table.locator('thead tr th');
    const rows = table.locator('tbody tr');

    const pages = page.locator('#pagination li a')
    const totalPages = await pages.count();
    console.log("Total no of pages:" +totalPages)

    for(let p=0; p<totalPages; p++){
        if(p>0){
            await pages.nth(p).click();
        }

   for(let i=0; i< await rows.count();i++){
    const row = rows.nth(i);
    const rowData = row.locator('td');
    for(let j=0; j < await rowData.count(); j++){
        const cellContent = await rowData.nth(j).textContent();
        console.log(cellContent) 
        }   
    }
    }


})