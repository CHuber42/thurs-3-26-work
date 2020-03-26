function animalChange () {
  var e = $("#animals").val();    
  
  if (e === "Snake"){
    $("#insectSelect, #turtleSelect").addClass("hidden");
    $("#snakeSelect").removeClass("hidden");
    // $("#snakeBackground").show();
    // $("#snakeBackground").removeClass()
  }
  else if (e === "Turtle"){
    $("#insectSelect, #snakeSelect").addClass("hidden");
    $("#turtleSelect").removeClass("hidden");
  }
  else if (e === "Insect"){
    $("#snakeSelect, #turtleSelect").addClass("hidden");
    $("#insectSelect").removeClass("hidden");
  }
  
};



$(document).ready(function(){

  
});

