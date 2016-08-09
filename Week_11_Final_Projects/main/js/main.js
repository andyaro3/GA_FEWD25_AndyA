$(document).ready(function() {

// Project Name: Final Project, Main
// Client: FEWD25
// Author: Andy Aronoff
// Developer @GA in DC

// scrollBottom ftn, http://stackoverflow.com/questions/4655273/jquery-window-scrolltop-but-no-window-scrollbottom
$.fn.scrollBottom = function(scroll){
  if(typeof scroll === 'number'){
    window.scrollTo(0,$(document).height() - $(window).height() - scroll);
    return $(document).height() - $(window).height() - scroll;
  } else {
    return $(document).height() - $(window).height() - $(window).scrollTop();
  }
};

// anchor animate, showCode slideToggle
var hrefFull;
var hrefName;
var hrefCode = 0;
var htmlPageCode =  $("html").html();
var cssPageCode =  $("css").html();
var jsPageCode =  $("js").html();

$("nav ul li a").click(function() {
  event.preventDefault();
  hrefFull = event.target.href;
  console.log(hrefFull);
  hrefName = hrefFull.substr(hrefFull.indexOf("#") + 0);
  console.log(hrefName);

  // #showCode slideToggle
  if (hrefName == "#showCode" && hrefCode == 0) {
    $("#showCode").slideDown(400);
    hrefCode = 1;
    console.log(htmlPageCode);
    $("#htmlCode").text(htmlPageCode);
    console.log(cssPageCode);
    $("#cssCode").text(cssPageCode);
    console.log(jsPageCode);
    $("#jsCode").text(jsPageCode);
  } else if (hrefName == "#showCode" && hrefCode == 1) {
    $("#showCode").slideUp(400);
    hrefCode = 0;
  // scroll to bottom
  } else if (hrefName == "#contactLink") {
    //attempt 1 - scrolls past bottom of document, takes time to scroll back in
    $("html, body").animate({
        scrollTop: document.body.scrollHeight
      }, 2000);
    // scrollHeight = 0; // document.body.scrollHeight;
    // console.log(scrollHeight);
  // all other scroll
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