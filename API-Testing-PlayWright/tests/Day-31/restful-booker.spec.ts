import {expect, test} from "@playwright/test";
// @ts-ignore
import fs from "node:fs";
import path = require("node:path");


const filePath = path.join(__dirname, '../../Data-Files/day-31-globalVariables.json');
const bookingDataFilePath=path.join(__dirname, '../../Data-Files/day-31-bookingData.json');
let json_data=fs.readFileSync(filePath)
let json_data2=fs.readFileSync(bookingDataFilePath)
let global_data=JSON.parse(json_data)
let booking_data=JSON.parse(json_data2)

test("get-token", async ({request})=>{
    let response=await request.post("https://restful-booker.herokuapp.com/auth",{
        data:{
            username:"admin",
            password:"password123"
        },
        ignoreHTTPSErrors:true,
    })
    expect(response.status()).toBe(200)
    let body=await response.json()
    let jwtToken=await body.token
    console.log(body)
    console.log(jwtToken)
    global_data.token=jwtToken
    fs.writeFileSync(filePath, JSON.stringify(global_data, null, 2))
})


test("create-booking", async ({request})=>{
    let response=await request.post("https://restful-booker.herokuapp.com/booking", {
        data:{
            firstname:booking_data.firstname,
            lastname:booking_data.lastname,
            totalprice:booking_data.totalprice,
            depositpaid:booking_data.depositpaid,
            bookingdates:{
                checkin:booking_data.bookingdates.checkin,
                checkout:booking_data.bookingdates.checkout
            },
            additionalneeds:booking_data.additionalneeds
        },
        ignoreHTTPSErrors:true,
        headers:{
            Authorization: `Bearer ${global_data.token}`
        }
    })
    expect(response.status()).toBe(200)
    let body=await response.json()
    console.log(body)
})

test("get_booking", async ({request})=>{
    let booking_response=await request.get("https://restful-booker.herokuapp.com/booking", {
        params:{
            firstname:"Jim",
            lastname:"Brown",
        },
        ignoreHTTPSErrors:true,
        headers:{
            Authorization: `Bearer ${global_data.token}`
        }
    })
    expect(booking_response.status()).toBe(200)
    let body=await booking_response.json()
    let bookingId=await body[0]?.bookingid
    console.log(body)
    console.log(bookingId)
    global_data.booking_id=bookingId
    fs.writeFileSync(filePath,JSON.stringify(global_data, null, 2))
})

test("get-booking-byId", async ({request})=>{
    let response=await request.get(`https://restful-booker.herokuapp.com/booking/${global_data.booking_id}`, {
        ignoreHTTPSErrors:true,
        headers:{
            Authorization: `Bearer ${global_data.token}`
        }
    })
    expect(response.status()).toBe(200)
    let body=await response.json()
    console.log(body)
})

