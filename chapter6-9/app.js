document.write("Result " + " <br>");
let a = 10;
document.write("the value of is " + a + "<br>" + "<br>" + "<br>" + "<br>")
document.write("the value of ++a is " + ++a + "<br>")
document.write("The value of a is now" + a + "<br>" + "<br>" + "<br>")
document.write("the value of a++ is : " + a++ + "<br>");
document.write("the value of a is now " + a + "<br>" + "<br>" + "<br>")
document.write("the value of --a is now " + --a + "<br>")
document.write("the value of a is now " + a + "<br>" + "<br>" + "<br>")
document.write("the value of a-- is now : " + a-- + "<br>")
document.write("the value of a is now " + a)
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write(result)
var a = +prompt (" name : ")
document.write("greetings ! "+ a)
let a = +prompt("what is your number : ");

for (let i = 1 ; i <= 10 ; i++) {
    document.write(a + " " + "x " + i + " = " + i*a + "<br>")
}
let b = +prompt("what is your number : ");
if (a == b) 
    for (let j = 1 ; j <= 10 ; j++){
        document.write("5 " + " " + " x" + (j) + " = " + j*5 + "<br>");
}
let subject1 = "urdu";
let subject2 = "english";
let subject3 = "maths";
let total_marks = 100;
let marks_subject_1 = +prompt("urdu marks : ");
let marks_subject_2 = +prompt("english marks : ");
let marks_subject_3 = +prompt("maths marks : ");
document.write("Subject     total marks     Obtained Marks      Percentage" + "<br>")
document.write(subject1 + "     " + total_marks + "     " + marks_subject_1 + "     " + (marks_subject_1 * 10 / 100))