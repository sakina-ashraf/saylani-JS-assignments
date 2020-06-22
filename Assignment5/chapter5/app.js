// CHAPTER # 05
// Task 1
var a = 3;
var b = 5;
var c = a+b;
// document.write("Sum of 3 and 5 is 8");

// Task 2
var a = 3;
var b = 5;
var c = b-a;
var c = a*b;
var c = b/a;
var c = a%b;
// document.write("Sub of 5 and 3 is 2","<br>");
// document.write("Mul of 3 and 5 is 15","<br>");
// document.write("Div of 5 and 3 is 1.666667","<br>");
// document.write("Mod of 3 and 5 is 1");

// Task 3
var z;
// document.write("Value after variable declaration is " +z,"<br>" );
var z = 5;
// document.write("Initial Value: " +z,"<br>");
 z++;
// document.write("Value after increment is: " +z,"<br>");
var y = z+7;
// document.write("Value after addition is: " +y,"<br>");
y--;
// document.write("Value after decrement is: " +y,"<br>");
var x = y%3;
// document.write("The remainder is: " +x);

// Task 4
var ticket_price = 600;
var total = ticket_price * 5; 
// document.write("Total cost to buy 5 tickets to a movie is " +total, "PKR");

// // Task 5
// document.write("Table of 4","<br>");
// document.write(4 + "x"+1 ,"="+4,"<br>");
// document.write(4 + "x"+2 ,"="+8,"<br>");
// document.write(4 + "x"+3 ,"="+12,"<br>");
// document.write(4 + "x"+4 ,"="+16,"<br>");
// document.write(4 + "x"+5 ,"="+20,"<br>");
// document.write(4 + "x"+6 ,"="+24,"<br>");
// document.write(4 + "x"+7 ,"="+28,"<br>");
// document.write(4 + "x"+8 ,"="+32,"<br>");
// document.write(4 + "x"+9 ,"="+36,"<br>");
// document.write(4 + "x"+10 ,"="+40,"<br>");

// Task 6
var celsius = 25;
var fahrenheit = (celsius*9/5)+32;
// document.write("25C is " ,fahrenheit,"F","<br>");

var fahrenheit = 70;
var celsius = (fahrenheit-32)*5/9;
// document.write("70F is " ,celsius,"C");

// Task 7
// document.write("<h1>", "Shopping Cart","</h1>","<br>");
var item1 = 650;
// document.write("Price of item 1 is " +item1,"<br>");
var quan1 = 3;
// document.write("Quantity of item 1 is " +quan1,"<br>");
var item2 = 100;
// document.write("Price of item 2 is " +item2,"<br>");
var quan2 = 7;
// document.write("Quantity of item 2 is " +quan2,"<br>");
var charges = 100;
// document.write("Shipping charges " +charges,"<br>","<br>");
var total_cost = (item1*quan1)+(item2*quan2)+charges;
// document.write("Total cost of your order is "+total_cost);

// Task 8
var total_marks = 980;
var obtained_marks = 804;
var percentage = (obtained_marks/total_marks)*100;
// document.write("<h1>", "Mark Sheet","</h1>","<br>");
// document.write("Total marks: "+total_marks,"<br>");
// document.write("Marks obtained: "+obtained_marks,"<br>");
// document.write("Percentage: "+percentage, "%");

// Task 9
// document.write("<h1>", "Currency in PKR","</h1>","<br>");
var pakCurrency = (10*104.80)+(28*25);
// document.write("Total currency in PKR: "+pakCurrency);

// Task 10
var num = 4 ;
var expression = num + 5 * 10 / 2;
// document.write("The result is: " +expression);

// Task 11
// document.write("<h1>", "Age Calculator","</h1>","<br>");
var currentYear = 2020;
var birthYear = 2000;
var age =  currentYear - birthYear;
// document.write("Current Year: "+currentYear,"<br>");
// document.write("Birth Year: "+birthYear,"<br>")
// document.write("Your Age is: ",+age);

// Task 12
// document.write("<h1>", "The Geometrizer","</h1>","<br>");
var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * (radius*radius);
// document.write("Radius of a circle: "+radius,"<br>");
// document.write("The circumference is : "+circumference,"<br>");
// document.write("The area is : "+area);

// Task 13
document.write("<h1>", "The Lifetime Supply Calculator","</h1>","<br>");

var snack = "Choclate Chip";
var myAge = 15;
var maxAge = 65;
var amount = 3;
var restoflife = (maxAge - myAge)*amount;


document.write("Favorite snack: "+snack,"<br>");
document.write("Current age: "+myAge,"<br>");
document.write("Estimated Maximum Age: "+maxAge,"<br>");
document.write("Amount of snacks per day: "+amount,"<br>");
document.write("You will need "+restoflife, " choclate chip to last you until the ripe old age of 65","<br>");










