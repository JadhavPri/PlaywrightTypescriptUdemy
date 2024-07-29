import {test, expect} from '@playwright/test';

test('Test Checkbox', async({page}) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    const cricketCheckbox = page.locator('#checkbox1');
    const moviesCheckbox = page.locator('#checkbox2');
    const hockeyCheckbox = page.locator('#checkbox3');

    // way 1 assert
    expect(cricketCheckbox).not.toBeChecked();
    expect(moviesCheckbox).not.toBeChecked();
    expect(hockeyCheckbox).not.toBeChecked();
    
    // way 2 assert
    expect(await cricketCheckbox.isChecked()).toBeFalsy();
    expect(await moviesCheckbox.isChecked()).toBeFalsy();
    expect(await hockeyCheckbox.isChecked()).toBeFalsy();
    await page.waitForTimeout(3000);

    // Checking the checkbox
    await cricketCheckbox.check();
    await moviesCheckbox.check();
    await hockeyCheckbox.check();
    await page.waitForTimeout(3000);

    // Now checking if it's checked or not
    expect(cricketCheckbox).toBeChecked();
    expect(moviesCheckbox).toBeChecked();
    expect(await hockeyCheckbox.isChecked()).toBeTruthy();

    await page.close();


})