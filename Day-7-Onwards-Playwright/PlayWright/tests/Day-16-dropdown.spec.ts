import {test} from "@playwright/test";

test("dropdown", async ({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    await page.locator('#country_code').selectOption({value:"+14"})
    await page.locator('//select[@id="select3"]').selectOption({index:4})
    await page.waitForTimeout(3000)

})
test("multi_select-dropdown", async ({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    // await page.locator('//select[@id="select-multiple-native"]').selectOption(["Mens Casual Premium ...", "SanDisk SSD PLUS 1TB..."])
    await page.locator('//select[@id="select-multiple-native"]').selectOption([{index:1}, {index:4}])
    await page.locator("//button[@class=\"bg-orange-500 p-2 text-white rounded w-[150px]\"]").click()
    await page.waitForTimeout(3000)
})


test("mantra-task",async({page})=>{
    await page.goto("https://www.myntra.com/shoes?rawQuery=shoes")
    await page.waitForTimeout(10000)
    await page.locator("//span[@class='myntraweb-sprite sort-downArrow sprites-downArrow']").click();
    const sort=await page.locator("//ul[@class='sort-list']/li").all()
    for(let sor of sort){
        console.log(await sor.textContent());
    }
})

test.only("amazon-task", async ({page})=>{
    await page.goto("https://www.amazon.in/ref=nav_logo")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
    const temp= await page.locator('//div[@class=\"left-pane-results-container\"]/div/div/div').all()
    for(let op of temp){
        const text=await op.textContent()
        if(text?.includes("for woman")){
            await op.click();
            console.log(text);
            break
        }
    }
    await page.waitForTimeout(5000)
})

