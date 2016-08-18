//
//    Project Name: jQuery Animations
//    Client: FEWD25, Final Project
//    Author: Andy Aronoff
//    Developer @GA in DC -->

$(document).ready(function() {


// codepen WORKS: http://codepen.io/andyaro3/pen/oLOXWO

//// background color doesnt work
// $("#codepen").hover(function() {
//   $("#codepen").animate({ backgroundColor: "red" }, 300);
//   console.log("hover in, red");
// }, function() {
//   $("#codepen").animate({ backgroundColor: "white" }, 300);
//   console.log("hover out, white");
// }); 

//// background color doesnt work
$("#codepen").hover(function() {
  $("#codepen").animate({ "background-color": "red" }, 300);
  console.log("hover in, red");
}, function() {
  $("#codepen").animate({ "background-color": "white" }, 300);
  console.log("hover out, white");
}); 

//// width DOES work
// $("#codepen").hover(function() {
//   $("#codepen").animate({ width: "50%" }, 300);
//   console.log("hover in, 50%");
// }, function() {
//   $("#codepen").animate({ width: "150px" }, 300);
//   console.log("hover out, 150px");
// }); 


}); //close document.ready