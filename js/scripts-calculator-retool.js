

//Back-end Logic :c

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

//window.onload = whenLoadedFunc1;
//window.onload = whenLoadedFunc2;

//function whenLoaded () {
//  var number1 = document.parseInt(getElementById("add1").val());
//  var number2 = document.parseInt(getElementById("add2").val());

//  document.getElementById("output").text() = "some stuff";
//}

// Everything below this line is user interface (or front-end) logic:
$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var operation = $("input:radio[name=band]:checked").val();
    

    // console.log(operation);
    // $(".output").append(operation);
    // works 

    if (operation === "add") {
      var result = add(number1, number2);
    }

    else if (operation === "subtract") {
      var result = subtract(number1, number2);
    }

    else if (operation === "multiply") {
      var result = multiply(number1, number2);
    }

    else if (operation === "divide") {
      var result = divide(number1, number2);
    }
    $("#output").text(result);
  });
});

// $("#calculator") / document.getelementbyid("calculator")

// # = .getElementById() (?)