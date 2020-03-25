$(document).ready(function() {
  $("form#shouting-form").submit(function(event) {
    event.preventDefault();
    debugger;
   $("#shout-output").text($("#shouting-entry").val().toUpperCase());
    

  });
});