//CHAPTER 17-20
// // Task 1
// var array =[
//     [1,"abc"],
//     [2,"efg"]
// ]
// document.write(array);

// // Task 2
// var arr = [
//     arr1 = [0, 1, 2, 3],
//     arr2 = [1, 0, 1, 2],
//     arr3 = [2, 1, 0, 1]
// ]
// document.write(arr1[0],"&nbsp",arr1[1],"&nbsp",arr1[2],"&nbsp",arr1[3], "<br>");
// document.write(arr2[0],"&nbsp",arr2[1],"&nbsp",arr2[2],"&nbsp",arr2[3], "<br>");
// document.write(arr3[0],"&nbsp",arr3[1],"&nbsp",arr3[2],"&nbsp",arr3[3]);

//Task 3
// for (var i = 1; i <= 10; i++) {
//     document.write(i, "<br>");
// }

// Task 4
// var input1 = +prompt("Enter number");
// var input2 = +prompt("Enter length");
// document.write("Multiplication Table", "<br>")
// for (i = 1; i <= input2; i++) {
//     document.write(input1, " x ", i, " = ", input1 * i, "<br>");
// }

// // Task 5
// var fruits = ["apple", "banana", "mango", "orange", "strawbery"];
// for (var i = 0; i <= 4; i++) {
//     document.write(fruits[i],"<br>");
// }
// document.write("<br>","Element at index 0 is apple");
// document.write("<br>","Element at index 1 is banana");
// document.write("<br>","Element at index 2 is mango");
// document.write("<br>","Element at index 3 is orange");
// document.write("<br>","Element at index 4 is strawbery");

// //Task 6(a)
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// document.write("Counting: ", "<br>", arr, "<br>");
// // Task 6(b)
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.reserve();
// document.write("<br>", "Reverse counting: ", "<br>", arr, "<br>");
// // Task 6(c)
// var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// for (var t = 0; t <= arr.length; t++) {
//     if (t % 2 == 0) {
//         document.write("<br>", "Even: ", arr[t]);
//     }
// }

//Task 7
var arr4 = ["cake", "apple pie", "cookie", "chips", "patties"];
var userSearch = prompt("Enter an item you want to search");
arr4.search(userSearch);
document.write(userSearch);

