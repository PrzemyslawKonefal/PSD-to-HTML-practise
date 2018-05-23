$(document).ready(function(){
    //navbar visibility

    function toggleNavbar(state){
      const nav = $('nav');
      const content = $('main > div');
      const button = $('#nav-trigger');
      if(state === "open"){
        $('nav').css('left', '-180px');
        content.css('margin-left', '0px');
        button.css('transform', 'translate(100%, -50%) rotateY(0deg)');
      }
      else{
        nav.css('left', '0px');
        content.css('margin-left', '180px');
        button.css('transform', 'translate(100%, -50%) rotateY(180deg)');
      }
      return;
    }

    $('#nav-trigger').click(function(){
      if($('nav').css('left') === '0px'){
        toggleNavbar("open");
      }
      else{
        toggleNavbar("closed");
      }
    });

    $(window).resize(function(){
        if($(this).width()>684){
          toggleNavbar("closed");
        }
        else{
          toggleNavbar("open");
        }
    });

    //scroll navbar update

    $(window).scroll(function () {
      const scroll = $(this).scrollTop();
      $('main > div').each(function(){
        if(($(this).position().top < scroll) && ($(this).position().top + $(this).height() >= scroll)){
          $('.main-nav').find('p').removeClass('nav-active');
          $('.main-nav').find('p').eq($(this).index()).addClass('nav-active');
        }
      });
    });

    $('.main-nav').find('p').click(function(){
      const destination = $("main > div").eq($(this).index()).position().top +1;
      $('html, body').animate({
          scrollTop: destination
      }, 1000);
    });

    $('#front-page span').click(function(){
      const destination = $("main > div:last").position().top +1;
      $('html, body').animate({
          scrollTop: destination
      }, 1000);
    })
});

    //google maps API
    function myMap() {
      var myCenter = new google.maps.LatLng(44.069447,-69.774520);
        var mapCanvas = document.getElementById("googleMap");
        var mapOptions = {center: myCenter, zoom: 15};
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({position:myCenter});
        marker.setMap(map);
    }
