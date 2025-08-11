import { Locator, test, expect } from "playwright/test";


test('Login page functionality test', async({page})=>{
  await page.goto('http://quiz-fe.hematitecorp.com/');
 
  const usernameField =  page.locator('#email');
  const passwordField =  page.locator('#password');
  const loginButton =  page.locator("button[type='submit']");
 
  await expect(usernameField).toBeVisible();
  await expect(passwordField).toBeVisible();
  await expect(loginButton).toBeVisible();
 
  const result = await loginButton.isDisabled();
  console.log(result);
  await page.pause();
 
//    await usernameField.fill('abinesh.ashokan@changepond.com');
//    await passwordField.fill('Dreamabi@1714');
 
});