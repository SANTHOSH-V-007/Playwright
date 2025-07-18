import {  Browser, chromium, Locator, Page, test, expect } from '@playwright/test';

test("testing browser context",async()=>{
    const browser:Browser = await chromium.launch({headless:false,channel:"chrome"});

    //browsercontext
    const browsercontext1 = await browser.newContext();
    const page1:Page = await browsercontext1.newPage();

    //browsercontext-2
    const browsercontext2 = await browser.newContext();
    const page2:Page = await browsercontext2.newPage();
    
    //page credentials
    await page1.goto("http://quiz-fe.hematitecorp.com/");

    const email:Locator = await page1.locator("#email");
    const passsword:Locator = await page1.locator("#password");
    const button:Locator = await page1.locator("[type='submit']");

    
    await email.fill("santhosh.v@changepond.com");
    await passsword.fill("Santhosh@452");
    await button.click();

    //page credentials2
    await page2.goto("http://quiz-fe.hematitecorp.com/");

    const email2:Locator = await page2.locator("#email");
    const passsword2:Locator = await page2.locator("#password");
    const button2:Locator = await page2.locator("[type='submit']");

    
    await email2.fill("muthupandi.s@changepond.com");
    await passsword2.fill("Muthu@4742");
    await button2.click();

    const title = await page1.title();
    console.log("Home Page title",title);
    await page1.screenshot({path :'VoucherCode1.png'});
    await page2.screenshot({path :'VoucherCode2.png'});
 
    expect(title).toEqual("Quiz App");
})


