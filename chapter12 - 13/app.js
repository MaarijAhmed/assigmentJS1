//object 1
function allLetter(inputtxt) {
    var letters = /^[A-Za-z]+$/;
    if (inputtxt.value.match(letters)) {
        return true;
    }
    else {
        alert("message");
        return false;
    }
}
//object 2
let a = +prompt("what is your first number : ");
let b = +prompt("what is your second number : ");
if (a < b) {
    alert("second number is bigger")
}
else if (a > b) {
    alert("first number is bigger")
}
else {
    alert("both are equal")
}
// object 3
let a = +prompt("number : ")
if (a > 0) {
    alert("positive")
}
else if (a < 0) {
    alert("nagative")
}
else {
    alert("zero")
}
// object 4
let a = prompt("what is your letter")
if (a == "a" || a == "i" || a == "o" || a == "u" || a == "e") {
    alert("vowel")
}
else {
    alert("not a vowel")
}
// object 5
let correct_passwoed = "kilo1984"
let a = +prompt("what is the password")
if (a == correct_passwoed) {
    alert("correct")
}
else {
    alert("incorrect")
}
// object 6
var greeting; var hour = 13; if (hour < 18)  greeting = "Good day"; else{ greeting = "Good evening"; }