import {test} from "@playwright/test";

test("test-1", async ({page})=>{
    await page.goto("https://www.prokabaddi.com/schedule-fixtures-results?tab=recent")
    let data = await page.locator('(//div[@class="fixtures-body"])[1]//p[@class="match-count" or @class="team-name" or @class="score" or @class="match-place"]').allTextContents()
    console.log(data)
})
