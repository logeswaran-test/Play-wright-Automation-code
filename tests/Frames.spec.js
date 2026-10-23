import { test, expect } from "@playwright/test";

test("NestedFrames", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/nested-iframes");
    
    const frame1 = page.frameLocator('//iframe[@name="pact1"]');
    
    const frame2 = frame1.frameLocator('//iframe[@name="pact2"]');
    const frame3 = frame2.frameLocator('//iframe[@name="pact3"]');
    
    await frame1.locator('//input[@name="inp_val"]').fill("testing");
    await frame2.locator('//input[@placeholder="e.g. Selenium"]').fill("Cucumber");
    await frame3.locator('//input[@placeholder="e.g. Playwright"]').fill("playwright");

    //await page.waitForTimeout(3000);
});


test("Nested Frames Hyrtutorilas", async ({ page }) => {

    await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");
    const frametwo = page.frameLocator("#frm2");
    await frametwo.getByPlaceholder("Enter First Name").fill("Logeswaran");
    await frametwo.getByPlaceholder("Enter Last Name").fill("Logan");
    await frametwo.locator('//input[@id="femalerb"]').check();
    await frametwo.locator('//input[@id="englishchbx"]').check();
    await frametwo.getByPlaceholder("Enter Email").fill("logeswaranjayavelmalar@gmail.com");
    await frametwo.getByPlaceholder("Enter Password").fill("123456789");
    //await page.waitForTimeout(1000);

    const framethree = page.frameLocator("#frm3");
    const frame3firstframe = framethree.frameLocator("#frm2");
    await frame3firstframe.getByPlaceholder("Enter First Name").fill("Loges");
    await frame3firstframe.getByPlaceholder("Enter Last Name").fill("Lovely");
    await frame3firstframe.locator('//input[@id="femalerb"]').check();
    await frame3firstframe.locator('//input[@id="englishchbx"]').check();
    await frame3firstframe.getByPlaceholder("Enter Email").fill("lovelylogan401@gmail.com");
    await frame3firstframe.getByPlaceholder("Enter Password").fill("123456789");
    //await page.waitForTimeout(3000);
})