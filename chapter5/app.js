let a = +prompt  ("what is your number : ");
let b = +prompt ("what is your second number : ");
let c = a + b
let d = a - b
let e = a * b
let f = a / b
let g = a % b
document.write(" the sum of " + a + " and " + b + " is " + c + "<br>");
document.write(" the product of " + a + " and " + b + " is " + e + "<br>");
document.write(" differnce of " + a + " and " + b + " is " + d + "<br>");
document.write(" the division of " + a + " and " + b + " is " + f + "<br>");
document.write (" the modulus of " + a + " and " + b + " is " + g + "<br>")
document.write("value after variable declaration is undefined " + "<br>")
var n = 5;
document.write("initial value : " + n + "<br>")
document.write("value after increment is " + ++n + "<br>")
var n = n + 7;
document.write("value after addition is " + n + "<br>")
document.write("value after decremetn is " + --n + "<br>")
document.write("the reamainder is " + n%3 + "<br>")
let ticket = 600;
let _5ticket =  ticket * 5;
document.write("the cost of five ticket is " + _5ticket)
let table = 2;
for (let i = 1; i <= 10 ; i++) {
        document.write(" 2 " + " x " + i + " = " + i*table + "<br>")
}
let celsius = 32;
farenhiet = (celsius * 9 / 5) + 32;
document.write("It is " + farenhiet + " * fareniet" + "<br>");
let celsiust = (farenhiet - 32) * 5 / 9;
document.write("it is " + celsiust + " * celsius" )
let item1 = 230;
let item2 = 670;
let quantity_one = 2;
let quantity_two = 3;
shipping_charges = 200;
document.write("price of item 1 is " + item1 + "<br>");
document.write("quanitity of item 1 is " + quantity_one + "<br>")
document.write("price of item two " + item2 + "<br>");
document.write("quantity of item 2 is " + quantity_two + "<br>");
document.write("shipping charges : " + shipping_charges + "<br>")
totalmarks = 280;
marks_obtained = 400;
percentage = (marks_obtained/totalmarks) * 100
document.write (totalmarks + "<br>" + marks_obtained + "<br>" + percentage + "%")
let USdollar = 165;
let SaudiRiyaal = 31;
let total_currency = USdollar * 10;
let total_currency1 = SaudiRiyaal * 25;
document.write("total currency to RS . : " + (total_currency + total_currency1));
let Number = 23 + 5 * 10 / 2;
document.write(Number);