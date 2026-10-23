import {test} from '@playwright/test'

test('Introduction', async({page})=>{
    // await page.goto("https://www.flipkart.com/")
    //await page.waitForTimeout(5000);
    //await page.goto("https://www.amazon.in/")
    await page.goto("https://www.myntra.com/boy-tshirts")
    //await page.goto("https://www.facebook.com/")
    //await page.waitForTimeout(3000);
    // await page.goto("https://www.irctc.co.in/nget/train-search")
    // await page.waitForTimeout(5000);
    // await page.goBack();
    // await page.goForward();
    // await page.waitForTimeout(2000);
    // await page.reload();
    
    //url
    // const url = await page.url();
    // console.log(url);
    // const title = await page.title();
    // console.log(title);

    //screenshot
    // await page.screenshot({path:'screenshot.png', fullPage:true})
    await page.waitForTimeout(10000);
    let products = await page.locator('//ul [@class= "results-base"]/child::li [@class= "product-base"]');
    let total = await products.count();
    console.log("Total products:", total);


})