$(document).ready(function() {

// Project Name: Final Project, Main_mobilefirst
// Client: FEWD25
// Author: Andy Aronoff
// Developer @GA in DC

// anchor animate, #showCode slideToggle, #menuLink slideToggle
var hrefFull;
var hrefName;
var hrefCodeToggle = 0;
var menuToggle = 0;
var htmlPageCode =  $("html").html();
// var cssPageCode =  $("css").html();
//// doesn't work for the above: http://stackoverflow.com/questions/9180184/access-css-file-contents-via-javascript
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

// close #showCode div
$("#showCode div a").click(function() {
  event.preventDefault();
  $("#showCode").slideUp(400);
  hrefCodeToggle = 0;
});

// hide #dropdownMenu ul on window resize if showing
$(window).resize(function() {
  // This will fire each time the window is resized:

  if ($(window).width() >= 741) { // strange window size?
    // if large enough, hide
    $("#dropdownMenu").hide();
    menuToggle = 0;
  } else if ($(window).width() < 741 && menuToggle == 1) {
    // if menu opened and smaller window, keep open
    $("#dropdownMenu").show();
    menuToggle = 1;
  } else {
    // outlier cases
    $("#dropdownMenu").hide();
    menuToggle = 0;
  };
});


}); //close document.ready