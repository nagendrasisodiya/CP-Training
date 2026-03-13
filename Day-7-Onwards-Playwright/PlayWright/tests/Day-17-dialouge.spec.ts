import {test} from "@playwright/test";
import {log} from "node:console";

test("simple-pop-up", async ({page})=>{

    page.on("dialog", async (d)=>{
        if(d.type()=="confirm"){
            await d.dismiss()
        }else if(d.type()=="prompt"){
            await d.accept("dddf")
            await console.log(d.message())
        }
        //alert
        //confirm
        //prompt
    })
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//button[@id="confirmBtn"]').click()
    await page.waitForTimeout(3000)
    await page.locator('//button[@id="promptBtn"]').click()
    await page.waitForTimeout(3000)
})
test("page.once", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.once("dialog", async (d)=>{
        await d.accept()
    })

    await page.locator('//button[@id="confirmBtn"]').click()
    await page.waitForTimeout(3000)

})

test("task-1", async ({page})=>{
    page.on("dialog", async (d)=>{
        if(d.type()=="prompt"){
            await console.log(d.message())
            if(await d.defaultValue()=="Harry Potter"){
                await d.accept(d.defaultValue())
            }else{
                await d.accept("Tom")
            }
        }

    })
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//button[@id="promptBtn"]').click()
    await page.waitForTimeout(3000)
})

test.only("task-2-notification", async ({browser})=>{
    let context= await browser.newContext({permissions:["notifications"]})
    let page= await context.newPage()

    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.locator('//button[@id="browNotButton"]').click()

    let ev=await page.evaluate(()=>{
        return Notification.requestPermission()
    })
    console.log(ev)
})