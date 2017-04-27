
//function to get query params
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$( document ).ready(function() {
    var content = getParameterByName("content");

    if(content === "rotation")
    {
        $("#rotation-system-dialogue").click();
    }
    else if(content === "one-time")
    {
        $("#one-time-dialogue").click();
    }
});

//functions to handle modal links
$(".rotation-link-button").click(function(){
    $(".initial-cleans-close").click();
    $(".one-time-close").click();

    setTimeout(function() {
        $("#rotation-system-dialogue").click();
    }, 500);
    
});


$(".one-time-button").click(function(){
    $(".initial-cleans-close").click();
    $(".rotation-close").click();

    setTimeout(function() {
        $("#one-time-dialogue").click();
    }, 500);
    
});

$(".initial-cleans-button").click(function(){
     $(".one-time-close").click();
     $(".rotation-close").click();

    setTimeout(function() {
        $("#initial-cleans-dialogue").click();
    }, 500);
    
});

