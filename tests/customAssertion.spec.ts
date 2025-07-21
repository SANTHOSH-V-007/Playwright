import {expect, Locator, test} from '@playwright/test';

test("Custom Assertion",async({page})=>{
    await page.goto("http://127.0.0.1:5500/assertion.html");
    await page.pause();

    //EX:1 Check the number is greater than 10
    const textValue:any = await page.locator("#d1").textContent(); //'10'
    const value= parseInt(textValue || '0');

    await expect(value >10).toBeTruthy();

    //EX-2: Check character is greater than or not
    // const textValue1:any = await page.locator("#d2").textContent(); 

    // expect(textValue1.length).toBeGreaterThan(3);

    const message = await page.locator("#d2");
    await assertionCharLength(message,5);
})

const assertionCharLength=async(locator: any,minLength:number)=>{
    const text = await locator.textContent();
    await expect((text || '').length).toBeGreaterThan(minLength);
}