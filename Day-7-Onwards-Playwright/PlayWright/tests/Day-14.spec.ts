import {test} from "@playwright/test"

test("test", async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId("username").fill("student_user")
})

test("web element", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByLabel("Username",{exact:true}).type('student')
    await page.getByLabel("Username",{exact:true}).type('student-1')
    //the type method just not going to replace the already present data put it new text after that
    await page.getByLabel("Password").fill("password123")
    await page.getByLabel("Password").fill("password1234")
    //fill replaces the already present data in the field

    let input=await page.getByLabel("Username", {exact:true}).inputValue()
    console.log(input)
    // //got the value that we put in the input field
    // An <input> element doesn’t have child text nodes; its value is stored in the value property,
    // not in the DOM text.
    //Playwright’s locator.inputValue() is designed to retrieve exactly that — the current value of the input field,
    // including what the user typed or what was programmatically set.
})

test.only(" web element 2", async ({page})=>{
    await page.goto("https://www.amazon.in/ref=nav_logo")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("phones")
    await page.locator('//input[@id="nav-search-submit-button"]').click()
    // await page.locator("//a[@class=\"a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal\"]").first().waitFor()
    //wait for waits till timeout till the our first element is fully loaded
    let ele=await page.locator("//a[@class=\"a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal\"]").all()
    console.log(ele)


})