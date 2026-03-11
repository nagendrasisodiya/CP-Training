import {test} from "@playwright/test";


test("looping", async({page})=>{
    //for... in loop
    //Iterates over the keys (property names) of an object.
    const testdata:{[key:string]:string}={
        username: "nagendra",
        password: "securePass123",
        role: "admin"
    }
    for(const key in testdata){
        let value=testdata[key]
        console.log(`key: ${key}, value:${value}`)
    }

    //for...of loop
    //Iterates over values directly.
    let testdata2=['a', 'b', 'c']
    for(const d of testdata2){
        console.log(d)
    }
})