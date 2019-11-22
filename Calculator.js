var first = prompt("What is your first Number?", "ie. 2");
var second = prompt("What is your second number?", "ie. 10");
var math = prompt("What would you like to do?", "Add(+), Subtract(-), Multiply(x or *), or Divide(% or /)");
var sum = Number(first) + Number(second);
var difference = Number(first) - Number(second);
var product = Number(first) * Number(second);
var quotient = Number(first) / Number(second)

if (math == "Add" || math == "+") {
    alert("The sum is: " + sum);
}

else if (math == "Subtract" || math == "-") {
    alert("The difference is: " + difference);
}

else if (math == "Multiply" || math == "x" || math == "*" || math == "X") {
    alert("The product is: " + product);
}

else if (math == "Divide" || math == "%" || math == "/") {
    alert("The quotient is: " + quotient);
}

else {
    alert("A value you have input is incorrect.")
}


// To make a calculator
// Probably use HTML + CSS to create and style the buttons that will hold the values (ie. 1,2,3,etc +,-,/,*, etc)
// Use Javascript to give these buttons values... not sure how to do this??? Maybe use the dom?