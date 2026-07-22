import { test, page } from '@playwright/test';

test('handle child windows', async ({ browser }) => {


    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('[name="username"]').fill('rahulshettyacademy');
    await page.locator('[name="password"]').fill('Learning@830$3mK2');
    await page.locator('[type="submit"]').click();
    const documentlink = page.locator("[href*='documents-request']")
    /* context.waitForEvent('page'); //listen for any new page to open
    // so here it will wait for the promise , it has different stage like pending, fulfilled and rejected, 
    // so it will wait for the promise to be fulfilled and then it will move to the next line of code

    await documentlink.click(); // then new page is opened by clicking the link

    // so for the page to open it will not work after the click event so we need to add the step before in this case we can use the promise.all to serlove the steps
*/

    // if we want to stop the async job then we use the promise.all

    const [newPage] = await Promise.all([
        context.waitForEvent('page'), // listen for any new page pending, reject or fulfilled
        documentlink.click()
    ]) // here the new page is opened
    // promise.all will wait for both the steps to be fulfilled and then it will move to the next line of code
    // if any steps is failed then script will failed


    const text = await newPage.locator('.red').textContent()
    const arraytext = text.split("@");
    const email = arraytext[1].split(" ")[0]
    // console.log(email);
    // textcontent will give the text content of the element and it will return the string value, so we can use the split method to split the string and get the email id from the text content
    await page.locator('[name="username"]').fill(email);
    // await page.pause();
    // console.log(await page.locator('[name="username"]').textContent());
    console.log(await page.locator('[name="username"]').inputValue());

    // difference between textcontent and inputvalue is that 
    // textcontent will give the value of ekement which is present in the dom and it will return the string value, but inputvalue
    // inputValue gives the values from the input box which we have entered

    




})
