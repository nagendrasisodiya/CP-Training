import {test} from "@playwright/test";

test("iframe-1", async ({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")

    let frames=await page.frames()
    console.log(frames.length)

    for(let i of frames){
        console.log(await i.title())
    }
})

test("iframe-2", async ({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    let frame1 =await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.locator('//input[@name="mytext1"]').fill("hhh")


    let frame2=await page.frameLocator('//frame[@src="frame_2.html"]')
    await frame2.locator('//input[@name="mytext2"]').fill("gg")

    let frame3=await page.locator('//frame[@src="frame_3.html"]').contentFrame()
    let frame4=await frame3.frameLocator('//iframe[@src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]')
    await frame4.locator('(//div[@class="AB7Lab Id5V1"])[1]').click()
})

