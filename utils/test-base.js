const base  = require('@playwright/test')

exports.customtest = base.test.extend(
    {
        testDataOrder: {
            username: "akbugtotest@gmail.com",
            password: "Akash@1051",
            productName: "ZARA COAT 3"
        }
    }
)