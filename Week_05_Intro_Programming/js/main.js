// Project Name: FEWD Week 5, Intro to Programming
// Client: Relaxr
// Author: Andy Aronoff
// Developer @GA in DC

// You crushed this assignment! Such a great job; your code is clean and logical, and you found a sleek way to prevent the page reload by selecting the links on the page and preventing the default action without having to repeat the event.preventDefault() code a bunch of times. This is the goal of every good programmer; to write less code!
// My only thought would be to try using named functions and callbacks next time, just to see if you prefer it. It's my preference to use a callback because I think it makes the code more readable and it is much better for testing purposes--if you use anonymous functions, you can't call them again once the page loads. Also, if you ever want to perform the same action in multiple places (lets say you have a bunch of links that you want the slideDown function applied) you could define a slideDown function and call it everywhere you add a click event.

$(document).ready(function() {

	$("a").click(function(event) {
		event.preventDefault();

		// This is a really cool way to implement the prevent default! Usually people have been putting the prevent default inside of each of the click functions, but you found a way to do it with less code; way to go!
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
		function() {
			$("a.learnmore").show();
		});
	});
	// Way to go above and beyond adding the slideUp function as well!  Seriously, well done.

}); //closing out READY
