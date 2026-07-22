import {test, expect} from '@playwright/test';

test("screenshot test",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.screenshot({path:"screenshot.png",fullPage:true});

    expect(await page.screenshot()).toMatchSnapshot('landing.png');
})