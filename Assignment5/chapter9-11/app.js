// CHAPTER # 9-11
// Task 1
// var city = prompt("Enter a city name");
// if (city == "karachi") {
// document.write("Welcome to city of lights");
// }
// else {
// document.write("Welcome to another city")
// }

// Task 2
// var gender = prompt("Enter your gender");
// if (gender === "male") {
//     alert("Good Morning Sir.")
// }
// else if (gender === "female") {
//     alert("Good Morning Ma'am.");
// }
// else {
//     alert("No match")
// }

// Task 3
// var color = prompt("Enter your color");
// if (color === "red") {
//     alert("Must stop")
// }
// else if (color === "yellow") {
//     alert("Ready to move");
// }
// else if (color === "green") {
//     alert("Move now");
// }
// else {
//     alert("Must follow the traffic rules")
// }

// Task 4
// var fuel = +prompt("Remaining fuel in car is");
// if (fuel < 0.25) {
//     alert("Please refill the fuel of your car");
// }
// else {
//     alert("No need to refill fuel");
// }

// Task 5(a)
var a = 4;
if (++a === 5) {
    // alert("Given condition for variable a is true"); //True
}
// Task 5(b)
var b = 82;
if (b++ === 83) {
    // alert("given condition for variable b is true"); //False
}
// Task 5(c)
var c = 12;
if (c++ === 13) {
    // alert("condition 1 is true"); //false
}
if (c === 13) {
    // alert("condition 2 is true"); //True
}
if (++c < 14) {
    // alert("condition 3 is true"); //false
}
if (c === 14) {
    // alert("condition 4 is true"); //True
}
// Task 5(d)
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    // alert("The cost equals"); //True
}
// Task 5(e)
if (true) {
    // alert("True");//true
}
if (false) {
    // alert("False");
}
// Task 5(f)
if ("car" < "cat") {
    // alert("car is smaller than cat"); //true
}

// Task 6
// var obt1 = +prompt("Enter marks obtained in subject1");
// var obt2 = +prompt("Enter marks obtained in subject2");
// var obt3 = +prompt("Enter marks obtained in subject3");
// var obtained = obt1 + obt2 + obt3;
// var totalMarks = +prompt("Enter total marks");
// var per = obtained / totalMarks * 100;
// document.write("<h1>", "Mark Sheet", "</h1>", "<br>");
// document.write("Total Marks: ", totalMarks, "<br>");
// document.write("Marks obtained: ", obtained, "<br>");
// document.write("Percentage: ", per, "%", "<br>");

// if (per >= 80) {
//     document.write("Grade: A-one", "<br>");
//     document.write("Remarks: Excellent");
// }
// else if (per >= 70) {
//     document.write("Grade: A", "<br>");
//     document.write("Remarks: Good");
// }
// else if (per >= 60) {
//     document.write("Grade: B", "<br>");
//     document.write("Remarks: You need to improve");
// }
// else if (per < 60) {
//     document.write("Grade: Fail", "<br>");
//     document.write("Remarks: Sorry");
// }
// else {
//     document.write("You are fire");
// }

// Task 7
// var secretNumber = 7;
// // var guess = +prompt("Guess the secret number");
// if (secretNumber === guess) {
//     alert("Bingo! Correct answer");
// }
// else if (secretNumber === guess + 1) {
//     alert("Close enough to the correct answer");
// }
// else{
//     alert("Bingo! Wrong answer");
// }

// Task 8
// var number = +prompt("Enter a number");
// if (number % 3 == 0) {
//     alert("This number is divisible by 3");
// }

// Task 9
// var num = +prompt("Enter your number");
// if (num % 2 === 0) {
//     alert("Number is even");
// }
// else if (num % 2 != 0) {
//     alert("Number is odd");
// }

// Task 10
// var temp = +prompt("Enter temperature");
// if (temp > 40) {
//     alert("It is too hot outside");
// }
// else if (temp > 30) {
//     alert("The Weather today is Normal");
// }
// else if (temp >= 20) {
//     alert("Today’s Weather is cool");
// }
// else if (temp > 10) {
//     alert("OMG! Today’s weather is so Cool");
// }
// else{
//     alert("It's snowfall season");
// }


// Task 11
var a = prompt("Enter firt number");
var operator = prompt("Enter operator");
var b = prompt("Enter last number");
if (operator === '+') {
    alert((+a) + (+b));
}
else if (operator === '-') {
    alert(a - b);
}
else if (operator === '*') {
    alert(a * b);
}
else if (operator === '/') {
    alert(a / b);
}
else if (operator === '%') {
    alert(a % b);
}

// End
