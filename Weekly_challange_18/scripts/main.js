$(document).ready(function(){

  function filterProjects(filter){
      if(filter === "ALL"){
          $('.portfolio-project').slideDown();
      }
      else{
          $('.portfolio-project').each(function(){
            if($(this).attr('workType') !== filter){
                $(this).slideUp();
            }
            else{
                $(this).slideDown();
            }
          })
      }
  }

  $(".nav-item").click(function(){
    let destination = 0;
    if($(this).index() > 0){
       destination = $("body > section").eq($(this).index()-1).position().top -70;
      }
    $('html, body').animate({
        scrollTop: destination
    }, 1000);
  });

  $("#portfolio-panel li").click(function(){
      $(this).addClass('active-filter');
      $(this).siblings().removeClass('active-filter');
      filterProjects($(this).html());
  });

  $('.portfolio-project').mouseenter(function(){
    $(this).find('img').css("transform", "scale(1.2,1.2) rotateZ(30deg)");
  });
  $('.portfolio-project').mouseleave(function(){
    $(this).find('img').css("transform", "none");
  });

});

function myMap() {
  const myCenter = new google.maps.LatLng(44.069447,-69.774520);
    const mapCanvas = document.getElementById("googleMap");
    const mapOptions = {center: myCenter, zoom: 15};
    const map = new google.maps.Map(mapCanvas, mapOptions);
    const marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
}
