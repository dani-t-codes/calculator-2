// Start of business logic
const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const multiply = function(num1, num2) {
  return num1 - num2;
};

const divide = function(num1, num2) {
  return num1 / num2;
};
// End of business lgic

// Start of user interface logic
$(document).ready(function() {
  const num1 = parseInt($("#add1").val());
  const num2 = parseInt($("#add2").val());
  alert(add(num1, num2));
});







// $(document).ready(function() {
  // $("form#add").submit(function(event) {
  //   event.preventDefault();
  });
  const num1 = parseInt(text("Enter a number:"));
  const num2 = parseInt(text("Enter another number:"));
  const num3 = parseInt(a("num1 + num2"))

  //$("").text
  
  //// show(add(num1, num2));
});

$(document).ready(function() {
  $("form#subtract").submit(function(event) {
    event.preventDefault();
  });
  //const num1 = parseInt(prompt("Enter a number:"));
  //const num2 = parseInt(prompt("Enter another number:"));
  
  //show(add(num1, num2));



// End of user interface logic

// Start of deleted code

// function multiply(number1, number2) {
//   return number1 * number2;
//   }

//   const number1 = parseInt(prompt("Enter a number:"));
//   const number2 = parseInt(prompt("Enter another Number:"));
//   const result = multiply(number1, number2);
//   alert(result);



// end of code end of page END!!! END!!!!!!!