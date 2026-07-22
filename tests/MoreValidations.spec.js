import {test, expect} from "@playwright/test";

test("validations and other imp things",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.goto("https://www.google.com/");
    await page.goBack();
    await page.goForward();
    await page.reload();

    
})