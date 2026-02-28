export class Car{
    brand:string;
    colour:string="blue"
    constructor(b:string, c:string){
        this.brand=b
        this.colour=c
        // this.start()
    }
    start():void{
        console.log("vromm vrommm")
        // return 0
    }

}
let c=new Car("zzz", "xxx")
c.brand="zoozooo"
console.log(c.brand)
c.start()
// console.log(c.start())

console.log("start");
setTimeout(
    ()=>{ console.log("task 1");
    }, 1000
)

// const ret:number=setInterval(
//     ()=>{ console.log("interval");
//     }, 1000
// )
// console.log(ret);

setTimeout(
    ()=>{console.log("end");
    }, 1000
)

let p1=new Promise<string>(
    (resolve, reject)=>{
        let sucess=true
        if(sucess==true){
            console.log("sucess");
            resolve("user loged in")
        }else{
            console.log("falil")
            reject("user falied")
        }
    }
)
p1
  .then(result => console.log(result))   // "Task completed!"
  .catch(error => console.error(error))  // if rejected
  .finally(() => console.log("Done"));
