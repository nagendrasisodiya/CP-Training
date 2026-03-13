import {test} from "@playwright/test";

test("auth", async ({browser})=>{
    let context=await browser.newContext({
        httpCredentials:{
            username:"admin",
            password:"admin"
        }
    })
    let page=await context.newPage()

    await page.goto("https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/")
    await page.waitForTimeout(3000)
})

test.only("auth-2", async ({browser})=>{
    let context=await browser.newContext({
        httpCredentials:{
            username:"admin",
            password:"admin"
        }
    })
    let page=await context.newPage()

    await page.goto("https://the-internet.herokuapp.com/basic_auth")
    await page.waitForTimeout(2000)


})