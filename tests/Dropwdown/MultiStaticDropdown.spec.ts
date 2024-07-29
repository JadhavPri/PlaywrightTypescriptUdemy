import {test, expect} from '@playwright/test';

test('Test Static Dropdown', async({page}) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    
    await page.selectOption('#multi-select',[
        {value:"Ohio"},
        {label:"Texas"},
        {index:3}

    ]);
    await page.pause();
    await page.close();


})