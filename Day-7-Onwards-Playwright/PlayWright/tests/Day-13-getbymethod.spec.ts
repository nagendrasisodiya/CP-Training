import {test} from "@playwright/test"

test("get_by_method", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByLabel("Username", {exact:true}).fill("student")
    await page.getByLabel("Password").fill("Password123")
    await page.getByText("Submit").first().click()
    await page.getByText("Log out").first().click()
    await page.getByRole("textbox", {name:"Username", exact:true}).fill("student")
})
