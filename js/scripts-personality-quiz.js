$(document).ready(function(){
 $("form#radio").submit(function(event){

  event.preventDefault();
  
  var question1 = $("input:radio[name=q1]:checked").val();
  var question2 = $("input:radio[name=q2]:checked").val();
  var question3 = $("input:radio[name=q3]:checked").val();
  var question4 = $("input:radio[name=q4]:checked").val();
  var question5 = $("input:radio[name=q5]:checked").val();
  var aResults = 0;
  var bResults = 0;
  var cResults = 0;
 
  

  var conclusionsArray = [question1,question2,question3,question4,question5]
  console.log(conclusionsArray);
  for (let i = 0; i < 5; i++) {
  
    if (conclusionsArray[i] === "a") {
      aResults += 1;
    }
    else if (conclusionsArray[i] === "b") {
      bResults += 1;
    }
    else if (conclusionsArray[i] === "c") {
      cResults += 1;
    }
  }
  
   
  console.log(max);

  });
});

// https://www.dyn-web.com/tutorials/forms/radio/get-selected.php


//function howMany(selectObject) {
//  let numberSelected = 0;
//  for (let i = 0; i < selectObject.options.length; i++) {
//    if (selectObject.options[i].selected) {
//      numberSelected++;
//    }
//  }
//  return numberSelected;
// }


// if (question1 === "a") {
 //   var result = add(number1, number2);

// var arr = [1,2,3]
// var max = arr.reduce(function(a, b, c) {
//  return Math.max(a, b, c);
// });