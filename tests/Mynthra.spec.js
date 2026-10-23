// import {test} from '@playwright/test'

//     test('Mynthra', async({page})=>{

//         await page.goto("https://www.myntra.com/boy-tshirts")
//         await page.waitForTimeout(5000);
//         let products = page.locator('//div[@class="product-price"]//descendant::span[@class="product-discountedPrice"]');

//         let total_product = await products.count();
//         console.log("Total products:", total_product);

//         let price = page.locator('//div[@class="product-price"]//descendant::span[@class="product-discountedPrice"]'); //-- 49 product 
//         //let price = page.locator('//li[contains(@class,"product-base")]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice" or not(@class) and text()]').allTextContents();
//         let total_price_on_discount = await price.count();
//         console.log("Total discount prices:", total_price_on_discount);

//         // Get the list of all discounted prices
//         let priceList = await price.allInnerTexts();

//         console.log("List of all discounted prices:");

//         for (let i = 0; i < priceList.length; i++) {
//         console.log(`Price ${i + 1}: ${priceList[i]}`);
//         }
//         let numericPrices = priceList.map(p =>
//         Number(p.replace(/[^\d]/g, ""))
//         );

//         let minimumPrice = numericPrices[0];

//         for (let i = 1; i < numericPrices.length; i++) {
//             if (numericPrices[i] < minimumPrice) {
//                 minimumPrice = numericPrices[i];
//             }
//         }

//         console.log("Minimum discounted price: Rs-",minimumPrice);

//         // let minimumPriceElement = page.locator(`//span[@class="product-discountedPrice" and normalize-space()="Rs. ${minimumPrice}"]`);

//         // let productName = await minimumPriceElement.locator('xpath=ancestor::li[@class="product-base"]//h4[@class="product-product"]').innerText();

//         // console.log("minimum price Product name:", productName);

//         // single path
//         let minimumPriceElementname= await page.locator(`//li[@class="product-base"]/descendant::span[@class="product-discountedPrice" and normalize-space()="Rs. ${minimumPrice}"]/ancestor::div[@class="product-price"]/preceding-sibling::h4[@class="product-product"]`).innerText();
//         //span[@class="product-discountedPrice" and normalize-space()="Rs. 599"]/ancestor::li[@class="product-base"]//h4[@class="product-product"]
//         await page.waitForTimeout(5000);
//         console.log("minimum price Product name:", minimumPriceElementname);

//     })


import { test, expect } from "@playwright/test";

test("find the lowest-priced boys' T-shirt", async ({ page }) => {
  await page.goto("https://www.myntra.com/boy-tshirts");

  function settingPrice(text) {
    const match = text?.match(/[\d,]+/);
    return match ? Number(match[0].replace(/,/g, "")) : null;
  }
  async function getMinimumPrice() {
    const products = page.locator("//li[@class='product-base']");
    console.log("Total products found:", await products.count());
    const pricesText = await products
      .locator("//div[@class='product-price']/descendant::span[@class='product-discountedPrice' or (not(@class) and text())]").allTextContents();
    const prices = pricesText.map(settingPrice);
    const minimumPrice = prices.reduce(
      (lowest, price) => Math.min(lowest, price)
    );
    const text1=100;
    console.log("Lowest price found:", minimumPrice);
    const productDetails = await getProductDetails(minimumPrice, text1);
    console.log("Brand:", productDetails.brand);
    console.log("Product title:", productDetails.title);
    
  }

  async function getProductDetails(minPrice) {
    const product = page.locator("//li[@class='product-base']/descendant::div[@class='product-price']/descendant::span[@class='product-discountedPrice' or (not(@class) and text()) and normalize-space(string(.))='Rs. ${minPrice}']/ancestor::div[@class='product-productMetaInfo']").first();
    const [productBrand, productTitle] = await Promise.all([product.locator("//h3[@class='product-brand']").textContent(),
      product.locator("//h4[@class='product-product']").textContent()]);
    return {
      brand: productBrand,
      title: productTitle
    };
  }
  await getMinimumPrice();
});