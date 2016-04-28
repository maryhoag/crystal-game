//declare objects crystal, image, random number
var shinyThings = {
	magicNumber: 0,
	wins: 0,
	losses: 0,
	sumOfClicks: 0,
	crystals: {[ 
		purple: [ {id: 'purple', num: 0}, ]
		blue {id: "blue", num: 0},
		black {id: "black", num: 0},
		pink {id: "pink", num: 0},
	]},


	//choose random number and display
	getMagicNumber: function() {
		magicNumber = Math.random() * (120 - 19) + 19;

	}

	//function getRandomArbitrary(min, max) {
    //return Math.random() * (max - min) + min;
	//}
	var getCrystalNumber = function() {
		for(var i = 0; i < shinyThings.length)
		//Math.floor ??
		Math.random() * (12 -1) + 1;
	}
	//restart

	//reset score to 0;
	restart: function {
		sumOfClicks = 0;
		magicNumber = 0;
		$("replay").addClass("visibility: visible");
	}


};

var game = shinyThings;
$("#")
	var game = shinyThings;
	for (var i = 0; i < game.crystals.length; i++) {
			//var b = $('<button>').addClass("crystal").data("let", letters[i]).text(letters[i])

//display wins and losses

	//on click for each crystal image adds points to total

	//exceed random number ==> lose

//restart

//reset score to 0;


