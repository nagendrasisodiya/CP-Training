import {test} from "@playwright/test"
import { log } from "node:console"

test ("control", async({page})=>{
    let s= await page.viewportSize()
    console.log(s)
    await page.setViewportSize({width:5000, height:5000})
    console.log(await page.viewportSize())
})

test.only("control2", async({page, context})=>{
    await page.goto("https://www.amazon.in/ref=nav_logo")
    console.log(await page.title())
    await page.goto("https://www.amazon.in/ref=nav_logo")
    let time=new Date().getTime()
    await page.screenshot({path:`scsh/${time}.png`})
    console.log(await context.cookies());
})