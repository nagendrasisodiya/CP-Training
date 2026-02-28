"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ggi = ggi;
var index_01_1 = require("./index-01");
console.log("hello");
var a = 20;
a = 10;
var str = "hello";
console.log(str);
console.log(a);
var g = 20;
console.log(g);
g = "hhhh";
console.log(typeof (g));
console.log(g);
g = 0;
console.log(typeof (g));
// array and tuples
//array
var arr = [1, 2, 3, 4];
//tuple
var tup = ["hhhhhh", 2, true];
console.log(tup);
// creating object
var stud = {
    name: "hhhhh",
    age: 12
};
console.log(stud);
var test;
function greet(name, age) {
    console.log("".concat(name, " hello and ").concat(age));
    return 2;
}
var numm = greet("hhhjjjkk");
console.log(numm);
var sum = function (a, b) {
    if (a === void 0) { a = 9; }
    return a + b;
};
console.log(sum(7, 7));
var arr3 = [1, "ff"];
console.log(arr3);
var obj = {
    name: "hhh",
    age: 12
};
function ggi() {
    console.log("exported");
}
var c = new index_01_1.Car("zzz", "xxx");
