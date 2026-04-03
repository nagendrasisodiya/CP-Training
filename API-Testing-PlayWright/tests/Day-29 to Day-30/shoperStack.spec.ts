import {test} from "@playwright/test";
// @ts-ignore
import fs from "node:fs";
import path = require("node:path");

const filePath = path.join(__dirname, '../Data-Files/GlobalVariables.json');
let json_data=fs.readFileSync(filePath)
let data=JSON.parse(json_data)

test("add_user", async ({request})=>{
    let add_user_response=await request.post("https://www.shoppersstack.com/shopping/shoppers", {
        data:{
            "city": "jaipur",
            "country": "india",
            "email": "genxg@gmail.com",
            "firstName": "user",
            "gender": "MALE",
            "lastName": "2",
            "password": "1234",
            "phone": 9463545289,
            "state": "rajsthan"
        },
        ignoreHTTPSErrors: true
    })
    console.log(await add_user_response.json())
})

test("login_user", async ({request})=>{
    let login_response=await request.post("https://www.shoppersstack.com/shopping/users/login", {
        data:{
            "email": "genxg@gmail.com",
            "password": "1234",
            "role": "SHOPPER"
        },
        ignoreHTTPSErrors: true
    })
    const body = await login_response.json();
    let token = body.data.jwtToken;
    let user_id=body.data.userId;
    console.log("JWT Token:", token);
    console.log("User Id:", user_id);

    fs.writeFileSync(filePath, JSON.stringify({
        token: body.data.jwtToken,
        user_id: body.data.userId
    }, null, 2))

})

test("get_allProducts", async ({request})=>{
    let products_response=await request.get("https://www.shoppersstack.com/shopping/products/alpha",
        {        ignoreHTTPSErrors: true
        })
    console.log(await products_response.json())
})

test("addProduct_wishList", async ({request})=>{
    let response=await request.post(`https://www.shoppersstack.com/shopping/shoppers/${data.user_id}/wishlist`,
        {
            data:{
                productId:54,
                quantity: 4
            },
            ignoreHTTPSErrors:true,
            headers:{
                Authorization: `Bearer ${data.token}`,
            }
        })
    console.log(await response.json())
})

test("getProduct_wishList", async ({request})=>{
    let response=await request.get(`https://www.shoppersstack.com/shopping/shoppers/${data.user_id}/wishlist`,
        {
            ignoreHTTPSErrors:true,
            headers:{
                Authorization: `Bearer ${data.token}`,
            }
        })
    console.log(await response.status())
    console.log(await response.json())
})

test("add_to_cart", async ({request})=>{
    let response=await request.post(`https://www.shoppersstack.com/shopping/shoppers/${data.user_id}/carts`,{
        data:{
            "productId": 54,
            "quantity": 2
        },
        ignoreHTTPSErrors:true,
        headers:{
            Authorization: `Bearer ${data.token}`,
        }
    })
    console.log("status code: ",await response.status())
    console.log(await response.json())
})

test("get_cart", async ({request})=>{
    let response=await request.get(`https://www.shoppersstack.com/shopping/shoppers/${data.user_id}/carts`,{
        ignoreHTTPSErrors:true,
        headers:{
            Authorization: `Bearer ${data.token}`,
        }
    })
    console.log("status code: ",await response.status())
    console.log(await response.json())
})

test("delete_product_fromCart", async ({request})=>{
    let response=await request.delete(`https://www.shoppersstack.com/shopping/shoppers/${data.user_id}/carts/54`,{
        ignoreHTTPSErrors:true,
        headers:{
            Authorization: `Bearer ${data.token}`,
        }
    })
    console.log("status code: ",await response.status())
    console.log(await response.json())
})

test("add_address", async ({request})=>{
    let response=await request.post(`https://www.shoppersstack.com/shopping/shoppers/${data.user_id}/address`, {
        data:{
            "addressId": 2,
            "buildingInfo": "Sunrise Apartments, Flat No. 302",
            "city": "Pune",
            "country": "India",
            "landmark": "Near Phoenix Mall",
            "name": "user",
            "phone": "+91-9463545289",
            "pincode": "432103",
            "state": "Maharashtra",
            "streetInfo": "Viman Nagar Road",
            "type": "Home"
        },
        ignoreHTTPSErrors:true,
        headers:{
            Authorization: `Bearer ${data.token}`,
        }
    })
    console.log(await response.status())
    console.log(await response.json())
})

test("getAddress", async ({request})=>{
    let response=await request.get(`https://www.shoppersstack.com/shopping/shoppers/${data.user_id}/address`,{
        ignoreHTTPSErrors:true,
        headers:{
            Authorization: `Bearer ${data.token}`,
        }
    })
    console.log(await response.status())
    console.log(await response.json())
})

test("order", async ({request})=>{
    let order_response=await request.post(`https://www.shoppersstack.com/shopping/shoppers/${data.user_id}/orders`,{
        data:{
            "address": {
                "addressId": data.address_id,
                "buildingInfo": "Sunrise Apartments, Flat No. 302",
                 "city": "Pune",
                "country": "India",
                "landmark": "Near Phoenix Mall",
                "name": "user",
                "phone": "+91-9876543210",
                "pincode": "432103",
                "state": "Maharashtra",
                "streetInfo": "Viman Nagar Road",
                "type": "Home"
            },
            "paymentMode": "COD"
        },
        ignoreHTTPSErrors:true,
        headers:{
            Authorization: `Bearer ${data.token}`,
        }
    })
    console.log(await order_response.status())
    console.log(await order_response.json())
})


test("get_orderDetails", async ({request})=>{
    let orderDetails_response=await request.get(`https://www.shoppersstack.com/shopping/shoppers/${data.user_id}/orders`, {
        ignoreHTTPSErrors:true,
        headers:{
            Authorization: `Bearer ${data.token}`,
        }
    })
    console.log(await orderDetails_response.status())
    console.log(await orderDetails_response.json())
})

test("updateOrder_Status", async ({request})=>{
    let updateCart_response=await request.patch(`https://www.shoppersstack.com/shopping/shoppers/${data.user_id}/orders/${data.order_id}`,{
        params:{
            "status":"DELIVERED"
        },
        ignoreHTTPSErrors:true,
        headers:{
            Authorization: `Bearer ${data.token}`,
        }
    })
    console.log(await updateCart_response.status())
    console.log(await updateCart_response.json())
})

// test("add_reviews", async ({request})=>{
//     let addReviews_response=await request.post(`https://www.shoppersstack.com/shopping/shoppers/reviews?productId=54`,{
//         data:{
//             "dateTime": "2026-03-28T07:03:45.097Z",
//             "description": "Purchased wireless headphones",
//             "heading": "Order Confirmation",
//             "rating": 5,
//             "shopperId": data.user_id,
//             "shopperName": "user2"
//         },
//         ignoreHTTPSErrors:true,
//         headers:{
//             Authorization: `Bearer ${data.token}`,
//             "Content-Type": "application/json"
//         }
//     })
//     console.log(await addReviews_response.status())
//     console.log(await addReviews_response.text())
// })