import {test} from "@playwright/test";
import path = require("node:path");

test("uploading file", async ({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()

    // console.log(__dirname)
    // console.log(__filename)

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#singleFileInput').setInputFiles(
        'D:/WrokSpace/Capgemni-Training/Day-7-Onwards-Playwright/PlayWright/upload-file/demo.txt'
    )
    await page.locator('//button[@type="submit"]').first().click()

    // await page.waitForTimeout(3000)

    //multiple file upload
    let paths=[
        'D:/WrokSpace/Capgemni-Training/Day-7-Onwards-Playwright/PlayWright/upload-file/demo.txt',
        'D:/WrokSpace/Capgemni-Training/Day-7-Onwards-Playwright/PlayWright/upload-file/demo.xlsx'
    ]
    await page.locator('#multipleFilesInput').setInputFiles(paths)
    await page.locator('(//button[@type="submit"])[2]').click()

    // await page.waitForTimeout(3000)

    //
    await page.locator('#singleFileInput').setInputFiles(path.join(__dirname, '../upload-file/demo.xlsx'))
    await page.locator('//button[@type="submit"]').first().click()
    await page.waitForTimeout(2000)

})

test("download-event", async({browser})=>{
    let context=await browser.newContext()
    let page1=await context.newPage()

    await page1.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page1.getByPlaceholder("Enter text here").fill("demo1 download")
    await page1.getByPlaceholder('Filename').fill("demo1.txt")
    let[download]=await Promise.all([
        page1.waitForEvent("download"),
        page1.locator("#downloadButton").click()
    ])
    //saving in download folder
    let d_path='D:/WrokSpace/Capgemni-Training/Day-7-Onwards-Playwright/PlayWright/downloads'
    let filename=  download.suggestedFilename();
    await download.saveAs(path.join(d_path, filename))


} )

