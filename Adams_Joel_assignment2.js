
var crewName= "Wesley";
var DaysSailing= 8;
var decks=["Bridge", "Gun deck", "Main deck", "Quarterdeck" ];
var decksRemaining = decks.length;

document.writeln("CREW MEMBER NAME:" + crewName );
document.writeln("<br/>");

document.writeln("NUMBER OF DAYS SAILING:" + DaysSailing);
document.writeln("<br/>");

document.writeln("DECKS REMAINING TO SWAB:" + decksRemaining);
document.writeln("<br/>");
var i=0;

function Swab()
{
		

	if(decksRemaining > 0)
	{
		document.writeln("KEEP SWABBING THE DECK AS"+ "<\t>" +decks[i] +" IS REMAINING");
		document.writeln("<br/>");
		decksRemaining--;
		i++;
		return "Yes";	

	}
	else 
		return "NO";
	
}
var swabTheDecks = Swab();
var swabTheDecks = Swab();
var swabTheDecks = Swab();
var swabTheDecks = Swab();
var swabTheDecks = Swab();

document.writeln(" ARE DECKS REMAINING TO SWAB:" + swabTheDecks);
document.writeln("<br/>");
for (var deckNumber = 0; deckNumber < decks.length; deckNumber++)
{
	if (window.console) 
{
    console.log("SWAB THE DECK")
    }
}

function complaint(person,rant)
{
 return "Get back to work, " + crewName;
}
var complainTo = complaint("Anyone","PLEASE");
document.writeln("WHENEVER THE CREW COMPLAINTS HE GETS THE REPLY");
document.writeln("<br/>");
document.write(complainTo + "!");
document.writeln("<br/>");
document.write("SO HE WAS NOT AT ALL FEELING PIRATEY!");
document.writeln("<br/>");
document.write("MEANWHILE" + "<\t>" + crewName + " was thinking what would happen if NINJAS ATTACK DURING THE NIGHT");

