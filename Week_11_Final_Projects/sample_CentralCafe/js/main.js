//
//  Project Name: Sample Business Site, Central Café
//    Client: FEWD25, Final Project
//    Author: Andy Aronoff
//    Developer @GA in DC -->

$(document).ready(function() {

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
  //show page clicked
  $(hrefName).show();
}); // end page toggle

}); //close document.ready