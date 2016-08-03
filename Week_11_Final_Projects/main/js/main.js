$(document).ready(function() {

// Project Name: Final Project, Main
// Client: FEWD25
// Author: Andy Aronoff
// Developer @GA in DC

// anchor animate
var hrefFull
var hrefName
$("nav ul li a").click(function() {
  event.preventDefault();
  hrefFull = event.target.href;
  console.log(hrefFull);
  hrefName = hrefFull.substr(hrefFull.indexOf("#") + 0);
  console.log(hrefName);
  // $("html, body").delay(10).animate({
  //     scrollTop: $(hrefName).offset().top 
  //   }, 1000);
  $("html, body").animate({
      scrollTop: $(hrefName).offset().top 
    }, 1000);
});

// call Unite Gallery
$("#gallery").unitegallery();

}); //close document.ready