// a="10"
// console.log(typeof(a))
let a=2n
console.log(typeof(a))

obj={
    name:"totiii",
    age:12
}
console.log(obj.name)
obj.name="too";
console.log(obj)

arr=[1,"name", "hello", a, 12]
console.log(arr)
delete arr[1]
console.log(arr)
function add(){
    console.log(10+20)
}
add()