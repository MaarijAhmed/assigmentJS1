//object 1
let a = prompt("what is your number : ");
if (a == "karachi") {
    alert("welcome to city of lights ")
}
//object 2
let gender = prompt("Gender : ")
if (gender == "male") {
    alert("goodmorning sir")
}
else {
    alert("good morning mam")
}
//object 3
let a = prompt("road traffic light : ")
if (a == "red") {
    alert(" must stop ")
}
else if (a == "yellow") {
    alert("ready to move")
}
else {
    alert("move now")
}
//object 4
let a = +prompt("volume of fuel : ");
if (a < 0.25) {
    alert("plese refill")
}
else {
    alert("you are ready to go ");
}
//object 5
var a = 4; if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82; if (b++ === 83) { alert("given condition for variable b is true"); }
var c = 12; if (c++ === 13) { alert("condition 1 is true"); } if (c === 13) { alert("condition 2 is true"); } if (++c < 14) { alert("condition 3 is true"); } if (c === 14) { alert("condition 4 is true"); }
var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost) { alert("The cost equals"); }
if (true) { alert("True"); } if (false) { alert("False"); }
if ("car" < "cat") { alert("car is smaller than cat"); }
//object 6
let a = input("what is you percentage : ");
if (a >= 80) {
    alert ("grade A * excellent ")
}
if (a >= 70) {
    alert ("grade A  good ")
}
if (a >= 60) {
    alert ("grade B * need to improve ")
}
if (a >= 49) {
    alert ("grade F * sorry ")
}
//object 7
let a = prompt("what is your guess")
let secret_number = 5
if (a == secret_number) {
    alert("you guesed it right ")
}
let secret_number1 = secret_number - 1;
if (a == secret_number1) {
    alert ("close ")
}
else {
    alert ("wrong")
}
//object 8
let a = prompt("what is you number : ")
if (a % 3 == 0) {
    alert ("this number is divisible by 3")
}
else {
    alert ("it is not")
}
//object 9
let a = prompt("what is your number")
if (a & 2 == 0) {
    alert("even")
}
else {
    alert ("odd")
}
//Object 10
let a = +prompt("what is the tempratue : ")
if (a <= 40){
    alert ("hot outside ")
}
if (a <= 30) {
   alert ("it is normal")
}
if (a <= 20) {
    alert ("it is cold")
 }
if (a <= 10) {
    alert ("it is very cold outside ")
}
//object 11
let a = prompt ("first number : ")
let b = prompt ("second number : ")
let c = prompt ("operation : ")
if (c == "+") {
    alert (a + b);
}
if (c == "-") {
    alert (a - b);
}
if (c == "/") {
    alert (a/b);
}
if (c = "*" || "x") {
    alert (a * b);
}
if (c = "%") {
    alert (a % b);
}