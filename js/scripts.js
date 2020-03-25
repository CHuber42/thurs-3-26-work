$(document).ready(function(){
  $("#formOne").submit(function(event){
    $(".your-name").text($("input#person-name").val());
  

    $("#letter").show();

    event.preventDefault();
  });
});