import {test as base} from "@playwright/test";

type myFixtures ={
    helloWorld:string,
    greatDay:string,
    login:string
}

export const test = base.extend<myFixtures>({
    helloWorld:async({},use:any)=>{
        console.log("hello world");
        await use();
    },
    greatDay:async({},use:any)=>{
        const myday ="have a good day";
        await use(myday);
    },

    login: async ({browser }, use: any) => {
        const context=await browser.newContext();
        const page= await context.newPage();
        await page.goto('http://quiz.hematitecorp.com/#/')
        await page.fill("#email","santhosh.v@changepond.com")
        await page.fill("#password","Santhosh@123")
        await page.click('button[type=submit]')
        // console.log("login sucessfull");
        await use("login sucess")
        await context.close()
           
             
          },
      
       
})