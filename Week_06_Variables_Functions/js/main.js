// Project Name: Week_06, Practical_JS, Homework
// Client: CitiPix
// Author: Andy Aronoff
// Developer @GA in DC

// Concepting: "pseudocode"
// #submit-btn on click, if, else if, else if...
// input type or form == city name
//    val(), return
// add class on body
// reload/event stop

$(document).ready(function() {

// approved by John - not required to use a variable, "var city"

function resetInputType() {
	$("input:text").css({
    		"background-color":"#fff",
    		"color":"#6b6b6c",
    		"font-style":"normal",
    	});
	$("body").removeClass("nyc");
	$("body").removeClass("sf");
	$("body").removeClass("la");
	$("body").removeClass("austin");
	$("body").removeClass("sydney");
	$("input:text").val(""); // bonus: reset user input field
	$("input:text").attr("placeholder", "Enter another city...");
};

$("#submit-btn").click(function() {
	if ($("input:text").val().trim().toLowerCase() == "nyc" || $("input:text").val().trim().toLowerCase() == "new york city" || $("input:text").val().trim().toLowerCase() == "ny" || $("input:text").val().trim().toLowerCase() == "new york") {
		resetInputType();
    	$("body").addClass("nyc");
    	console.log(".nyc class background on body");
	} else if ($("input:text").val().trim().toLowerCase() == "sf" || $("input:text").val().trim().toLowerCase() == "san francisco" || $("input:text").val().trim().toLowerCase() == "bay area") { 
    	resetInputType();
    	$("body").addClass("sf");
    	console.log(".sf class background on body");
	} else if ($("input:text").val().trim().toLowerCase() == "la" || $("input:text").val().trim().toLowerCase() == "lax") { 
    	resetInputType();
    	$("body").addClass("la");
    	console.log(".la class background on body");
    } else if ($("input:text").val().trim().toLowerCase() == "austin" || $("input:text").val().trim().toLowerCase() == "atx") { 
    	resetInputType();
    	$("body").addClass("austin");
    	console.log(".austin class background on body");
    } else if ($("input:text").val().trim().toLowerCase() == "sydney" || $("input:text").val().trim().toLowerCase() == "syd") { 
    	resetInputType();
    	$("body").addClass("sydney");
    	console.log(".sydney class background on body");
    } else {
    	$("input:text").css({
    		"background-color":"pink",
    		"color":"red",
    	});
    	$("input:text").val("Value not found. Try again.");
    	console.log("no match");
    	$("input:text").css("font-style", "italic");
    };
	event.preventDefault();
});

// created reset function resetInputType() to allow for forward and backward results from if else statements
// trim(). to remove leading and ending spaces
// to LowerCase(). to make any case used in field functional
// created an else{} for errors

}); //close document.ready