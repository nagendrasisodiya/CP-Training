import {test} from "@playwright/test"


test("tittle2", async()=>{
    console.log("test2")
})

test("tittle3", async()=>{
    test.slow()
    console.log("test3")
})

test.fixme("tittle4", async()=>{
    console.log("test4")
})

test("tittle5", async()=>{
    console.log("test5")
})
