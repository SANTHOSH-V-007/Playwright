import { test } from '@playwright/test'
import { LoginPage } from './Loginpage';
import{users} from "./logincredentials";


for(let user of users){

    test(`${user.testCase}` ,async({page}) => {
        
        const loginpageObj = new LoginPage(page);
        await loginpageObj.goto();
        await loginpageObj.login(user.username, user.password); 
    
});
}                                                                          


           
   
  
  
  
   
      
   
   
   
   
      
 
    
     
     
    