import { test, expect } from '@playwright/test';

test('static dropdown ui test', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('[name="username"]').fill('akashshetty');
    await page.locator('[name="password"]').fill('password');

    const dropdown = page.locator('select.form-control');
    await dropdown.selectOption('consult');

    await page.locator('.checkmark').nth(1).click();
    // assertions on this checkbox 
    expect(page.locator('.checkmark').nth(1)).toBeChecked();
    await page.locator('.checkmark').nth(1).isChecked();

    await page.locator('#okayBtn').click();

    // checkbox test
    await page.locator('#terms').click();
    expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    // expect(page.locator('#terms')).not.toBeChecked();
    expect(await page.locator('#terms').isChecked()).toBeFalsy();

    // check the blinking url with the proper validation and assertions

    await expect(page.locator("[href*='documents-request']")).toHaveAttribute('class','blinkingText');




    await page.locator('[type="submit"]').click();

    // this will help for the debugging purpose and also for the development purpose, 
    // so that we can see the step by step execution of the test case
    // await page.pause();




})