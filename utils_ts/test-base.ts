// const base = require('@playwright/test')
import { test as baseTest } from '@playwright/test';

interface  TestDataOrder {
    username: string;
    password: string;
    productName: string;
}

export const customtest = baseTest.extend<{ testDataOrder: TestDataOrder }>(
    {
        testDataOrder: {
            username: "akbugtotest@gmail.com",
            password: "Akash@1051",
            productName: "ZARA COAT 3"
        }
    }
)