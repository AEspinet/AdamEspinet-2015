$(document).ready(function(){

  $('#main-wrap').fadeIn(50);

  $(".icon, #content, .about, #about-content").addClass("hide");

  $("#copy-portfolio").removeClass("hide");
  $("#copy-portfolio").addClass("animated fadeInDown delay show");

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