import {test} from "@playwright/test"

test("text", async({page})=>{
  await page.goto("https://www.amazon.in/ref=nav_logo")
  await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
  await page.locator('//input[@id="nav-search-submit-button"]').click()
  let name=await page.locator('//span[text()="Bacca Bucci"]').first().innerText()
  console.log(name);
})

test("contains", async({page})=>{
  await page.goto("https://www.amazon.in/ref=nav_logo")
  await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
  await page.locator('//input[@id="nav-search-submit-button"]').click()
  let name=await page.locator('//span[contains(text(),"Campus")]').first().innerText()
  console.log(name);
})

test("child_selector", async({page})=>{
  await page.goto("https://www.amazon.in/ref=nav_logo")
  await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
  await page.locator('//input[@id="nav-search-submit-button"]').click()
  let name=await page.locator('//span[@class="a-price"]/child::span/span[@class="a-price-whole" and .="1,424" ]').first().innerText()
  console.log(name);
})

test("descendant_selector", async({page})=>{
  await page.goto("https://www.amazon.in/ref=nav_logo")
  await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
  await page.locator('//input[@id="nav-search-submit-button"]').click()
  let name=await page.locator('//span[@class="a-price"]/descendant::span[@class="a-price-whole" and .="1,424" ]').first().innerText()
  console.log(name);
})


test("descendant_selector-2", async({page})=>{
  await page.goto("https://www.amazon.in/ref=nav_logo")
  await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
  await page.locator('//input[@id="nav-search-submit-button"]').click()
  await page.locator('//div[@id="nav-belt"]/descendant::div[@id="nav-cart-count-container"]').click()
})

test("descendant_with_ancestor_selector-3", async({page})=>{
  await page.goto("https://www.amazon.in/ref=nav_logo")
  await page.locator('//input[@id="twotabsearchtextbox"]').fill("phones")
  await page.locator('//input[@id="nav-search-submit-button"]').click()
  let price = await page.locator('//a[@class="a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal"]/ancestor::div[@class="puisg-col puisg-col-4-of-4 puisg-col-4-of-8 puisg-col-8-of-12 puisg-col-8-of-16 puisg-col-12-of-20 puisg-col-12-of-24 puis-list-col-right"]/descendant::span[@class="a-price-whole"]').first().innerText()
  console.log(price)
})


test.only("task-1", async({page})=>{
  await page.goto("https://www.amazon.in/ref=nav_logo")
  await page.locator('//input[@id="twotabsearchtextbox"]').fill("phones")
  await page.locator('//input[@id="nav-search-submit-button"]').click()
  await page.locator('//div[@id="p_n_g-1003517064111/51258619031"]//descendant::span[@class="a-list-item"]/a[@aria-label="Apply the filter Android 12.0 to narrow results"]/descendant::div').click()
  let time=new Date().getTime()
  await page.screenshot({path:`sshoot/${time}.png`})
})