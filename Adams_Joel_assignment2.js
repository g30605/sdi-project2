/*
Author: Joel E. Adams
Date: 14 August 2013
SDI Project 2
*/

//Local Variables
var dudeName = "Ben";
var weapons = [ "Rifle", "Shotgun", "Shovel" ];
var rifleBullets = 60,
	shotgunShells = 45;
var flaresAndFood = [ "Flare", "Canned Food" ];

//Functions
var findBreakfast = function(groceryStore, shoppingZombies, food) {
	console.log(dudeName +
				" sneaks past " +
				shoppingZombies +
				" zombies to get into " +
				groceryStore +
				" to search for some breakfast.");
	if (food > 0) {
		console.log(dudeName +
					" finds himself some beans and devours them")
	} else {
		console.log(dudeName +
					" finds no food.")
	};
	console.log(dudeName +
				" sneaks back out of " +
				groceryStore +
				" past the zombies and starts the rest of his day.");
};
//Procedure
var zombieGroup = function(numberOfBullets, numberOfZombies) {
	if (numberOfBullets >= numberOfZombies) {
		console.log(dudeName +
					" pulls out his rifle and proceeds to shoot all " +
					numberOfZombies +
					" zombies in the head."
		)
	} else {
		console.log(dudename +
					"carefully avoids the " +
					numberOfZombies +
					"zombies."
		);
	};
	return numberOfBullets,
		numberOfZombies;
};
//Boolean
var zombieRoadBlock = function(numberOfZombies) {
	while (numberOfZombies && shotgunShells >= 0) {
		console.log(numberOfZombies + 
					" zombies left and " + 
					shotgunShells +
					" shells left!"
		);
		numberOfZombies-=10;
		shotgunShells-=2; 
	};
	return numberOfZombies;
};
//Number
var otherSurvivors = function(survivor1, survivor2) {
	console.log("As the two people get closer, " +
				dudeName +
				" tenses up and prepares to use his " +
				weapons[2] +
				" in case they try to rob him."
	);
	console.log("The two survivors notice his tension and put their hands up to show " +
				"that they mean no harm."
	);
	console.log("The couple is now close enough that " +
				dudeName +
				" can tell that one is a man and the other a woman, " +
				"both similar in appearance and age."
	);
	console.log("Finally they get to him and introduce themselves as " +
				survivor1 +
				" and " +
				survivor2 +
				".  They are brother and sister and are looking for rescue."
	);
	console.log(dudeName +
				"asks them if they would like to join him to travel as a group, " +
				'they reply with a quick but thankful "Yes!"'
	);
	return survivor1;
	return survivor2;
};
