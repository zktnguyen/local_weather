(function($) {
  var DS_API_KEY = "c4284cb822d9a944";
  
  function callDisplay(data){
    $("#city-name").append("<h1>" + data.feelslike_string + "</h1>");
  }
  function getInfo(position){
    
    $.ajax({
      url: "https://api.wunderground.com/api/"
    + DS_API_KEY + "/" + "conditions/q/" + position.coords.latitude + "," + position.coords.longitude + ".json",
      success: function(data){
  callDisplay(data.current_observation);
      },
      error: function (request, status, error) {
        $("#city-name").html(request.responseText);
    }
      
    });
  }
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    getInfo(position);
    
  });
}
})(jQuery);