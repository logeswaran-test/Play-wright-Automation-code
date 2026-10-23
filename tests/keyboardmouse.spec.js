import { test, expect } from "@playwright/test";

test("Keyboard actions", async ({ page }) => {
// await page.goto("https://www.amazon.in/");
// await page.getByPlaceholder('Search Amazon').fill('Iphone')//instantly
// await page.getByPlaceholder('Search Amazon').fill('17 pro')// replace the existing 
// await page.getByPlaceholder('Search Amazon').pressSequentially('Iphone',{delay:1000})//charecter by charecter,presequentially-delay can be used in suggetions
// await page.getByPlaceholder('Search Amazon').pressSequentially('17 pro',{delay:1000})//add from existing 
// //work on seggetions

// await page.getByPlaceholder('Search Amazon').press('control+a');
// await page.getByPlaceholder('Search Amazon').press('control+x');
// await page.getByPlaceholder('Search Amazon').press('control+v');
// await page.keyboard.press('enter');

await page.goto("https://demoqa.com/buttons");

await page.getByRole("button", { name: "Click Me", exact: true }).click();

await page.getByRole("button", { name: "Right Click Me", exact: true }).click({ button: "right" });

await page.getByRole("button", { name: "Double Click Me", exact: true }).dblclick();

});