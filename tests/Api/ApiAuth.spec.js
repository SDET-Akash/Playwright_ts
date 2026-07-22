import { test, expect } from '@playwright/test';
import { expectFailure } from 'node:test';
// route.continoue used to override the request url and route.fulfill used to override the responce of the api call
test('security test request', async ({ page }) => {

    const Product = page.locator('.card-body');
    const ProductName = 'ZARA COAT 3';
    // 1. login to the application
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill('anshika@gmail.com');
    await page.locator('#userPassword').fill('Iamking@000');
    await page.locator('#login').click();

    // this will wait for the all network call to be completed
    await page.waitForLoadState('networkidle');
    await page.locator('.card-body b').first().waitFor();

    await page.locator('button[routerlink*="myorders"]').click();

    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*',
        route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=94837483748' }))

    await page.locator("button:has-text('View')").first().click();

    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order")
    // await page.pause();

})