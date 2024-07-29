import {test, expect} from '@playwright/test';

test('Test Radio Button', async({page}) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    const maleRadioButton = page.locator('input[value="Male"]');
    const femaleRadioButton = page.locator('input[value="FeMale"]');

    //way 1 assertion : be  default it' not checked 
    expect(maleRadioButton).not.toBeChecked();
    expect(femaleRadioButton).not.toBeChecked();

    //way 2 assertion
    expect(await maleRadioButton.isChecked()).toBeFalsy();
    expect(await femaleRadioButton.isChecked()).toBeFalsy();

    await maleRadioButton.check();
    expect(maleRadioButton).toBeChecked();
    await page.waitForTimeout(3000);

    await femaleRadioButton.check();
    expect(await femaleRadioButton.isChecked()).toBeTruthy();
    await page.waitForTimeout(3000);

    await page.close();


})