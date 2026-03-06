import {test} from "@playwright/test"

test("amazon", async({page})=>{
  await page.goto("https://www.amazon.in/ref=nav_logo")
  await page.locator('//input[@id="twotabsearchtextbox"]').fill("samsung")
  await page.locator('//input[@id="nav-search-submit-button"]').click()
  let price=await page.locator('//span[@class="a-price-whole"]').first().innerText()
  console.log(price);
})

