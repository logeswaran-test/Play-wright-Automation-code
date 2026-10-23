import {test} from '@playwright/test'

// test('Mynthra', async({page})=>{

//     await page.goto("https://www.myntra.com/boy-tshirts")
//     await page.waitForTimeout(10000);
//     let products = page.locator('//ul[@class="results-base"]/child::li[@class="product-base"]');

//     let total_product = await products.count();
//     console.log("Total products:", total_product);

//     let price = page.locator('//ul[@class="results-base"]//descendant::span[@class="product-discountedPrice"]');

//     let total_price_on_discount = await price.count();
//     console.log("Total discount prices:", total_price_on_discount); 

//     let priceList = await price.allInnerTexts();
//     console.log("List of discounted prices:", priceList);

//     // Convert price text into numbers
//     let numericPrices = priceList.map(p =>
//         Number(p.replace(/[^\d]/g, ""))
//     );

//     // Find minimum price without a loop
//     let minPrice = Math.min(...numericPrices);

//     console.log("Minimum discounted price: Rs.", minPrice);

// })



// async function productcount(page) {
//     let products = page.locator('//ul[@class="results-base"]/child::li[@class="product-base"]');

//     let total_product = await products.count();
//     console.log("Total products:", total_product);
// }

// async function getLeastPrice(prices) {
//     const numbers = prices.map(p =>
//         Number(p.match(/[\d,]+/)[0].replace(/,/g, ''))
//     );

//     return Math.min(...numbers);
// }

// async function printProductName(page, prices, leastPrice) {
//     const names = await page.locator('//li[contains(@class,"product-base")]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice" or not(@class) and text()]/ancestor::div[@class="product-productMetaInfo"]/child::h4[@class="product-product"]').allTextContents();
//     //const names = await page.locator(`//li[@class="product-base"]/descendant::span[@class="product-discountedPrice" and normalize-space()="Rs. ${leastPrice}"]/ancestor::div[@class="product-price"]/preceding-sibling::h4[@class="product-product"]`).first().allTextContents();
//     const index = prices.findIndex(p =>
//         Number(p.match(/[\d,]+/)[0].replace(/,/g, '')) === leastPrice
//     );
//     console.log('Least Price:', leastPrice);
//     console.log('Product Name:', names[index]);
// }

// test('Find least price T-shirt', async ({ page }) => {
//     await page.goto('https://www.myntra.com/boy-tshirts');
//     const prices = await page.locator('//li[contains(@class,"product-base")]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice" or not(@class) and text()]').allTextContents();
    
//     await productcount(page);

//     const leastPrice = await getLeastPrice(prices);

//     await printProductName(page, prices, leastPrice);
// });

test('Find least price T-shirt', async ({ page }) => {

    // Function 1: Count total products
    async function productcount(page) {
        let products = page.locator(
            '//ul[@class="results-base"]/child::li[@class="product-base"]'
        );

        let total_product = await products.count();
        console.log("Total products:", total_product);
    }

    // Function 2: Find the least price
    async function getLeastPrice(prices) {
        const numbers = prices.map(p =>
            Number(p.match(/[\d,]+/)[0].replace(/,/g, ''))
        );

        return Math.min(...numbers);
    }

    // Function 3: Find the product name
    async function printProductName(page, prices, leastPrice) {
        const names = await page.locator(
            '//li[contains(@class,"product-base")]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice" or not(@class) and text()]/ancestor::div[@class="product-productMetaInfo"]/child::h4[@class="product-product"]'
        ).allTextContents();

        const index = prices.findIndex(p =>
            Number(p.match(/[\d,]+/)[0].replace(/,/g, '')) === leastPrice
        );

        console.log('Least Price:', leastPrice);
        console.log('Product Name:', names[index]);
    }

    // Open the Myntra page
    await page.goto('https://www.myntra.com/boy-tshirts');

    // Get all prices
    const prices = await page.locator(
        '//li[contains(@class,"product-base")]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice" or not(@class) and text()]'
    ).allTextContents();

    // Call the functions
    await productcount(page);

    const leastPrice = await getLeastPrice(prices);

    await printProductName(page, prices, leastPrice);
});