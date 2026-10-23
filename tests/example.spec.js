// @ts-check
import { test, expect } from '@playwright/test';

test('Amazon', async ({ page }) => {
  await page.goto("https://www.amazon.in/");

let iphone17 = page.getByRole("searchbox");

await iphone17.click();
await iphone17.fill("iphone17 pro");
await iphone17.press("Enter");

await page.waitForLoadState("domcontentloaded");

let products = page.locator('//div[@role="listitem"]')
    .filter({ hasText: "iPhone 17 Pro" });

await products.first().waitFor();

let totalProducts = await products.count();
console.log("Total iPhone 17 Pro products:", totalProducts);

let highestRating = -1;
let highestRatedProduct = null;

for (let i = 0; i < totalProducts; i++) {

    let product = products.nth(i);

    // Combined XPath to locate the rating relative to the product title
    let ratingElement = product.locator(
        'xpath=.//div[@data-cy="title-recipe"]//a[@target="_blank"]/ancestor::div[@data-cy="title-recipe"]/following-sibling::div[@data-cy="reviews-block"]//span[contains(@aria-hidden,"true")]'
    );

    let productName = product.locator(
        'xpath=.//div[@data-cy="title-recipe"]//a[@target="_blank"]'
    );

    if (await ratingElement.count() > 0) {

        let ratingText = await ratingElement.first().innerText();
        let ratingMatch = ratingText.match(/\d+(?:\.\d+)?/);

        if (ratingMatch) {
            let rating = Number(ratingMatch[0]);

            if (rating <= 5 && rating > highestRating) {
                highestRating = rating;
                highestRatedProduct = productName.first();
            }

            console.log("Product:", await productName.first().innerText());
            console.log("Rating:", rating);
        }
    }
}

if (highestRatedProduct) {
    console.log("Highest rating:", highestRating);
    await highestRatedProduct.click();
} else {
    console.log("No valid product ratings found.");
}
});
