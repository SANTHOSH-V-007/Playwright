import { test } from '@playwright/test';
import { users } from './Logincredentials1';
import { LoginPage1 } from './Loginpage1';


for (let user of users) {

    test(`${user.testCase}`, async ({ page }) => {

        const loginpageObj = new LoginPage1(page);
        await loginpageObj.goto();
        await loginpageObj.login(user.username, user.password, user.Firstname, user.LastName, user.PostName);
        //await page.pause();
       
    });
}                                                                          
