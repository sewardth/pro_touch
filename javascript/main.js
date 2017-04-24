//handle quote submission form
$("#quoteSubmission").submit(function( event ) {
  event.preventDefault();
  
  $.post( "\quotes", $(this).serialize())
    .done(function( data ) {
      $("#response").empty().removeClass();
      $("#response").append("Request Submitted!  We will be in touch within 1 business day.").addClass("alert alert-success");
      $("#quoteSubmission").trigger("reset");
      
  })
  .fail(function(){
    $("#response").empty().removeClass();
    $("#response").append('Something went wrong!  If you continue to experience this error, please contact us directly at <a href="mailto:info@protouchclean.com">info@protouchclean.com</a>.').addClass("alert alert-danger");
  })
  .always(function(){
  });

  
});


//clean up last header icon
$("#lastHeaderLink").css('border','none');

//call google maps function
$('#locationModal').on('shown.bs.modal', function () {
  initMap();
});

//google maps load function
  function initMap() {
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 10,
    center: {lat: 42.490618, lng: -83.609692},
    mapTypeId: 'roadmap'
    });

    // Define the LatLng coordinates for the polygon's path.
    var triangleCoords = [
    {lat: 42.590301, lng: -83.602014},  //milford
    {lat: 42.550953, lng: -83.507857},  //wolverine lake
    {lat: 42.513510, lng: -83.453612},  //novi
    {lat: 42.402568, lng: -83.451209}, //northville
    {lat: 42.371124, lng: -83.660636}, //salem
    {lat: 42.393440, lng: -83.814445}, //webster
    {lat: 42.463889, lng: -83.847232}, //hamburg
    {lat: 42.520343, lng: -83.829551}, //brighton
    {lat: 42.574976, lng: -83.726554}, //brighton2
    {lat: 42.590301, lng: -83.602014}  //milford
    ];

    // Construct the polygon.
    var bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: '#8EC1DE',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#8EC1DE',
    fillOpacity: 0.35
    });
    bermudaTriangle.setMap(map);
  }

