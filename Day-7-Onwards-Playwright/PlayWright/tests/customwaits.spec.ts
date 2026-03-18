import {test} from "@playwright/test";

test("custom-wait", async ({page})=>{
    await page.goto("https://www.amazon.in/ref=nav_logo")
    await page.waitForFunction(()=>{
        return document.readyState=='complete'
    })
    console.log(await page.title())
})