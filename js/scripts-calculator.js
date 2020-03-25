
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


$(document).ready(function(){
  
  $("form#add").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  var result = add(number1, number2);
  $("#output1").text(result);
  }); 
  
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    var result = subtract(number1, number2);
    $("#output2").text(result);
  });
  
    $("form#multiply").submit(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#mul1").val());
      var number2 = parseInt($("#mul2").val());
      var result = multiply(number1, number2);
      $("#output3").text(result);
    });
    
    $("form#divide").submit(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#div1").val());
      var number2 = parseInt($("#div2").val());
      var result = divide(number1, number2);
      $("#output4").text(result);
     });
});

