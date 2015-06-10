$(document).ready(function(){


  $("#wrap-top, #portfolio, #wrap-bottom, .icon, #content, .about, #about-content, #write-up, #photo-container").addClass("hide");

  $("#write-up").removeClass("hide");
  $("#write-up").addClass("pageAnimation fadeInDown show");
  
  $("#photo-container").removeClass("hide");
  $("#photo-container").addClass("pageAnimation fadeInLeft show");

  $("#wrap-top").removeClass("hide");
  $("#wrap-top").addClass("pageAnimation fadeInDown show");

  $("#portfolio").removeClass("hide");
  $("#portfolio").addClass("animated fadeIn show");

  $("#wrap-bottom").removeClass("hide");
  $("#wrap-bottom").addClass("pageAnimation fadeInUp show");


  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();

      if (scroll >= 600) {
          $(".icon").removeClass("hide");
          $(".icon").addClass("animated fadeInDown show");

          $("#content").removeClass("hide");
          $("#content").addClass("animated fadeIn delay show");
      }
      if (scroll >= 2500) {
          $(".about").removeClass("hide");
          $(".about").addClass("animated fadeInDown show");

          $("#about-content").removeClass("hide");
          $("#about-content").addClass("animated fadeInDown show");

      }
  });


});