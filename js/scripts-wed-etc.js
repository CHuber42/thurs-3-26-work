$(document).ready(function() {
  $("form#shouting-form").submit(function(event) {
    event.preventDefault();
    $("#shout-output").text($("#shouting-entry").val().toUpperCase());
    
  $("form#appointments").submit(function(event) {
    event.preventDefault();
    $("#appointments-output").show();
    
    });

  });
});