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

	loop: function() {
		$("#blue").click(function() {
			game.sumOfClicks += game.blue.num;
			$("#sumOfClicks").html(game.sumOfClicks);
			console.log(game.sumOfClicks);
		});
		$(".purple").click(function() {
			game.sumOfClicks += game.purple.num;
			$("#sumOfClicks").html(game.sumOfClicks);
			console.log(game.sumOfClicks);

		});
		$("#black").click(function() {
			game.sumOfClicks += game.black.num;
			$("#sumOfClicks").html(game.sumOfClicks);
			console.log(game.sumOfClicks);
		});
		$("#pink").click(function() {
			game.sumOfClicks += game.blue.num;
			$("#sumOfClicks").html(game.sumOfClicks);
			console.log(game.sumOfClicks);
		});
	},

		winner: function() {
			$(".btn").prop("disabled", true);
			$(".winner").html("You win!!!!!");
			game.wins++;
			$("#wins").html(game.wins);
			$("replay").addClass("visibility: visible");
		},

		loser: function() {
			$(".btn").prop("disabled", true);			
			$(".winner").html("You lose!");
			game.losses++;
			$("#losses").html(game.losses);
			$("replay").addClass("visibility: visible")
		}


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
console.log(game.magicNumber); //only console.logging zero but the crystals return random FIXED!
			//var b = $('<button>').addClass("crystal").data("let", letters[i]).text(letters[i])

game.getCrystalNumber();
console.log(game.purple.num);
console.log(game.pink.num);			

//display wins and losses

//this isn't working although the magicNumber logs out fine after it's created
if(game.sumOfClicks == game.magicNumber) {
	game.winner();
	console.log("winner");
}

else if(game.sumOfClicks > game.magicNumber) {
	game.loser();
	console.log("loser");
} 

else if(game.sumOfClicks < game.magicNumber) {
	game.loop();
}

	//on click for each crystal image adds points to total

	//exceed random number ==> lose

//restart

//reset score to 0;
$(".replay").on("click", function() {
	game == shinyThings;
	$("replay").addClass("visibility: hidden");
})


