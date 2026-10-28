import { test } from "@playwright/test";

test("Find Iphone rating", async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    let searchBox = page.getByRole("searchbox");
});
