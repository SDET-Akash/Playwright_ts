import { test, expect, request } from '@playwright/test';
const { ApiUtils } = require('../../utils/ApiUtils');

const loginPayLoad = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" };
const orderPayLoad = { orders: [{ country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68" }] };
const fakeResponce = { data: [], message: "No Orders" };
let responce;

test.beforeAll(async () => {

    // This is the login api before all the test are run, instead of login into the application we have added the api 
    // LOGIN API
    const apicontext = await request.newContext();
    const Apiutils = new ApiUtils(apicontext, loginPayLoad);
    responce = await Apiutils.createOrder(orderPayLoad);
})

test("eccomerce end to end test flow", async ({ page }) => {
    // here we stor the token inside the local storage so we can login and get  pass this tokne for the order page
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, responce.token);

    // this will wait for the all network call to be completed
    await page.goto('https://rahulshettyacademy.com/client/');

    // we can inject the new responce 
    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/620c7bf148767f1f1215d2ca',
        async route => {
            // interception responce - we can modify the responce as per our need
            // api responce > |{Fake responce - here playwright plays role}| browser > render data in the UI
            // page.request - turn into the ui to api call
            const responce = await page.request.fetch(route.request());
            let body = JSON.stringify(fakeResponce);
            route.fulfill({
                responce,
                body,
            })
        }
    );

    await page.locator('button[routerlink*="myorders"]').waitFor();
    await page.locator('button[routerlink*="myorders"]').click();
    await page.pause();

    console.log(await page.locator('.mt-4').textContent());

    // const rows = page.locator('tbody tr');
    // const counts = await rows.count();

    // for (let i = 0; i < counts; ++i) {
    //     const roworderid = await rows.nth(i).locator('th').textContent();
    //     if (responce.orderId.includes(roworderid)) {
    //         await rows.nth(i).locator('button').first().click();
    //         break;
    //     }
    // }
    // // await page.pause();

    // // const orderIdDetails = await page.locator('.col-md-6 .col-text').textContent();
    // // // await page.pause();
    // // expect(responce.orderId.includes(orderIdDetails)).toBeTruthy();
})

