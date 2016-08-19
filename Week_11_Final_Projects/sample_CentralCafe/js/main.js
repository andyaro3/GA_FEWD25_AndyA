//
//  Project Name: Sample Business Site, Central Café
//    Client: FEWD25, Final Project
//    Author: Andy Aronoff
//    Developer @GA in DC -->

$(document).ready(function() {

// on doc ready, fade in homepage
$("#homepage").fadeIn(3000);
console.log("page fade in");

// Codepen hover color change using ANIMATE method with plug-in script on index.html
$("#codeItem").hover(function() {
  $("#codepen").animate({backgroundColor:"hsla(360, 100%, 100%, 0.33)"}, "slow");
    }, function() {
      $("#codepen").animate({backgroundColor:"hsla(360, 100%, 100%, 0);"}, "slow");
        console.log("hovered Codepen");
});

// nav hover color change using CSS method
$("nav ul li a").hover(function() {
  $(this).css({"background-color":"white", "color":"hsla(11, 100%, 4%, 1)", "font-weight":"bold"});
    }, function() {
      $(this).css({"background-color":"hsla(11, 100%, 4%, 1)", "color":"white", "font-weight":"normal"});
        console.log("nav hover");
});

// .hamburger hover color change
$(".hamburger, .homepageHamburger").hover(function() {
  $(this).css({"background-color":"white", "color":"hsla(11, 100%, 4%, 1)", "font-weight":"bold", "border-color":"hsla(11, 100%, 4%, 1)"});
    }, function() {
      $(this).css({"background-color":"hsla(360, 100%, 100%, 0)", "color":"white", "font-weight":"normal", "border-color":"white"});
});

// hamburger dropdown toggle
var hamburgerToggle = 0;
$(".hamburger, .homepageHamburger").click(function() {
  if (hamburgerToggle == 0) {
    $("nav").animate({width: "250px"}, 500);
    hamburgerToggle = 1;
  } else if (hamburgerToggle == 1) {
    $("nav").animate({width: "0"}, 500);
    hamburgerToggle = 0;
  };
});

//box-shadow: inset 0 0 20px hsla(11, 100%, 4%, 1);
$(".shopItem").hover(function() {
  $(this).find("a").toggleClass("shopItemToggled");
    console.log("shopItem box-shadow, toggleClass");
});
$(".shopItem a").click(function() {
  event.preventDefault();
  console.log("shopItem clicked");
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
  $(hrefName).fadeIn(2000);
}); // end page toggle

}); //close document.ready