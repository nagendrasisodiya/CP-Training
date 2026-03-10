import {test, expect} from "@playwright/test"

//setting timeout for this particular file global setting
// test.use({actionTimeout:8000})


test("assertion-1", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByLabel("Username", {exact:true}).fill("student123")
    let attached=await page.getByLabel("Username", {exact:true}).inputValue()
    expect(attached).toBe("student123")
    // expect(attached).toBe("student1234")

    let time=new Date().getTime()
    // await page.screenshot({path:`sshoot/${time}.png`})
    await expect(page).toHaveScreenshot()
})

test.only("assertion-2",  async({page})=>{
    //setting up timeout for this test block
    // await page.setDefaultTimeout(1000)

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByLabel("Username", {exact:true}).fill("student123")
    let attached=await page.getByLabel("Username", {exact:true}).inputValue()
    expect(attached).toContain("udent1")

    // await expect(page.getByLabel("Username", {exact:true})).toBeHidden()

    const numbers=[1, 2, 3]
    expect(numbers).toContain(3)

    //timeout for a particular line of code
    //await page.getByLabel("Password", {exact:true}).fill("password123", {timeout:10000})
})
