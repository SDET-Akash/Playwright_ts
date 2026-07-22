class ApiUtils {

    constructor(apicontext, loginPayLoad) {
        this.apicontext = apicontext;
        this.loginPayLoad = loginPayLoad;
    }

    async getToken() {
        const loginresponce = await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: this.loginPayLoad
            });
        // expect(loginresponce.ok(200)).toBeTruthy();
        const loginresponcejson = await loginresponce.json();
        const token = loginresponcejson.token;
        console.log(token);
        return token;

    }

    async createOrder(orderPayLoad) {

        let responce = {};
        responce.token = await this.getToken();

        const orderresponce = await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: orderPayLoad,
                headers: {
                    'Authorization': responce.token,
                    'Content-Type': 'application/json'
                }
            });

        // expect(orderresponce.ok(201)).toBeTruthy();
        const orderresponcejson = await orderresponce.json();
        console.log(orderresponcejson);
        const orderId = orderresponcejson.orders[0];
        responce.orderId = orderId;

        return responce;


    }


}

module.exports = { ApiUtils }; ;