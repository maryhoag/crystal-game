//declare objects crystal, image, random number
var shinyThings = {
	magicNumber: 0,
	wins: 0,
	losses: 0,
	sumOfClicks: 0,
	purple: {id: 'purple', num: 0},
	blue: {id: "blue", num: 0},
	black: {id: "black", num: 0},
	pink: {id: "pink", num: 0},


	//choose random number and display
	getMagicNumber: function() {
		magicNumber = Math.floor(Math.random() * (120 - 19) + 19);
		return magicNumber;
	},

	//function getRandomArbitrary(min, max) {
    //return Math.random() * (max - min) + min;
	//}
	getCrystalNumber: function() {
		//Math.floor ??
		this.purple.num = Math.floor(Math.random() * (12 -1) + 1);
		this.blue.num = Math.floor(Math.random() * (12 - 1) + 1);
		this.black.num = Math.floor(Math.random() * (12-1) + 1);
		this.pink.num = Math.floor(Math.random() * (12 - 1) + 1);
	},
	//restart

	//reset score to 0;
	restart: function() {
		sumOfClicks = 0;
		magicNumber = 0;
		$("replay").addClass("visibility: visible");
	}


};

var game = shinyThings;

game.getMagicNumber();
console.log(game.magicNumber); //only console.logging zero but the crystals return random 
			//var b = $('<button>').addClass("crystal").data("let", letters[i]).text(letters[i])

game.getCrystalNumber();
console.log(game.purple.num);			

//display wins and losses
while(game.sumOfClicks < game.magicNumber) {
	$(".image").on("click", function() {
		if(image.id == "pink") {
			game.sumOfClicks += game.pink.num;
			$("#sumOfClicks").html(game.sumOfClicks);
		}
		if(image.id == "purple") {
			game.sumOfClicks += game.purple.num;
			$("#sumOfClicks").html(game.sumOfClicks);
		}
	})
}

	//on click for each crystal image adds points to total

	//exceed random number ==> lose

//restart

//reset score to 0;


