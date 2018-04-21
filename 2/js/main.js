$(document).ready(function() {

  // scroll navbar
      $(window).scroll(function () {
          var scroll = $(window).scrollTop();
          if (scroll) {
            $(".navbar").css({'box-shadow': '0 1px 3px black','background': 'rgba(255, 255, 255, 0.5)'});
          }
          else{
          $(".navbar").css({'box-shadow': 'none', 'background': '#fff'});
          }
    });

    // phone attention

    $("#call-now").css("box-shadow", "0 0 30px #000000");
    $("#call-now").css("background", "#02aef0");
    setInterval(function(){
    if($("#call-now").css("box-shadow") == "none"){
        $("#call-now").css("box-shadow", "0 0 30px #000000");
        $("#call-now").css("background", "#02aef0");
    }
    else{
      $("#call-now").css("box-shadow", "none");
      $("#call-now").css("background", "#0082b4");
    }
  }, 3000);
      });
