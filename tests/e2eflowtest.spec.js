import { test, expect } from '@playwright/test';


test("eccomerce end to end test flow", async ({ page }) => {

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
    const allText = await page.locator('.card-body b').allTextContents();

    console.log(allText);
    // go to the dashboard
    // then search for ZARA COAT 4

    const count = await Product.count();

    for (let i = 0; i < count; i++) {
        if (await Product.nth(i).locator('b').textContent() === ProductName) {
            // add to cart

            await Product.nth(i).locator('text= Add To Cart').click();
            break;
        }

    }

    // await page.pause();

    await page.locator("[routerlink*='cart']").click();

    // await page.locator("h3:has-text('ZARA COAT 3')").waitFor();
    await page.locator("div li").first().waitFor();

    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();

    // await page.pause();

    // presssequencially - this will add one by one character in the inpt box or the dropdown
    await page.locator("text=Checkout").click();
    await page.locator("[placeholder*='Country']").pressSequentially("ind");

    // wait for the dropdown to be visible
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();

    const optionCount = await dropdown.locator("button").count();

    for (let i = 0; i < optionCount; ++i) {
        const text = await dropdown.locator("button").nth(i).textContent();

        if (text === ' India') {
            await dropdown.locator("button").nth(i).click();
            break;
        }


    }

    expect(page.locator(".user__name [type='text']").first()).toHaveText('anshika@gmail.com');

    await page.locator('a:has-text("Place Order")').click();
    await expect(page.locator('.hero-primary')).toHaveText(" Thankyou for the order. ");

    const orderId = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
    console.log(orderId);

    await page.locator('button[routerlink*="myorders"]').click();

    const rows = await page.locator('tbody tr');

    const counts = await rows.count();

    for (let i = 0; i < counts; ++i) {
        const roworderid = await rows.nth(i).locator('th').textContent();

        if (orderId.includes(roworderid)) {

            await rows.nth(i).locator('button').first().click();
            break;
        }
    }

    // await page.pause();

    const orderIdDetails = await page.locator('.col-md-6 .col-text').textContent();
    expect(orderId.includes(orderIdDetails)).toBeTruthy();
})