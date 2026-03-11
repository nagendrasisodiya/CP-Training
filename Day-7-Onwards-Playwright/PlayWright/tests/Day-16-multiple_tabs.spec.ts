import {test} from "@playwright/test";

test("multi-tab", async ({browser})=>{
    let context=await browser.newContext()

    let page1=await context.newPage()
    await page1.goto("https://www.amazon.in/ref=nav_logo")

    let page2=await context.newPage()
    await page2.goto("https://www.flipkart.com/")
    await page2.getByPlaceholder("Search for Products, Brands and More").first().fill("phones")
    await page2.keyboard.press("Enter")
    // await page2.waitForTimeout(2000)
    const [page3] =await Promise.all([
        // context.waitForEvent("page"),
        page2.waitForEvent("popup"),
        page2.locator('(//div[@class="hZ3P6w DeU9vF"])[1]').click()
    ]);
    await page3.waitForTimeout(5000)
    console.log(page3.url())
})

test.only("download-event", async({browser})=>{
    let context=await browser.newContext()
    let page1=await context.newPage()

    await page1.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page1.getByPlaceholder("Enter text here").fill("testerrrr")
    await page1.getByPlaceholder('Filename').fill("myfile.txt")
    await page1.waitForTimeout(2000)
    let[download]=await Promise.all([
        page1.waitForEvent("download"),
        page1.locator("#downloadButton").click()
    ])

} )