$(document).ready(function() {

// Project Name: Final Project, Main_mobilefirst
// Client: FEWD25
// Author: Andy Aronoff
// Developer @GA in DC

// // scrollBottom ftn, http://stackoverflow.com/questions/4655273/jquery-window-scrolltop-but-no-window-scrollbottom
// $.fn.scrollBottom = function(scroll){
//   if(typeof scroll === 'number'){
//     window.scrollTo(0,$(document).height() - $(window).height() - scroll);
//     return $(document).height() - $(window).height() - scroll;
//   } else {
//     return $(document).height() - $(window).height() - $(window).scrollTop();
//   }
// };

// anchor animate, #showCode slideToggle, #menuLink slideToggle
var hrefFull;
var hrefName;
var hrefCodeToggle = 0;
var menuToggle = 0;
var htmlPageCode =  $("html").html();
// var cssPageCode =  $("css").html();
// var jsPageCode =  $("js").html();

$("nav ul li a").click(function() {
  event.preventDefault();
  hrefFull = event.target.href; // gets the full URL for the anchor clicked in the menu
  hrefName = hrefFull.substr(hrefFull.indexOf("#") + 0); // strips full URL down to just anchor/id

  // #showCode slideToggle
  if (hrefName == "#showCode" && hrefCodeToggle == 0) {
    $("#showCode").slideDown(400);
    hrefCodeToggle = 1;
    $("#htmlCode").text(htmlPageCode); // pull/show HTML code for page
    // $("#cssCode").text(cssPageCode); // pull/show CSS code? doc
    // $("#jsCode").text(jsPageCode); // pull/show JS code? doc
  } else if (hrefName == "#showCode" && hrefCodeToggle == 1) {
    $("#showCode").slideUp(400);
    hrefCodeToggle = 0;

  // #menuLink slideToggle
  } else if (hrefName == "#menuLink" && menuToggle == 0) {
    $("#dropdownMenu").slideDown(400);
    menuToggle = 1;  
  } else if (hrefName == "#menuLink" && menuToggle == 1) {
    $("#dropdownMenu").slideUp(400);
    menuToggle = 0;

  // anchor animate for full nav
  } else if (hrefName == "#contactLink") {
    //attempt 1 - scrolls past bottom of document, takes time to scroll back in
    $("html, body").animate({
        scrollTop: document.body.scrollHeight // scrolls the whole distance of the document
      }, 2000);
    $("#dropdownMenu").slideUp(400);
    console.log("#dropdownMenu #contactLink");
    menuToggle = 0;
  } else {
    $("html, body").animate({
        scrollTop: $(hrefName).offset().top // calculates difference and goes there on the page
      }, 1000);
    $("#dropdownMenu").slideUp(400);
    menuToggle = 0;
  };
}); // #showCode slideToggle, #menuLink slideToggle

$("#dropdownMenu a").click(function() {
  event.preventDefault();
  hrefFull = event.target.href;
  hrefName = hrefFull.substr(hrefFull.indexOf("#") + 0);

  if (hrefName == "#contactLink") {
    //attempt 1 - scrolls past bottom of document, takes time to scroll back in
    $("html, body").animate({
        scrollTop: document.body.scrollHeight // scrolls the whole distance of the document
      }, 2000);
    $("#dropdownMenu").slideUp(400);
    console.log("#dropdownMenu #contactLink");
    menuToggle = 0;
  } else {
    $("html, body").animate({
        scrollTop: $(hrefName).offset().top // calculates difference and goes there on the page
      }, 1000);
    $("#dropdownMenu").slideUp(400);
    menuToggle = 0;
  };
}); // end anchor animate


// hide #showCode div on window resize if showing
// $(window).resize(function() {
//   // This will fire each time the window is resized:
//   if ($(window).width() >= 760 && hrefCode == 0) {
//     // if large enough and not opened
//     $("showCode").hide();
//     hrefCode = 0;
//   } else if ($(window).width() >= 760 && hrefCode == 1) {
//     // if large enough window and opened
//     $("showCode").show();
//     hrefCode = 1;
//   } else {
//     // if smaller
//     $("#showCode").hide();
//     hrefCode = 0;
//   };
// });

// close #showCode div
$("#showCode a").click(function() {
  event.preventDefault();
  $("#showCode").slideUp(400);
  hrefCodeToggle = 0;
});

// hide #dropdownMenu ul on window resize if showing
$(window).resize(function() {
  // This will fire each time the window is resized:
  if ($(window).width() >= 760 && menuToggle == 0) {
    // if large enough and not opened, keep closed
    $("#dropdownMenu").hide();
    menuToggle = 0;
  } else if ($(window).width() >= 760 && menuToggle == 1) {
    // if large enough window and opened, keep open
    $("#dropdownMenu").show();
    menuToggle = 1;
  } else {
    // if smaller and opened, close
    $("#dropdownMenu").hide();
    menuToggle = 0;
  };
});


}); //close document.ready