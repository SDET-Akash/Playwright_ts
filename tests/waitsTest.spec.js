import { expect, test } from '@playwright/test';

test('alltextcontent', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill('anshika@gmail.com');
    await page.locator('#userPassword').fill('Iamking@000');
    await page.locator('#login').click();

    // so we will use this for the wait for the network call and then we will use the alltextcontent
    // await page.waitForLoadState('networkidle')
    await page.locator('.card-body b').first().waitFor();
    const allText = await page.locator('.card-body b').allTextContents();

    console.log(allText);
    
})
