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