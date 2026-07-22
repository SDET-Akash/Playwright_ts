import { test, expect } from '@playwright/test';

test('special locators', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/angularpractice/');

    // GetByLabel
    await page.getByLabel('Check me out if you Love IceCreams!').check();
    await page.getByLabel('Employed').click();
    await page.getByLabel('Gender').selectOption('Female');

    // GetByPlaceholder
    // await page.getByPlaceholder('Name').fill('John Doe');
    await page.getByPlaceholder('Password').fill('john.doe@example.com');


    // GetByRole

    await page.getByRole("button", { name: "Submit" }).click();

    await page.getByRole("link",{name : "Shop"}).click();

    // chaining with methods using filter method

    await page.locator('app-card').filter({hasText: 'Nokia Edge'}).getByRole('button').click();

    await page.pause();
})