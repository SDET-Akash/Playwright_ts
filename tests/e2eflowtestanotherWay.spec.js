import { test, expect } from '@playwright/test';


test("eccomerce end to end test flow", async ({ page }) => {

    const Product = page.locator('.card-body');
    const ProductName = 'ZARA COAT 3';
    // 1. login to the application
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.getByPlaceholder('email@example.com').fill('anshika@gmail.com');
    await page.getByPlaceholder('enter your passsword').fill('Iamking@000');
    await page.getByRole('button', { name: 'Login' }).click();

    // this will wait for the all network call to be completed
    await page.waitForLoadState('networkidle');
    await page.locator('.card-body b').first().waitFor();
    const allText = await page.locator('.card-body b').allTextContents();

    console.log(allText);
    // go to the dashboard
    // then search for ZARA COAT 4

    await page.locator('.card-body').filter({ hasText: 'ZARA COAT 3' })
        .getByRole('button', { name: 'Add To Cart' }).click();


    // await page.pause();

    await page.getByRole("listitem").getByRole("button", { name: 'Cart' }).click();
    await page.locator("div li").first().waitFor();

    await page.getByText('ZARA COAT 3').waitFor();
    const bool = await page.getByText('ZARA COAT 3').isVisible();
    expect(bool).toBeTruthy();

    // await page.pause();

    // presssequencially - this will add one by one character in the inpt box or the dropdown
    await page.getByRole("button", { name: "Checkout" }).click();

    await page.getByPlaceholder("Select Country").pressSequentially("ind");

    // wait for the dropdown to be visible
    await page.getByRole("button", { name: 'India' }).nth(1).click();

    expect(page.locator(".user__name [type='text']").first()).toHaveText('anshika@gmail.com');

    await page.getByText('PLACE ORDER').click();
    await expect(page.getByText(" Thankyou for the order. ")).toHaveText(" Thankyou for the order. ");

    // const orderId = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
    // console.log(orderId);

3
    // const rows = await page.locator('tbody tr');

    // const counts = await rows.count();

    // for (let i = 0; i < counts; ++i) {
    //     const roworderid = await rows.nth(i).locator('th').textContent();

    //     if (orderId.includes(roworderid)) {

    //         await rows.nth(i).locator('button').first().click();
    //         break;
    //     }
    // }

    // // await page.pause();

    // const orderIdDetails = await page.locator('.col-md-6 .col-text').textContent();
    // expect(orderId.includes(orderIdDetails)).toBeTruthy();
})