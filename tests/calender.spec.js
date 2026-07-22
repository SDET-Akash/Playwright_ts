import { test, expect } from "@playwright/test"

test("calender test", async ({ page }) => {

    const month = "8";
    const date = "12";
    const year = "2028";


    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.locator('.react-calendar__year-view__months__month').nth(Number(month)-1).click();
    await page.locator('//abbr[text()="'+date+'"]').click();



    // await page.locator(".react-date-picker__inputGroup").click();
    // await page.locator(".react-calendar__navigation__label").click();
    // await page.locator(".react-calendar__navigation__label").click();
    // await page.getByText(year).click();
    // await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber)-1).click();
    // await page.locator("//abbr[text()='"+date+"']").click();





})