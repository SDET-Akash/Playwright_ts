import { test, expect } from '@playwright/test';
import{customtest} from '../utils/test-base';
const { LoginPage } = require('../Pages/loginpage');
const { dashboardPage } = require('../Pages/dashboardPage');
const { cartPage } = require('../Pages/cartPage');
const { orderReviewPage } = require('../Pages/orderReviewPage');
const { OrderHistoryPage } = require('../Pages/OrderHistoryPage');

const productData = JSON.parse(JSON.stringify(require("../utils/productData.json")));


test("eccomerce end to end test flow", async ({ page }) => {
test.setTimeout(100000);
    const loginPage = new LoginPage(page);
    const dashboard = new dashboardPage(page);
    const cart = new cartPage(page);

    // const Product = page.locator('.card-body');
    const ProductName = 'ZARA COAT 3';
    // 1. login to the application
    await loginPage.goto();
    await loginPage.validLogin("anshika@gmail.com", "Iamking@000");
    await page.waitForLoadState('networkidle');
    await dashboard.searchProduct(ProductName);
    await dashboard.navigateToCart();

    await cart.VerifyProductIsDisplayed(ProductName);
    await cart.Checkout();

    const orderReview = new orderReviewPage(page);
    await orderReview.searchCountryAndSelect("Ind", "India");
    await orderReview.VerifyEmailId("anshika@gmail.com");
    const orderId = await orderReview.SubmitAndGetOrderId();
    console.log(orderId);
    await page.waitForTimeout(2000);
    await dashboard.myorders()
    const orderHistory = new OrderHistoryPage(page);
    await orderHistory.searchOrderAndSelect(orderId);
    const orderIdDetails = await orderHistory.getOrderId();
    expect(orderId.includes(orderIdDetails)).toBeTruthy();
})

customtest("custome fixture test ", async ({ page, testDataOrder }) => {

    const loginPage = new LoginPage(page);
    const dashboard = new dashboardPage(page);
    const cart = new cartPage(page);

    // const Product = page.locator('.card-body');
    const ProductName = 'ZARA COAT 3';
    // 1. login to the application
    await loginPage.goto();
    await loginPage.validLogin(testDataOrder.username, testDataOrder.password);
    await page.waitForLoadState('networkidle');
    await dashboard.searchProduct(testDataOrder.productName);
    await dashboard.navigateToCart();

    await cart.VerifyProductIsDisplayed(testDataOrder.productName);
    await cart.Checkout();

    
})