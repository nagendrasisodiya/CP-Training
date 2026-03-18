import {test} from "@playwright/test";

//4 types of hooks
//beforeAll--once for each worker before all other tests depend on worker
//beforEach
//afterAll--this also depends on worker
//afterEach
test.beforeAll("hook-1", async ()=>{
    console.log("before all")
})

test("test-1", async ()=>{
    console.log("test1")
})
test("test-2", async ()=>{
    console.log("test2")
})