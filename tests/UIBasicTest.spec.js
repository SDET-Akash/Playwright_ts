import { expect, test } from '@playwright/test';


// fixture in the playwright 
// 1. browser

test('UI basic test', async ({ browser }) => {
    // launch new browser 
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://app-qa.sling-dev.com/signIn');
    await page.screenshot({ path: 'example.png' });
    console.log(await page.title());

    expect(page).toHaveTitle('Kylas');
    expect(page).toHaveURL('https://app-qa.sling-dev.com/signIn');



    // // how to launch browser
    // const context = await browser.newContext();
    // const page = await context.newPage();
    // await page.goto('https://app-qa.sling-dev.com/signIn');
    // await page.screenshot({ path: 'example.png' });
    // await context.close();

})

// 2. page

test('UI basic test - 2', async ({ page }) => {
    await page.goto('https://app-qa.sling-dev.com/signIn');
    await page.screenshot({ path: 'example.png' });
    console.log(await page.title());
    expect(await page.title()).toBe('Kylas');

});


// 3. request
// 4. APIRequestContext
// 5. Locator

test('textContent', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('[name="username"]').fill('akashshetty');
    await page.locator('[name="password"]').fill('password');
    await page.locator('[type="submit"]').click();

    const text = await page.locator('[style*="block"]').textContent()
    console.log(text);
    await expect(page.locator('[style*="block"]')).toContainText('Incorrect');
})

test('alltextcontent', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('[name="username"]').fill('rahulshettyacademy');
    await page.locator('[name="password"]').fill('Learning@830$3mK2');
    await page.locator('[type="submit"]').click();

    // const text = await page.locator('[style*="none"]').textContent()
    // console.log(text);

    // await page.waitForSelector('.card-body a');
    await page.locator('.card-body a').first().textContent();
    // In the playwright alltextcontent will not wait for the element so it return the empty array, so that time we need to add the wait 

    const allText = await page.locator('.card-body a').allTextContents();

    console.log(allText);
    await expect(page.locator('.card-body a'))
        .toHaveText([
            'iphone X',
            'Samsung Note 8',
            'Nokia Edge',
            'Blackberry'
        ]);
})
