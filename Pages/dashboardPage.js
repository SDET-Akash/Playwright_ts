class dashboardPage {

    constructor(page) {
        this.page = page;
        this.product = page.locator(".card-body");
        this.productText = page.locator(".card-body b");
        this.cartButton = page.locator("[routerlink*='cart']");
        this.order = page.locator("a:has-text('Place Order')");
        this.orders = page.locator("button[routerlink*='myorders']");


    }


    async searchProduct(ProductName) {
        const allText = await this.productText.allTextContents();
        console.log(allText);
        // go to the dashboard
        // then search for ZARA COAT 4
        const count = await this.product.count();
        for (let i = 0; i < count; i++) {
            if (await this.product.nth(i).locator('b').textContent() === ProductName) {               // add to cart

                await this.product.nth(i).locator('text= Add To Cart').click();
                break;
            }
        }
    }


    async navigateToOrders() {
        await this.order.click();
    }

    async myorders() {
        await this.orders.click()

    }


    async navigateToCart() {
        await this.cartButton.click();
    }




}

module.exports = { dashboardPage };