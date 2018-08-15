"use strict";

// navbar
$(window).scroll(function () {
  var scrollRoll = $(this).scrollTop();
  var carouselH = $("#myCarousel").height();
  if (scrollRoll > carouselH) {
    $("#section_nav").addClass("fixed-top");
  } else {
    $("#section_nav").removeClass("fixed-top");
  }
});

// gotop
$(function () {
  $("body").append("<a href='#' id='gotop'></a>");

  $("#gotop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 300);
    return false;
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#gotop").fadeIn(400);
    } else {
      $("#gotop").fadeOut(400);
    }
  });
});
//# sourceMappingURL=main.js.map
