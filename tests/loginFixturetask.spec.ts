import { expect } from "playwright/test";
import {test} from "./loginFixture";

test("display product after login",async({loggedInPage,page})=>{
    await expect(loggedInPage.locator('.product_label')).toHaveText("Products");
})