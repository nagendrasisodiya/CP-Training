import {test} from "@playwright/test";

test("multi-tab", async ({browser})=>{
    let context=await browser.newContext()
    let page1=await context.newPage()
    await page1.goto("https://www.flipkart.com/")
    await page1.getByPlaceholder("Search for Products, Brands and More").first().fill("phones")
    await page1.keyboard.press("Enter")
    const popupPromise = page1.waitForEvent("popup");
    await page1.locator('(//div[@class="hZ3P6w DeU9vF"])[1]').click()
    const page2=await popupPromise
    console.log(page2.url())
})