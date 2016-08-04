$(document).ready(function() {

// Project Name: Final Project, Main
// Client: FEWD25
// Author: Andy Aronoff
// Developer @GA in DC

// anchor animate, showCode slideToggle
var hrefFull
var hrefName
var hrefCode = 0

$("nav ul li a").click(function() {
  event.preventDefault();
  hrefFull = event.target.href;
  console.log(hrefFull);
  hrefName = hrefFull.substr(hrefFull.indexOf("#") + 0);
  console.log(hrefName);

  // #showCode slideToggle
  // if (hrefName == "#showCode") {
  //   $("#showCode").slideToggle(400);
  if (hrefName == "#showCode" && hrefCode == 0) {
    $("#showCode").slideDown(400);
    hrefCode = 1;
  } else if (hrefName == "#showCode" && hrefCode == 1) {
    $("#showCode").slideUp(400);
    hrefCode = 0;
  // scroll
  } else {
  $("html, body").animate({
      scrollTop: $(hrefName).offset().top 
    }, 1000);
  };
}); // end anchor animate, showCode slideToggle

// hide #showCode div on window resize if showing
$(window).resize(function() {
  // This will fire each time the window is resized:
  if ($(window).width() >= 760 && hrefCode == 0) {
    // if large enough and not opened
    $("showCode").hide();
    hrefCode = 0;
  } else if ($(window).width() >= 760 && hrefCode == 1) {
    // if large enough window and opened
    $("showCode").show();
    hrefCode = 1;
  } else {
    // if smaller
    $("#showCode").hide();
    hrefCode = 0;
  };
});

}); //close document.ready