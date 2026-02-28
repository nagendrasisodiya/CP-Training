import {test} from "@playwright/test"

test("tittle1", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("input#password").fill("laptop")
    await page.locator("button#submit").click()
})
