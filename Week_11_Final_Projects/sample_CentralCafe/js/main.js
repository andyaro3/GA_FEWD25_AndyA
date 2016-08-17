//
//  Project Name: Sample Business Site, Central Café
//    Client: FEWD25, Final Project
//    Author: Andy Aronoff
//    Developer @GA in DC -->

$(document).ready(function() {

// on doc ready, fade in homepage
$("#homepage").fadeIn(1200);

// nav hover color change -- WORKING :)
$("nav ul li a").hover(function() {
  $(this).css({"background-color":"white", "color":"hsla(11, 100%, 4%, 1)", "font-weight":"bold"});
    }, function() {
      $(this).css({"background-color":"hsla(11, 100%, 4%, 1)", "color":"white", "font-weight":"normal"});
});

// .hamburger hover color change
$(".hamburger").hover(function() {
  $(this).css({"background-color":"white", "color":"hsla(11, 100%, 4%, 1)", "font-weight":"bold", "border-color":"hsla(11, 100%, 4%, 1)"});
    }, function() {
      $(this).css({"background-color":"hsla(11, 100%, 4%, 1)", "color":"white", "font-weight":"normal", "border-color":"white"});
});

// hamburger dropdown toggle
var hamburgerToggle = 0;
$(".hamburger").click(function() {
  if (hamburgerToggle == 0) {
    $("nav").animate({width: "250px"}, 500);
    hamburgerToggle = 1;
  } else if (hamburgerToggle == 1) {
    $("nav").animate({width: "0"}, 500);
    hamburgerToggle = 0;
  };
});

// toggle page
var hrefFull;
var hrefName;

$("nav ul li a").click(function() {
  event.preventDefault();
  hrefFull = event.target.href;
  hrefName = hrefFull.substr(hrefFull.indexOf("#") + 0);
  console.log(hrefName);

  $("#homepage").hide();
  $("#ourStory").hide();
  $("#menu").hide();
  $("#shop").hide();
  $("#contact").hide();
  // hide nav
  $("nav").animate({width: "0"}, 500);
  hamburgerToggle = 0;
  //show page clicked
  $(hrefName).fadeIn(1200);
}); // end page toggle

}); //close document.ready