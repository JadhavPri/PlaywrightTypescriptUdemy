import { test, expect } from '@playwright/test';
import { DateTime } from 'luxon';

test('Luxon', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');

    await page.locator('input[placeholder="Start date"]').click()
    const monthYear = page.locator('div[class="datepicker-days"] th[class="datepicker-switch"]')
    const prevButton = page.locator('div[class="datepicker-days"] th[class="prev"]')
    const nextButton = page.locator('div[class="datepicker-days"] th[class="next"]')

    let dateToSelect = "January 2024";
    const formattedMonth =  DateTime.fromFormat(dateToSelect, "MMMM yyyyy");

    while (await monthYear.textContent() != dateToSelect ){
        if(formattedMonth < DateTime.fromJSDate(new Date())){
            await prevButton.click();

        }
        else{
            await nextButton.click();
        }
    }

    await page.locator('//td[@class="active selected range-start range-end day"]').waitFor({ state: 'visible', timeout: 50000 });
    await page.locator('//td[@class="active selected range-start range-end day"]').click();


});