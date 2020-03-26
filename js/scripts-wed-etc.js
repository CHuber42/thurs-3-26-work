$(document).ready(function() {
  $("form#shouting-form").submit(function(event) {
    event.preventDefault();
    $("#shout-output").text($("#shouting-entry").val().toUpperCase());
  });
    
  $("form#appointments").submit(function(event) {
    event.preventDefault();
    $("#appointments-output").show();
  });

  $("form#lbs-to-oz").submit(function(event) {
    event.preventDefault();
    $("#lbs-to-oz-results").text(parseInt($("#lbs-to-oz-request").val()) * 16);
  });

  $("form#oz-to-cups").submit(function(event) {
    event.preventDefault();
    $("#oz-to-cups-results").text(parseInt($("#oz-to-cups-request").val()) / 8);
  });

  $("form#cups-to-grams").submit(function(event) {
    event.preventDefault();
    $("#cups-to-grams-results").text(parseInt($("#cups-to-grams-request").val()) * 340);
  });

    
  
  $("form#address-book-form").submit(function(event) {
    event.preventDefault();
    var name = $("#address-book-name").val();
    
    var phoneLI = document.createElement("li"); 
    phoneLI.textContent = $("#address-book-phone").val();
    phoneLI.setAttribute('class', 'hidden');

    var emailLI = document.createElement("li");
    emailLI.textContent = $("#address-book-email").val();
    emailLI.setAttribute('class', 'hidden');

    $("#address-book-form-results").prepend(`<ul class='entry address-book-clickable'> ${name} </ul>`);

    var elements = document.getElementsByClassName("entry");
    
    elements[0].appendChild(phoneLI);
    elements[0].appendChild(emailLI);
    });


    $(".address-book-clickable").on(click(function() {
      console.log("something");
      $(".hidden").slideToggle();
    }));
  
});

