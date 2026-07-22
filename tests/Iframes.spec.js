import { test, expect } from "@playwright/test";

test("iframe handeling", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const iframepage = page.frameLocator("#courses-iframe");

    await iframepage.locator('li a[href*="lifetime-access"]:visible').click();
    const text = await iframepage.locator(".text h2").textContent();
    text.split(" ")[1]; // this will split the sentence with the space and take the second word from the sentence
    console.log(text.split(" ")[1]);

    await page.pause();

})