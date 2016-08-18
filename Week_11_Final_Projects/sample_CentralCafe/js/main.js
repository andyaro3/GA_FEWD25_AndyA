//
//  Project Name: Sample Business Site, Central Café
//    Client: FEWD25, Final Project
//    Author: Andy Aronoff
//    Developer @GA in DC -->

$(document).ready(function() {

// on doc ready, fade in homepage
$("#homepage").fadeIn(3000);

// Codepen hover color change
// $('#codeItem').hover(function() {
//   $('#codepen').animate({color:'red', backgroundColor:'hsla(360, 100%, 100%, 0.33)'}, 'slow');
// }, function() {
//   $('#codepen').animate({color:'white', backgroundColor:'hsla(11, 100%, 4%, 1)'}, 'slow');
//   console.log('hovered Codepen');
// });
// example1 works for width, but not color...
$("#codeItem").hover(function(){
    $("#codepen").animate({ width: "700px" }, "slow");
}, function() {
    $("#codepen").animate({ width: "100px" }, "slow");
});
// exact same as code above but doesn't change color...
$("#codeItem").hover(function(){
    $("#codepen").animate({ backgroundColor: "red" });
}, function() {
    $("#codepen").animate({ backgroundColor: "transparent" });
}); 
// another example | https://api.jqueryui.com/color-animation/
$( "#codeItem" ).hover(function() {
  $( "#codepen" ).animate({
    color: "green",
    backgroundColor: "rgb( 20, 20, 20 )"
  });
});


// nav hover color change -- WORKING :)
$("nav ul li a").hover(function() {
  $(this).css({"background-color":"white", "color":"hsla(11, 100%, 4%, 1)", "font-weight":"bold"});
    }, function() {
      $(this).css({"background-color":"hsla(11, 100%, 4%, 1)", "color":"white", "font-weight":"normal"});
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