import { test, expect } from '@playwright/test';

test("Check adddition of two number",async({page})=>{
  await page.goto("file:///C:/Users/santhosh.v/Desktop/Training/JAVASCRIPT/cal.html");
  await page.fill('#txt1','5');
  await page.fill('#txt2','4');
  await page.click('#btnadd');

  const result = await page.textContent('#res');
  await expect(result?.trim()).toBe('9');
});

test("Check subtraction of two number",async({page})=>{
  await page.goto("file:///C:/Users/santhosh.v/Desktop/Training/JAVASCRIPT/cal.html");
  await page.fill('#txt1','5');
  await page.fill('#txt2','4');
  await page.click('#btnadd1');

  const result = await page.textContent('#res');
  await expect(result?.trim()).toBe('1');
});

test("Check multiplication of two number",async({page})=>{
  await page.goto("file:///C:/Users/santhosh.v/Desktop/Training/JAVASCRIPT/cal.html");
  await page.fill('#txt1','5');
  await page.fill('#txt2','4');
  await page.click('#btnadd2');

  const result = await page.textContent('#res');
  await expect(result?.trim()).toBe('20');
});

test("Check division of two number",async({page})=>{
  await page.goto("file:///C:/Users/santhosh.v/Desktop/Training/JAVASCRIPT/cal.html");
  await page.fill('#txt1','20');
  await page.fill('#txt2','5');
  await page.click('#btnadd3');

  const result = await page.textContent('#res');
  await expect(result?.trim()).toBe('4');
});

// test("check title", async( {page} )=>{
//   await page.goto("https://leetcode.com/");

//   await expect(page).toHaveTitle("LeetCode - The World's Leading Online Programming Learning Platform");
// });
// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
