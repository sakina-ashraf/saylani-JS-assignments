// // CHAPTER 12 & 13
// Task 1
// var userInput = prompt("Enter a character");
// if (userInput >= 65 && userInput <= 90) {
//     document.write("It's Capital letter");
// }
// else if (userInput >= 97 && userInput <= 122){
//     document.write("It's Small letter");
// }
// else{
//     document.write("It's a number");
// }

// Task 2
// var int1 = +prompt("Enter first integar");
// var int2 = +prompt("Enter second integar");
// if (int1 > int2) {
//     document.write("First Integar Is Larger")
// }
// else if (int2 > int1) {
//     document.write("Second Integar Is Larger")
// }
// else if (int1 === int2) {
//     document.write("They are Equal Integers");
// }

// Task 3
// var num = +prompt("Enter your number");
// if (num > 0) {
//     document.write("It's a positive number")
// }
// else if (num < 0) {
//     document.write("It's a negative number")
// }
// else {
//     document.write("Neither positive nor negative");
// }

// Task 4
// var character = prompt("Enter a character");
// if (character === 'a') {
//     document.write("It's a vowel")
// }
// else if (character === 'e') {
//     document.write("It's a vowel")
// }
// else if (character === 'i') {
//     document.write("It's a vowel")
// }
// else if (character === 'o') {
//     document.write("It's a vowel")
// }
// else if (character === 'u') {
//     document.write("It's a vowel")
// }
// else {
//     document.write("It's a consonant");
// }

// Task 5
// var password = "saylani mass-IT program";
// var user = prompt("please enter your password");
// if(user==password){
//     alert("Correct!The password you entered matches the original password");
// }
// else{
//     alert("Incorrect password");
// }
// }

// // Task 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting);
// }
// else{
// greeting = "Good evening";
// alert(greeting);
// }

// Task 7
var time = prompt("Enter time");
if(time>=0000 && time<1200){
    document.write("Good morning!");
}
else if(time>=1200 && time<1700){
    document.write("Good afternoon!");
}
else if(time>=1700 && time<2300){
    document.write("Good evening!");
}
else if(time>=2100 && time<2359){
    document.write("Good night!");
}
else{
    document.write("Input is not valid");
}





