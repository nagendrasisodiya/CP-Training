import {test} from "@playwright/test";
import sample from "../../Project Object Model(POM)/sample.page";
import * as fs from "node:fs";
import path = require("node:path");

let json_data=fs.readFileSync(path.join(__dirname, '../../test-data/valid_invalid.json'))
// @ts-ignore
let data=JSON.parse(json_data)

test("sample-pom", async ({page})=>{
    let sample_page=new sample(page)

    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await sample_page.usernameTF.fill("student")
    await sample_page.passwordTF.fill("Password123")
    await sample_page.SubmitBtn.click()
})


test("pom-json", async ({page})=>{
    let sample_pom=new sample(page)
    for(let d of data.valid){
        await page.goto(d.url)
        await sample_pom.usernameTF.fill(d.username)
        await sample_pom.passwordTF.fill(d.password)
        await sample_pom.SubmitBtn.click()
        await page.waitForTimeout(2000)
    }
    for(let d of data.invalid){
        await page.goto(d.url)
        await sample_pom.usernameTF.fill(d.username)
        await sample_pom.passwordTF.fill(d.password)
        await sample_pom.SubmitBtn.click()
        await page.waitForTimeout(2000)
    }

})
