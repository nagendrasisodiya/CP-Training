import {test} from "@playwright/test";

test("add_user", async ({request})=>{
    let response1=await request.post("https://petstore.swagger.io/v2/user", {
        data:{
            "id": 1,
            "username": "user1",
            "firstName": "user",
            "lastName": "1",
            "email": "user1@gmail.com",
            "password": "1234",
            "phone": "9425624579",
            "userStatus": 0
        }
    })
    console.log("op: ")
    console.log(await response1.json())
})

test("login_user", async ({request})=>{
    let login_response=await request.get("https://petstore.swagger.io/v2/user/login",{
        params:{
            "username":"user1",
            "password":"1234"
        }
    })
    console.log(await login_response.text())
})

test("add_pet",async ({request})=>{
    let post_response=await request.post("https://petstore.swagger.io/v2/pet", {
        data:{
            "id": 101,
            "category": {
                "id": 5,
                "name": "Dogs"
            },
            "name": "Buddy",
            "photoUrls": [
                "https://example.com/photos/buddy1.jpg",
                "https://example.com/photos/buddy2.jpg"
            ],
            "tags": [
                {
                    "id": 11,
                    "name": "Golden Retriever"
                },
                {
                    "id": 12,
                    "name": "Friendly"
                }
            ],
            "status": "available"
        }
    })
    console.log(await post_response.json())
})

test("getPet_byId", async ({request})=>{
    let get_response=await request.get("https://petstore.swagger.io/v2/pet/101")
    console.log(await get_response.json())
})
