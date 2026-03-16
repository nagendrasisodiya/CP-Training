import {test} from "@playwright/test";
import sample from "../../Project Object Model(POM)/sample.page";
import amazon from "../../Project Object Model(POM)/Day-20.page";

test("fun-in-pom", async ({page})=>{
    let sample_page=new sample(page)
    await sample_page.performLogin(
        'https://practicetestautomation.com/practice-test-login/',
        "student", "Password123")
})

test.only("pom-task-amazon", async ({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    let obj=new amazon(page)
    await page.goto("https://www.amazon.in/ref=nav_logo")
    await obj.addToCart( "phones")
})