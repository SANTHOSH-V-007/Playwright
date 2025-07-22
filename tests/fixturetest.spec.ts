import {test} from "./fixture"

test("hello word fixture test",({helloWorld})=>{
    console.log(helloWorld);
    console.log("i had a lanch");
})
test("Santhosh test",({helloWorld})=>{
    console.log(helloWorld);
    console.log("I am employee of changepond");
})
test('Login page',({login})=>{
    console.log(login);
   
})