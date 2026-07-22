import {test, expect} from '@playwright/test';

test.skip("screenshot test",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.screenshot({path:"screenshot.png",fullPage:true});

    expect(page.locator('#opentab').first()).toBeVisible();
    await page.locator('#opentab').first().screenshot({path:"elementScreenshot123.png"});
    await page.locator("#displayed-text").screenshot({path:"elementScreenshot.png"});
})