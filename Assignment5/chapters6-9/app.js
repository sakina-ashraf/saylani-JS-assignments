// Task 1
var x = 10;
// document.write("Result: ","<br>");
// document.write("The value of x is: "+x,"<br>");
// document.write("--------------------------","<br>","<br>");

++x;
// document.write("The value of ++x is: "+x,"<br>");
// document.write("Now the value of x is: "+x,"<br>","<br>");

// document.write("The value of ++x is: "+x,"<br>");
x++;
// document.write("Now the value of x is: "+x,"<br>","<br>");

--x;
// document.write("The value of --x is: "+x,"<br>");
// document.write("Now the value of x is: "+x,"<br>","<br>");

// document.write("The value of x-- is: "+x,"<br>");
x--;
// document.write("Now the value of x is: "+x,"<br>","<br>");

// Task 2
var a = 2, b = 1;
var output = --a - --b + ++b + b--;
// document.write("a is: 1","<br>");
// document.write("b is: 0","<br>");
// document.write("Output is: "+output);

// Task 3
// var name = prompt("Enter your name");
// document.write("Dear "+name, " thank you for subscribing us");

// Task 4
// var num = +prompt("Enter your number")
for (i = 1; i <= 10; i++) {
    // document.write(num, " x ", i, " = ", num * i, "<br>");
}
var num1 = 5;
for (i = 1; i <= 10; i++) {
    // document.write(num1, " x ", i, " = ", num1 * i, "<br>");

}

// Task 5
var sub1 = prompt("Enter name of subject1");
var sub2 = prompt("Enter name of subject2")
var sub3 = prompt("Enter name of subject3")
var marksForEach = 100;
var obt1 = +prompt("Enter marks obtained in subject1");
var obt2 = +prompt("Enter marks obtained in subject2");
var obt3 = +prompt("Enter marks obtained in subject3");
var totalMarks = marksForEach + marksForEach + marksForEach;
var totalObt = obt1 + obt2 + obt3;
var per1 = obt1 / marksForEach * 100;
var per2 = obt2 / marksForEach * 100;
var per3 = obt3 / marksForEach * 100;
var totalPer = totalObt / totalMarks * 100;

document.write("<table border='0'>");
document.write("<tr>");
document.write("<th>Subjet</th>");
document.write("<th>Total Marks</th>");
document.write("<th>ObtainedMarks</th>");
document.write("<th>Percentage</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>",sub1,"</td>");
document.write("<td>",marksForEach,"</td>");
document.write("<td>",obt1,"</td>");
document.write("<td>",per1+"%","</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>",sub2,"</td>");
document.write("<td>",marksForEach,"</td>");
document.write("<td>",obt2,"</td>");
document.write("<td>",per2+"%","</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>",sub3,"</td>");
document.write("<td>",marksForEach,"</td>");
document.write("<td>",obt3,"</td>");
document.write("<td>",per3+"%","</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>","<br>&nbsp;&nbsp;",totalMarks,"</td>");
document.write("<td>","<br>",totalObt,"</td>");
document.write("<td>","<br>",totalPer,"</td>");
document.write("</tr>");

document.write("</table>");


