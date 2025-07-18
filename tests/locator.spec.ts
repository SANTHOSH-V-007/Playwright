import { Browser, chromium, Locator, Page, Selectors, test } from '@playwright/test';

test("locator test",async()=>{
    const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    const page:Page = await browser.newPage();
    await page.goto("http://127.0.0.1:5500/form.html");

    //use of id selector
    const fname:Locator = await page.locator('#txt1');
    const passsword:Locator = await page.locator('#txt2');
    
    //use of class selector
    const logo:Locator = await page.locator(".logo");
    const logoExits =await logo.isEnabled();
    console.log(logoExits);

    const contact:Locator = await page.locator(".txtContact");
    await contact.fill("9025239872");

    //3. use of text selector
    const heading:Locator = await page.locator("text=Registration Form");
    const headingExit = await heading.isEnabled();
    console.log(headingExit);

    //use of css property and tag name
    const address:Locator= await page.locator("css=input#txtaddress");
    await address.fill("sipcot it park,chennai");
    
    const pincode:Locator = await page.locator("css=input#txtpincode");
    await pincode.fill("625703");

    //Use of xpath
    const email:Locator = await page.locator('xpath=//input[@name="myemail" and @type="email"]');
    await email.fill("santhosh@gmail.com");

    const checkbox:Locator = await page.locator('xpath=//input[@name="term" and @type="checkbox"]');
    const chechboxwork = await checkbox.isEnabled();
    console.log(chechboxwork);

    await fname.fill("Santhosh");
    await passsword.fill("Santhosh@123");
    

})
