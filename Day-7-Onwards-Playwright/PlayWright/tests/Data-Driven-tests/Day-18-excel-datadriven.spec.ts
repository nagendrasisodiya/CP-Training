import { test} from '@playwright/test'
// @ts-ignore
import excel from 'exceljs'
import path = require("node:path");

test("data driven", async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname, '../../test-data/excel_data.xlsx'))
    let sheet = await book.getWorksheet("Sheet1")
    let data=sheet?.getRow(1).getCell(1).toString()
    console.log(data)

    for(let r=1; r<sheet?.actualRowCount;r++){
        for(let c=1;c<=sheet?.actualColumnCount;c++){
            let data=await sheet?.getRow(r).getCell(c).toString()
            console.log(data)
        }
    }
})

test.only("excel-task", async ({page})=>{
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname, '../../test-data/excel_data.xlsx'))
    let sheet=await book.getWorksheet("Sheet1")
     for(let r:number=1;r<=sheet?.actualRowCount;r++){
         let url:string=sheet?.getRow(r).getCell(1).toString()
         let email:string=sheet?.getRow(r).getCell(2).toString()
         let password:string=sheet?.getRow(r).getCell(3).toString()
         await page.goto(url)
         await page.getByPlaceholder("Enter your email").fill(email)
         await page.getByPlaceholder("Enter your password").fill(password)
         await page.locator('//button[@type="submit"]').click()
     }
})