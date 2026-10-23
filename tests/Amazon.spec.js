
import { test } from "@playwright/test";

test("Find Iphone rating", async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    let searchBox = page.getByRole("searchbox");
    await searchBox.fill("iphone 17 pro");
    await searchBox.press("Enter");
    await page.waitForLoadState("domcontentloaded");
    let ratingElements = page.locator('//span[contains(text(),"iPhone 17 Pro ")]/ancestor::div[@data-cy="title-recipe"]/following-sibling::div[@data-cy="reviews-block"]/child::div/span[contains(@class,"a-size-small")]');
    let ratingTexts = await ratingElements.allInnerTexts();
    let ratings = ratingTexts
        .map(text => text.match(/\d+(?:\.\d+)?/))
        .filter(match => match !== null)
        .map(match => Number(match[0]))
        .filter(rating => rating >= 0 && rating <= 5);
        
    console.log("All ratings:", ratings);

    if (ratings.length > 0) {

        let highestRating = Math.max(...ratings);

        console.log("Maximum rating:", highestRating);

        page.locator(
        `//span[contains(text(),"iPhone 17 Pro ")]/ancestor::div[@data-cy="title-recipe"]/following-sibling::
        div[@data-cy="reviews-block"]/child::div/span[contains(@class,"a-size-small")][normalize-space(.)="${highestRating}"]
        /ancestor::div[@role="listitem"]/descendant::input[@class="a-button-input"]`
        ).first().click();
        
        await page.waitForTimeout(3000);
        console.log("Clicked the highest-rated product add to cart button.");


    } else {

        console.log("No valid ratings found.");
    }
});
