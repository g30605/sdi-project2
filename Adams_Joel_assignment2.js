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
//String
var getRescued = function() {
	var flare = flaresAndFood[0],
		food = flaresAndFood[1];
	console.log("Launching the first "+
				flare +
				"!!!"
	);
	for (var flare = 10, food = 30; flare && food >= 0; flare--, food-=3) {
		console.log("Flare up! There are " +
					flare +
					" flares left and "+
					food +
					" cans of food left!");
	};
	console.log("On the last day that they could have stayed on that building the trio heard a " +
				"loud whirring noise. It was the helicopter coming back to save them!"
	);
	return flare;
	return food;
};


//Story
console.log(dudeName + " is one of the last surviving humans on earth." +
			"  Every morning when he gets up he tries to find breakfast" +
			" nearby before going zombie hunting."
);
findBreakfast("Fry's", 10, 1);
console.log("While wandering around the deserted city of Winter Park, " +
			dudeName +
			" comes across a group of zombies."
);
zombieGroup(65, 20);
console.log("He then returns to his aimless treck through the deserted city.");
console.log("Not long after his first zombie encouner, " +
			dudeName +
			" finds himself stopped by essentially a barricade of unavoidable living dead."
);
console.log("Unable to run anywhere, " +
				dudeName +
				", pulls out his trusty " +
				weapons[1] +
				" and starts shooting at the writhing mass of undead"
		);
zombieRoadBlock(90);
console.log("After the massacring of the zombie blockade, " +
			dudeName +
			" sees two actual people walking down the street towards him." + 
			"  Cautiously he approaches them."
);
otherSurvivors("Danielle", "Anthony");
console.log("As the trio moves through the city they hear the sound of a helicopter nearby.  " +
			"They walk carefully but quickly through the city in search for where it could be " +
			"and manage to catch a glimpse of it as it lifts off from a roof and leaves the area."
);
console.log("Even though it was gone, they all had hope for rescue. " +
			"They entered a tall building near them so that they could try to flag down the next " +
			"chopper to fly by.  Lucky for them on the way up they found not only food but also " +
			"flares."
);
console.log("They decide that they should launch one flare a day.  " + 
			"They also decide that since there are 10 flares and 30 cans of food, " + 
			"that they should also only eat one can of food each per day."
);
getRescued();
console.log("The helicopter picked them up off the top of that building and carried them away to " +
			"the last know zombie free place in the world, Alaska."
);