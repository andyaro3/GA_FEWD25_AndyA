$(document).ready(function() {

// Project Name: Final Project, Main
// Client: FEWD25
// Author: Andy Aronoff
// Developer @GA in DC


$("#contactLinkX").click(function(){
  $.scrollTo($("<footer>"), {
    duration: 600
  });
  return false;
});

$("#worksLinkX").click(function(){
  $.scrollTo($("html"), {
    duration: 600
  });
  return false;
});

$("#homeLinkX").click(function(){
  $.scrollTo($("html"), {
    duration: 600
  });
  return false;
});

}); //close document.ready