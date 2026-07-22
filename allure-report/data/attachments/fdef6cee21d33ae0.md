# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Api/WebapiPart1.spec.js >> eccomerce end to end test flow
- Location: tests/Api/WebapiPart1.spec.js:18:5

# Error details

```
Test timeout of 100000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 100000ms exceeded.
Call log:
  - waiting for locator('.col-md-6 .col-text')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - heading "Your Orders" [level=1] [ref=e26]
    - table [ref=e27]:
      - rowgroup [ref=e28]:
        - row "Order Id Product Image Name Price Ordered Date View Delete" [ref=e29]:
          - columnheader "Order Id" [ref=e30]
          - columnheader "Product Image" [ref=e31]
          - columnheader "Name" [ref=e32]
          - columnheader "Price" [ref=e33]
          - columnheader "Ordered Date" [ref=e34]
          - columnheader "View" [ref=e35]
          - columnheader "Delete" [ref=e36]
      - rowgroup [ref=e37]:
        - row "6a59d44085b8849b49f1d257 ZARA COAT 3 $ 11500 Fri Jul 17 View Delete" [ref=e38]:
          - rowheader "6a59d44085b8849b49f1d257" [ref=e39]
          - cell [ref=e40]:
            - img [ref=e41]
          - cell "ZARA COAT 3" [ref=e42]
          - cell "$ 11500" [ref=e43]
          - cell "Fri Jul 17" [ref=e44]
          - cell "View" [ref=e45]:
            - button "View" [ref=e46] [cursor=pointer]
          - cell "Delete" [ref=e47]:
            - button "Delete" [ref=e48] [cursor=pointer]
        - row "6a59d44085b8849b49f1d24f ZARA COAT 3 $ 11500 Fri Jul 17 View Delete" [ref=e49]:
          - rowheader "6a59d44085b8849b49f1d24f" [ref=e50]
          - cell [ref=e51]:
            - img [ref=e52]
          - cell "ZARA COAT 3" [ref=e53]
          - cell "$ 11500" [ref=e54]
          - cell "Fri Jul 17" [ref=e55]
          - cell "View" [ref=e56]:
            - button "View" [ref=e57] [cursor=pointer]
          - cell "Delete" [ref=e58]:
            - button "Delete" [ref=e59] [cursor=pointer]
        - row "6a59d41f85b8849b49f1d191 iphone 13 pro $ 55000 Fri Jul 17 View Delete" [ref=e60]:
          - rowheader "6a59d41f85b8849b49f1d191" [ref=e61]
          - cell [ref=e62]:
            - img [ref=e63]
          - cell "iphone 13 pro" [ref=e64]
          - cell "$ 55000" [ref=e65]
          - cell "Fri Jul 17" [ref=e66]
          - cell "View" [ref=e67]:
            - button "View" [ref=e68] [cursor=pointer]
          - cell "Delete" [ref=e69]:
            - button "Delete" [ref=e70] [cursor=pointer]
        - row "6a59d3ef85b8849b49f1d0bc iphone 13 pro $ 55000 Fri Jul 17 View Delete" [ref=e71]:
          - rowheader "6a59d3ef85b8849b49f1d0bc" [ref=e72]
          - cell [ref=e73]:
            - img [ref=e74]
          - cell "iphone 13 pro" [ref=e75]
          - cell "$ 55000" [ref=e76]
          - cell "Fri Jul 17" [ref=e77]
          - cell "View" [ref=e78]:
            - button "View" [ref=e79] [cursor=pointer]
          - cell "Delete" [ref=e80]:
            - button "Delete" [ref=e81] [cursor=pointer]
        - row "6a59d3c385b8849b49f1d016 iphone 13 pro $ 55000 Fri Jul 17 View Delete" [ref=e82]:
          - rowheader "6a59d3c385b8849b49f1d016" [ref=e83]
          - cell [ref=e84]:
            - img [ref=e85]
          - cell "iphone 13 pro" [ref=e86]
          - cell "$ 55000" [ref=e87]
          - cell "Fri Jul 17" [ref=e88]
          - cell "View" [ref=e89]:
            - button "View" [ref=e90] [cursor=pointer]
          - cell "Delete" [ref=e91]:
            - button "Delete" [ref=e92] [cursor=pointer]
        - row "6a59d2a585b8849b49f1caee ZARA COAT 3 $ 11500 Fri Jul 17 View Delete" [ref=e93]:
          - rowheader "6a59d2a585b8849b49f1caee" [ref=e94]
          - cell [ref=e95]:
            - img [ref=e96]
          - cell "ZARA COAT 3" [ref=e97]
          - cell "$ 11500" [ref=e98]
          - cell "Fri Jul 17" [ref=e99]
          - cell "View" [ref=e100]:
            - button "View" [ref=e101] [cursor=pointer]
          - cell "Delete" [ref=e102]:
            - button "Delete" [ref=e103] [cursor=pointer]
        - row "6a59d2a385b8849b49f1cad8 ZARA COAT 3 $ 11500 Fri Jul 17 View Delete" [ref=e104]:
          - rowheader "6a59d2a385b8849b49f1cad8" [ref=e105]
          - cell [ref=e106]:
            - img [ref=e107]
          - cell "ZARA COAT 3" [ref=e108]
          - cell "$ 11500" [ref=e109]
          - cell "Fri Jul 17" [ref=e110]
          - cell "View" [ref=e111]:
            - button "View" [ref=e112] [cursor=pointer]
          - cell "Delete" [ref=e113]:
            - button "Delete" [ref=e114] [cursor=pointer]
    - generic [ref=e115]: "* If orders Will be more than 7 your last order will get deleted"
  - generic [ref=e117]:
    - button "Go Back to Shop" [ref=e118] [cursor=pointer]
    - button "Go Back to Cart" [ref=e119] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect, request } from '@playwright/test';
  2  | const {ApiUtils} = require('../../utils/ApiUtils');
  3  | 
  4  | const loginPayLoad = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" };
  5  | const orderPayLoad = { orders: [{ country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68" }] };
  6  | 
  7  | let responce;
  8  | 
  9  | test.beforeAll(async () => {
  10 | 
  11 |     // This is the login api before all the test are run, instead of login into the application we have added the api 
  12 |     // LOGIN API
  13 |     const apicontext = await request.newContext();
  14 |     const Apiutils = new ApiUtils(apicontext,loginPayLoad);
  15 |     responce=  await Apiutils.createOrder(orderPayLoad);
  16 | })
  17 | 
  18 | test("eccomerce end to end test flow", async ({ page }) => {
  19 | // here we stor the token inside the local storage so we can login and get  pass this tokne for the order page
  20 |     await page.addInitScript(value => {
  21 |         window.localStorage.setItem('token', value);
  22 |     }, responce.token);
  23 |     
  24 |     // this will wait for the all network call to be completed
  25 |     await page.goto('https://rahulshettyacademy.com/client/'); 
  26 |     await page.locator('button[routerlink*="myorders"]').waitFor();    
  27 |     await page.locator('button[routerlink*="myorders"]').click();
  28 |     const rows = page.locator('tbody tr');
  29 |     const counts = await rows.count();
  30 | 
  31 |     for (let i = 0; i < counts; ++i) {
  32 |         const roworderid = await rows.nth(i).locator('th').textContent();
  33 |         if (responce.orderId.includes(roworderid)) {
  34 |             await rows.nth(i).locator('button').first().click();
  35 |             break;
  36 |         }
  37 |     }
  38 |     // await page.pause();
  39 | 
> 40 |     const orderIdDetails = await page.locator('.col-md-6 .col-text').textContent();
     |                                                                      ^ Error: locator.textContent: Test timeout of 100000ms exceeded.
  41 |     // await page.pause();
  42 |     expect(responce.orderId.includes(orderIdDetails)).toBeTruthy();
  43 | })
  44 | 
  45 | 
```