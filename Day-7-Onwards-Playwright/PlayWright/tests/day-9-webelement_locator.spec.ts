import {test} from "@playwright/test"

test("tittle1", async({page})=>{
    await page.goto("https://www.amazon.in/ref=nav_logo")
    await page.locator("input#twotabsearchtextbox").fill("laptop")
})

test("tittle2", async({browser})=>{
    let context= await browser.newContext()
    let page= await context.newPage()

    // goto

    await page.goto("https://www.amazon.in/ref=nav_logo")
    await page.locator("input#twotabsearchtextbox").fill("laptop")

    //!PS D:\WrokSpace\PlayWright> npx playwright test tests/test2.spec.ts --headed
})

test("tittle3", async({context})=>{
    let page= await context.newPage()

    // goto

    await page.goto("https://www.amazon.in/ref=nav_logo")
    await page.locator("input#twotabsearchtextbox").fill("laptop")
})

test("tittle4", async({browser, browserName})=>{
    let context= await browser.newContext()
    let page= await context.newPage()
    let page2=await context.newPage()

    // goto

    await page.goto("https://www.amazon.in/ref=nav_logo")
    await page.locator("input#twotabsearchtextbox").fill("laptop")
    console.log(browserName)
    await page.pause()
    await page2.goto("https://www.crazygames.com/game/gulper-io?czy_invite=true&utm_source=invite&roomId=75fc64Y")
})
