//handle quote submission form
$("#quoteSubmission").submit(function( event ) {
  event.preventDefault();
  $("#response").append("submitted").addClass("alert alert-success");
  $("#myModal").fadeOut(5000, function(){
    $('quoteSubmission').trigger("reset");
    $("#modalClose").click();
    $("#response").empty().removeClass();
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

