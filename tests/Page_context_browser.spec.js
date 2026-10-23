import {test} from '@playwright/test'
test('page_context_browser', async({browser})=>
{
    const browser1 = await browser.newContext();
    const page1 = await browser1.newPage();
    await page1.goto("https://www.amazon.in/");
    const page2 = await browser1.newPage();
    await page2.goto("https://www.myntra.com/boy-tshirts");
    const page3 = await browser1.newPage();
    await page3.goto("https://www.facebook.com/");
    //await page3.waitForTimeout(2000);

    await page1.bringToFront();
    //await page1.waitForTimeout(2000);
    await page3.bringToFront();

    const browser2 = await browser.newContext();//with new browser tab
    const page4 = await browser2.newPage();
    await page4.goto("https://demoqa.com/")
    //await page4.waitForTimeout(2000);

    const browser3 = await browser.newContext(// video recording on 3rd browser
        {recordVideo : {dir : 'video'}}
    );
    const page5 = await browser3.newPage();
    await page5.goto("https://mail.google.com/")
    await page5.waitForTimeout(2000);

})