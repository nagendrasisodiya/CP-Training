import {Car} from "./index-01"
console.log("hello")
let a=20
a=10
let str:string="hello"
console.log(str)
console.log(a)

let g:any=20
console.log(g)

g="hhhh"
console.log(typeof(g))
console.log(g)

g=0
console.log(typeof(g))

// array and tuples
//array
let arr:number[]=[1,2,3,4]
//tuple
let tup:[string, number, boolean]=["hhhhhh", 2, true]
console.log(tup)

// creating object

let stud:{
    name:string,
    age:number,
    rollnum?:number
}={
    name:"hhhhh",
    age:12
}
console.log(stud)

let test:{
    num:number
}

function greet(name:string, age?:number):number{
    console.log(`${name} hello and ${age}`)
    return  2
}
let numm:any=greet("hhhjjjkk")
console.log(numm)

let sum= (a:number=9, b:number):number|string=>{
    return a+b
}
console.log(sum(7, 7))


let arr3: readonly(string|number)[]=[1,"ff"]
console.log(arr3)
// arr3.push()


interface Person{
    name:string,
    age:number
}
let obj:Person={
    name:"hhh",
    age:12
}
interface humoo{
    poko:string,
    lokko:number,
    tokoo():number
}

export function ggi():void{
    console.log("exported")
}

let c=new Car("zzz", "xxx")