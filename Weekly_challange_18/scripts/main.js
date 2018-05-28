function myMap() {
  const myCenter = new google.maps.LatLng(44.069447,-69.774520);
    const mapCanvas = document.getElementById("googleMap");
    const mapOptions = {center: myCenter, zoom: 15};
    const map = new google.maps.Map(mapCanvas, mapOptions);
    const marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
}
