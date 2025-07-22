import {expect, test,Page} from '@playwright/test';
import { describe } from 'node:test';

test("Login test",async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/");
});
describe("Test Cases for Sause app", () => {
    test.beforeEach("Login Test", async ({ page }) => {
        await page.goto("https://www.saucedemo.com/v1/");
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.getByRole('button', { name: 'LOGIN' }).click();
        // await page.pause();
 
    })
 
    test("Home Page Test", async ({ page }) => {
        // await page.goto("https://www.saucedemo.com/v1/");
        // await page.locator('[data-test="username"]').fill('standard_user');
        // await page.locator('[data-test="password"]').fill('secret_sauce');
        // await page.getByRole('button', { name: 'LOGIN' }).click();
 
        await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
        await page.locator('div').filter({ hasText: /^\$49\.99ADD TO CART$/ }).getByRole('button').click();
        await page.getByRole('link', { name: 'Test.allTheThings() T-Shirt (' }).click();
        await page.getByRole('button', { name: 'ADD TO CART' }).click();
        // await page.close();
 
    })
 
    test("Logout Test", async ({ page }) => {
        // await page.goto("https://www.saucedemo.com/v1/");
        // await page.locator('[data-test="username"]').fill('standard_user');
        // await page.locator('[data-test="password"]').fill('secret_sauce');
        // await page.getByRole('button', { name: 'LOGIN' }).click();
 
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
 
    })
});