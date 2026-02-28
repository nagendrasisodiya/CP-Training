console.log(window)
console.log("hello")
window.console.log("hii")

console.log(document)
console.log(document.body)
console.log(document.title)
console.log(document.head)

console.log(document.body.childNodes[0])
console.log(document.body.children[2])

let btn1=document.body.children[2]
console.log(btn1.parentElement)
console.log(btn1.parentElement)

let div1=document.body.children[3];
console.log(div1.firstElementChild)
console.log(div1.lastElementChild)
console.log(div1.nextElementSibling)


let head=div1.lastElementChild
console.log(head.previousElementSibling)
console.log(head.previousSibling)

let div=document.getElementById("head")
// console.log(div)
console.log(div.firstElementChild)
console.log(div.lastElementChild)

let h4=document.getElementsByClassName("h4")
console.log(h4)
let convertedarray=Array.from(h4)
console.log(convertedarray)
convertedarray.map((ele)=>{
    ele.style.color="modernwhite"
    ele.style.backgroundColor="pink"
    ele.style.padding="15px"
    ele.style.width="10%"

})

let img=document.createElement("img")
console.log(img)
img.setAttribute("src", "./../image.png")
img.style.margin="20px"
document.body.append(img)

let h=document.createElement("h1")
h.textContent="hello"
document.body.append(h)

let para=document.createElement("p")
para.textContent="hiii"
document.body.append(para)


function action(){
    alert("alert alert bachaoo bachaaooo")
};

let btn21=document.getElementById("btn2")
btn21.onclick=function demoalert(){
    alert("aagyi police aagyi peww pewww pewww")
}

let st=true
let btn3=document.getElementById("btn3")
btn3.addEventListener("click", ()=>{
    if(st==false){
        st=true
        btn3.textContent="black"
        document.body.style.color="black"
        document.body.style.backgroundColor="white"
    }else{
        st=false
        btn3.textContent="white"
        document.body.style.color="white"
        document.body.style.backgroundColor="grey"
    }
}
)

let inc=document.querySelector(".plus")
let dic=document.querySelector(".minus")
let show=document.querySelector(".display")
let reset=document.querySelector(".reset")
let count=0

inc.addEventListener("click", function(){
    count++;
    show.textContent=count;
})
dic.addEventListener("click", function(){
    count--
    show.textContent=count
})
reset.addEventListener("click", function(){
    show.textContent=0
    count=0
})
