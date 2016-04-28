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
		this.magicNumber = Math.floor(Math.random() * (120 - 19) + 19);
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
	//don't need this due to Sean's miracle new object var <333
	//reset score to 0;
	//restart: function() {
		//sumOfClicks = 0;
		//magicNumber = 0;
		//$("replay").addClass("visibility: visible");
	//}


};

var game = shinyThings;

game.getMagicNumber();
console.log(game.magicNumber); //only console.logging zero but the crystals return random 
			//var b = $('<button>').addClass("crystal").data("let", letters[i]).text(letters[i])

game.getCrystalNumber();
console.log(game.purple.num);
console.log(game.pink.num);			

//display wins and losses

	$("#blue").click(function() {
			this.sumOfClicks += this.blue.num;
			$("#sumOfClicks").html(this.sumOfClicks);
			console.log(this.sumOfClicks);
		});
	$(".purple").click(function() {
			this.sumOfClicks += this.purple.num;
			$("#sumOfClicks").html(this.sumOfClicks);
			console.log(this.sumOfClicks);

		});
	$("#black").click(function() {
			this.sumOfClicks += this.black.num;
			$("#sumOfClicks").html(this.sumOfClicks);
			console.log(this.sumOfClicks);
		});
	$("#pink").click(function() {
			this.sumOfClicks += this.blue.num;
			$("#sumOfClicks").html(this.sumOfClicks);
			console.log(this.sumOfClicks);
		});
	
}
while(game.sumOfClicks < game.magicNumber);

if(game.sumOfClicks == game.magicNumber) {
	$(".winner").html("You win!!!!!");
	game.wins++;
	$("#wins").html(game.wins);
	$("replay").addClass("visibility: visible");
}

if(game.sumOfClicks > game.magicNumber) {
	$(".winner").html("You lose!");
	game.losses++;
	$("#losses").html(game.losses);
	$("replay").addClass("visibility: visible");
}

	//on click for each crystal image adds points to total

	//exceed random number ==> lose

//restart

//reset score to 0;
$(".replay").on("click", function() {
	game == null;
	$("replay").addClass("visibility: hidden");
})


