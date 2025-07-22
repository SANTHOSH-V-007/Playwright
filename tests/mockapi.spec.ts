import {expect, test} from "@playwright/test";
//based on the parameter get request parameter can id or any
test("get request",async({page})=>{

})

//To handle Internal Server Error
test("should mock get request",async({page})=>{
    await page.route("api/users",(route)=>{
        route.fulfill({
            status:200,
            contentType:'application/json',
            body:JSON.stringify([
                {id:1,name:"santhosh"},
                {id:2,name:"muthu"}
            ]),
        });
    });
    await page.goto("http://127.0.0.1:5500/mockapi.html");
    const userList = await page.locator(".user").allTextContents();
    await expect(userList).toContain("muthu");
});