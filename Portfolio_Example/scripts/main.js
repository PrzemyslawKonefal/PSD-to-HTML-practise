function myMap() {
  var myCenter = new google.maps.LatLng(44.069447,-69.774520);
    var mapCanvas = document.getElementById("googleMap");
    var mapOptions = {center: myCenter, zoom: 15};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
}
