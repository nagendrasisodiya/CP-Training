import {test} from "@playwright/test";

test("explicit-wait-for", async({page})=>{
    await page.goto("https://www.amazon.in/ref=nav_logo")
    // await page.getByTestId("nav_avod_desktop_topnav").click()

    //if that element becomes visible 5sec, it just proceeds further when using timeout and state together state implemented
    //so either use state or timeout no sense of using both together
    await page.getByTestId("nav_avod_desktop_topnav").waitFor({state:"detached"})

})
test("wait-for-navigation", async ({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.getByPlaceholder("Search for Products, Brands and More").first().fill("phones")
    await page.keyboard.press("Enter")

    await Promise.all([
        page.waitForNavigation(),
        page.locator("(//div[@class=\"hZ3P6w DeU9vF\"])[1]").click()
    ]);
})

test("with-browser-context", async ({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()

    await page.goto("https://www.flipkart.com/")
    await page.getByPlaceholder("Search for Products, Brands and More").first().fill("phones")
    await page.keyboard.press("Enter")

    const [page2] =await Promise.all([
        context.waitForEvent("page"),
        page.locator("(//div[@class=\"hZ3P6w DeU9vF\"])[1]").click()
    ]);
    console.log(await page.url())
    console.log(await page2.url())
})

test("mouse-actions", async ({page})=>{
    page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
     await page.locator("#btn_a").dblclick()

    page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1")
    await page.locator("#btn_a").click({button:"right", clickCount:1})
    await page.locator("(//div[@class=\"py-1 ps-1 hover:bg-orange-300\"])[1]").click()

    page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")
    await page.locator("//img[@class=\"w-5 h-5 mt-5 ml-3 cursor-pointer \"]").hover()

    page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
    await page.locator("#btn_a").hover()
    await page.mouse.down()
    await page.mouse.up()

})

test("mouse-action-checkboxes", async ({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    await page.locator("#domain_a").click()

    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    // await page.locator("(//div[@class=\"draggable\"])[1]").hover()
    // await page.mouse.down()
    // await page.getByText("Mobile Accessories").hover()
    // await page.mouse.up()
    await page.getByText("Laptop Charger").dragTo(page.getByText("Laptop Accessories"))
    await page.getByText("Mobile Accessories").dragTo(page.getByText("Mobile Accessories"))
    await page.getByText("Mobile Cover").dragTo(page.getByText("Mobile Accessories"))
    await page.getByText("Laptop Cover").dragTo(page.getByText("Laptop Accessories"))
})

test("scrool", async ({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()
    await page.locator("//input[@type='checkbox']").check();
    await page.waitForTimeout(5000)
    await page.getByText("Accept Our Policy").click();
})

test.only("scenario", async ({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/login")
    await page.getByPlaceholder("Enter your email").fill("student@gmail.com")
    // await page.getByPlaceholder("Enter your email").hover()
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    await page.keyboard.press("Tab")
    await page.keyboard.press("Control+V")
    await page.keyboard.press("Tab")
    await page.keyboard.press("Enter")

})