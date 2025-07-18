import {Browser, BrowserContext, chromium, expect, Locator, Page, test} from "@playwright/test";

test("auth test",async()=>{
    const browser:Browser = await chromium.launch({headless:false,channel:"chrome"});
    const browsercontext1:BrowserContext = await browser.newContext();
    const page:Page = await browsercontext1.newPage();

    //below approach is not good idea for authorization.
    //await page.goto("http://quiz-fe.hematitecorp.com/");

    const userId:string = "santhosh.v@changepond.com";
    const userpass:string = "Santhosh@452";
    const authHeader:string = "Basic "+btoa(userId+":"+userpass);
    page.setExtraHTTPHeaders({Authorization:authHeader});

    await page.goto("http://quiz-fe.hematitecorp.com/");

    // browsercontext1.close();
    // browser.close();

    //await new Promise(()=>{});
})