import {test, expect} from "@playwright/test";

test("validations and other imp things",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    page.on("dialog",dialog=> dialog.accept());

    await page.locator("#confirmbtn").click();
    // page.on("dialog",dialog=> dialog.dismiss());
    // page.on("dialog",dialog=> console.log(dialog.message()));

    // hover
    await page.locator("#mousehover").hover();
    await page.pause();

    

});