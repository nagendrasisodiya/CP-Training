import { test} from '@playwright/test'
// @ts-ignore
import excel from 'exceljs'
import path = require("node:path");

test("adding new content", async ({page})=>{
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname, '../../test-data/excel_data.xlsx'))
    let sheet=book.getWorksheet("Sheet2")
    if(!sheet){
        sheet=book.addWorksheet("Sheet2")
    }
    sheet.getRow(1).getCell(1).value="playwright"
    await book.xlsx.writeFile(path.join(__dirname, '../../test-data/excel_data.xlsx'))
})

test.only("writing_excel", async ({page})=>{
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname, '../../test-data/excel_data.xlsx'))
    let sheet=book.getWorksheet("Sheet3")
    if(!sheet){
        sheet=book.addWorksheet("Sheet3")
    }

    await page.goto("https://www.amazon.in/ref=nav_logo")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
    await page.waitForTimeout(5000)
    let c=await page.locator('//div[@class=\'left-pane-results-container\']/child::div').allTextContents()
    console.log(c)

    for(let i=0;i<c.length;i++){
        let t=c[i]
        sheet.getRow(i).getCell(1).value=t
    }
    await book.xlsx.writeFile(path.join(__dirname, '../../test-data/excel_data.xlsx'))


})