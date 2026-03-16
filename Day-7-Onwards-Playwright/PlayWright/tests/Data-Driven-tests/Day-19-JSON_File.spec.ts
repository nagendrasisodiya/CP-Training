import { test} from '@playwright/test'
import * as fs from "node:fs";
import path = require("node:path");

//we have to read file before test block so always need to do it here
//we need to convert this simple JSON file to JavaScript obj so we can work on it
let json_data=fs.readFileSync(path.join(__dirname, '../../test-data/data.json'))
let json_data2=fs.readFileSync(path.join(__dirname, '../../test-data/valid_invalid.json'))

// @ts-ignore
let data=JSON.parse(json_data)
// @ts-ignore
let data2=JSON.parse(json_data2)

test("basic-json", async ({page})=>{
    data.forEach(d=>{
        console.log(d)
    })
})

test("for application", async ({page})=>{
    //use for of when we have array of json obj in json file
    for(let d of data){
        await page.goto(d.url)
        await page.locator('//input[@id="username"]').fill(d.username)
        await page.locator('//input[@id="password"]').fill(d.password)
        await page.locator('//button[@id="submit"]').click()
        await page.waitForTimeout(2000)
    }
})

test.only("valid invalid json", async ({page})=>{
    for(let d of data2.valid){
        await page.goto(d.url)
        await page.locator('//input[@id="username"]').fill(d.username)
        await page.locator('//input[@id="password"]').fill(d.password)
        await page.locator('//button[@id="submit"]').click()
        await page.waitForTimeout(2000)
    }
    for(let d of data2.invalid){
        await page.goto(d.url)
        await page.locator('//input[@id="username"]').fill(d.username)
        await page.locator('//input[@id="password"]').fill(d.password)
        await page.locator('//button[@id="submit"]').click()
        await page.waitForTimeout(2000)
    }
})