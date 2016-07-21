// Project Name: FEWD Week 5, Intro to Programming
// Client: Relaxr
// Author: Andy Aronoff
// Developer @GA in DC

$(document).ready(function() {	


$("a").click(function(event) {
	event.preventDefault();
});

$("p.readmore").click(function() {
	$("p.readmore").hide();
	$("#show-this-on-click").slideDown(500, 
		function() {
			$("p.readless").show();
	});	
});	

$("p.readless").click(function() {
	$("p.readless").hide();
	$("#show-this-on-click").slideUp(500, 
		function() {
			$("p.readmore").show();
	});
});

$("a.learnmore").click(function() {
	$("a.learnmore").hide();
	$("#learnmoretext").slideDown(500);
});

$("#learnmoretext").click(function() {
	$("#learnmoretext").slideUp(500,
	function () {
		$("a.learnmore").show();
	});
});


}); //closing out READY