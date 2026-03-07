import {test} from "@playwright/test"

test("task-1", async({page})=>{
    await page.goto("https://www.amazon.in/ref=nav_logo")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("phones")
    await page.locator('//input[@id="nav-search-submit-button"]').click()
    let text=await page.locator('//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]/child::span | //span[@class="a-price-whole"]').allTextContents()
    console.log(text)
})
