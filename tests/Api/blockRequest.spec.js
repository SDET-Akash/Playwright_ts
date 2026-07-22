import { test, expect } from '@playwright/test';

test('alltextcontent', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    // page.route("**/*.{jpg,png,jpeg}", 
    //     route => route.abort()
    // );



    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('[name="username"]').fill('rahulshettyacademy');
    await page.locator('[name="password"]').fill('Learning@830$3mK2');
    await page.locator('[type="submit"]').click();

    // so this line will listen to the request call event to occur.
    page.on("request",request => console.log(request.url()));
    page.on("response",response => console.log(response.url(), response.status()));


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


        await page.pause();
})
