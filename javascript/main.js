
$("#quoteSubmission").submit(function( event ) {
  event.preventDefault();
  $("#response").append("submitted").addClass("alert alert-success");
  $("#myModal").fadeOut(5000, function(){
    $('quoteSubmission').trigger("reset");
    $("#modalClose").click();
    $("#response").empty().removeClass();
  });
  
});