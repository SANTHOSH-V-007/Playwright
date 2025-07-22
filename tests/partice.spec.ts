import {test} from '@playwright/test';
 
test('Hematite quiz app', async({page})=>{
    await page.goto("http://quiz-fe.hematitecorp.com/");
    await page.getByRole('textbox', { name: 'Email Address' }).click();
   await page.getByRole('textbox', { name: 'Email Address' }).fill('santhosh.v@changepond.com');
   await page.getByRole('textbox', { name: 'Password' }).click();
   await page.getByRole('textbox', { name: 'Password' }).fill('Santhosh@123');
   await page.getByRole('button').filter({ hasText: /^$/ }).click();
   await page.getByRole('button', { name: 'Sign In' }).click();


  await page.getByRole('textbox', { name: 'Enter Voucher code' }).click();
  await page.getByRole('textbox', { name: 'Enter Voucher code' }).fill('abcdh');
  await page.getByRole('button', { name: 'submit' }).click();
    await page.pause();
});