// Task Data (Last updated: March 28, 2023):
const monsters = {
  AbyssalDemons:{ KeyRate: "79",    XP: "150",  AverageLength: "100",   ExtendedLength: "225",  SuperiorXP: "4200" },
  Ankou:        { KeyRate: "82",    XP: "100",  AverageLength: "100",   ExtendedLength: "120.5",SuperiorXP: "0" },
  Aviansies:    { KeyRate: "136",   XP: "70",   AverageLength: "100",   ExtendedLength: "225",  SuperiorXP: "0" },
  Bandits:      { KeyRate: "1109",  XP: "29",   AverageLength: "100",   ExtendedLength: "0",    SuperiorXP: "0" },
  Bears:        { KeyRate: "1144",  XP: "27",   AverageLength: "82.5",  ExtendedLength: "0",    SuperiorXP: "0" },
  BlackDemons:  { KeyRate: "68",    XP: "200",  AverageLength: "125",   ExtendedLength: "225",  SuperiorXP: "0" },
  BlackDragons: { KeyRate: "59",    XP: "262",  AverageLength: "12",    ExtendedLength: "0",    SuperiorXP: "0" },
  BlackKnights: { KeyRate: "762",   XP: "42",   AverageLength: "100",   ExtendedLength: "0",    SuperiorXP: "0" },
  Bloodveld:    { KeyRate: "79",    XP: "134",  AverageLength: "90",    ExtendedLength: "225",  SuperiorXP: "0" },
  CDruids:      { KeyRate: "1446",  XP: "20",   AverageLength: "70",    ExtendedLength: "0",    SuperiorXP: "0" },
  ElderCDruids: { KeyRate: "90",    XP: "150",  AverageLength: "70",    ExtendedLength: "0",    SuperiorXP: "0" },
  DarkWarriors: { KeyRate: "1655",  XP: "17",   AverageLength: "100",   ExtendedLength: "0",    SuperiorXP: "0" },
  DustDevils:   { KeyRate: "83",    XP: "105",  AverageLength: "100",   ExtendedLength: "225",  SuperiorXP: "3000" },
  EarthWarriors:{ KeyRate: "352",   XP: "54",   AverageLength: "100",   ExtendedLength: "0",    SuperiorXP: "0" },
  Ents:         { KeyRate: "0",     XP: "107.5",AverageLength: "47.5",  ExtendedLength: "0",    SuperiorXP: "0" },
  FireGiants:   { KeyRate: "98",    XP: "111",  AverageLength: "100",   ExtendedLength: "0",    SuperiorXP: "0" },
  GreaterDemons:{ KeyRate: "81",    XP: "120",  AverageLength: "125",   ExtendedLength: "225",  SuperiorXP: "0" },
  GreenDragons: { KeyRate: "84",    XP: "100",  AverageLength: "82.5",  ExtendedLength: "0",    SuperiorXP: "0" },
  Hellhounds:   { KeyRate: "76",    XP: "150",  AverageLength: "100",   ExtendedLength: "0",    SuperiorXP: "0" },
  HillGiants:   { KeyRate: "911",   XP: "35",   AverageLength: "100",   ExtendedLength: "0",    SuperiorXP: "0" },
  IceGiants:    { KeyRate: "130",   XP: "100",  AverageLength: "125",   ExtendedLength: "0",    SuperiorXP: "0" },
  IceWarriors:  { KeyRate: "258",   XP: "59",   AverageLength: "125",   ExtendedLength: "0",    SuperiorXP: "0" },
  Jellies:      { KeyRate: "87",    XP: "75",   AverageLength: "125",   ExtendedLength: "0",    SuperiorXP: "1900" },
  LavaDragons:  { KeyRate: "67",    XP: "248",  AverageLength: "47.5",  ExtendedLength: "0",    SuperiorXP: "0" },
  LesserDemons: { KeyRate: "83",    XP: "110",  AverageLength: "100",   ExtendedLength: "0",    SuperiorXP: "0" },
  MagicAxes:    { KeyRate: "533",   XP: "44",   AverageLength: "100",   ExtendedLength: "0",    SuperiorXP: "0" },
  Mammoths:     { KeyRate: "100",   XP: "130",  AverageLength: "100",   ExtendedLength: "0",    SuperiorXP: "0" },
  MossGiants:   { KeyRate: "533",   XP: "60",   AverageLength: "125",   ExtendedLength: "0",    SuperiorXP: "0" },
  Nechryaels:   { KeyRate: "66",    XP: "210",  AverageLength: "100",   ExtendedLength: "225",  SuperiorXP: "3280" },
  Pirates:      { KeyRate: "304",   XP: "20",   AverageLength: "68.5",  ExtendedLength: "0",    SuperiorXP: "0" },
  RevDarkBeasts:{ KeyRate: "91",    XP: "157",  AverageLength: "70",    ExtendedLength: "0",    SuperiorXP: "0" },
  RevKnights:   { KeyRate: "90",    XP: "168",  AverageLength: "70",    ExtendedLength: "0",    SuperiorXP: "0" },
  RevOrks:      { KeyRate: "94",    XP: "115",  AverageLength: "70",    ExtendedLength: "0",    SuperiorXP: "0" },
  RevQuadSpot:  { KeyRate: "96.5",  XP: "102.5",AverageLength: "70",    ExtendedLength: "0",    SuperiorXP: "0" },
  Rogues:       { KeyRate: "1367",  XP: "17",   AverageLength: "100",   ExtendedLength: "0",    SuperiorXP: "0" },
  Scorpions:    { KeyRate: "1367",  XP: "2",    AverageLength: "82.5",  ExtendedLength: "0",    SuperiorXP: "0" },
  Skeletons:    { KeyRate: "1144",  XP: "29",   AverageLength: "82.5",  ExtendedLength: "0",    SuperiorXP: "0" },
  Spiders:      { KeyRate: "1972",  XP: "2",    AverageLength: "82.5",  ExtendedLength: "0",    SuperiorXP: "0" },
  SpMages:      { KeyRate: "72",    XP: "85.25",AverageLength: "125",   ExtendedLength: "215.5",SuperiorXP: "0" },
  Zombies:      { KeyRate: "1146.5",XP: "27",   AverageLength: "100",   ExtendedLength: "0",    SuperiorXP: "0" }
};

function calc() {
    // Make background visible
    document.getElementById("results1").style.background = "#F9F3EB";
    document.getElementById("results2").style.background = "#F9F3EB";

    // Get data from form
    var monster             = document.getElementById("monster").value; // Get monster name from HTML form
    var monsterObject       = monsters[monster]; // Get monster object from JS array
    var killCount           = parseInt(document.getElementById("killCount").value);
    
    // Get time data; autofill "0" if no time was entered
    if (isNaN(parseInt(document.getElementById("timeTakenMinutes").value)) == true) { 
        var timeTakenMinutes = 0;
    } else {
        var timeTakenMinutes = parseInt(document.getElementById("timeTakenMinutes").value);
    }
    if (isNaN(parseInt(document.getElementById("timeTakenSeconds").value)) == true) {
        var timeTakenSeconds = 0;
    } else {
        var timeTakenSeconds = parseInt(document.getElementById("timeTakenSeconds").value);
    }
    

    // Convert units for calculations
    var timeTaken           = (timeTakenMinutes * 60) + timeTakenSeconds;
    var killsPerHour        = (killCount / timeTaken) * 3600;
    var timeToKill          = (timeTaken / killCount);

    // Calculate various task lengths, format to time string (i.e; 12:54)
    var taskLength                      = formatTime((timeToKill * monsterObject["AverageLength"]));
    var taskLengthExpeditious           = formatTime((timeToKill * (monsterObject["AverageLength"] * 0.75)));
    var taskLengthSlaughter             = formatTime((timeToKill * (monsterObject["AverageLength"] * 1.333)));
    if (monsterObject["ExtendedLength"] != 0) {
        var taskLengthExtended              = formatTime((timeToKill * monsterObject["ExtendedLength"]));
        var taskLengthExtendedExpeditious   = formatTime((timeToKill * (monsterObject["ExtendedLength"] * 0.75)));
        var taskLengthExtendedSlaughter     = formatTime((timeToKill * (monsterObject["ExtendedLength"] * 1.333)));
    }

    // Calculate xp/hr, keys/hr, and superiors/hr
    if (monsterObject["SuperiorXP"] == "0") {
        var keysPerHour         = (killsPerHour / monsterObject["KeyRate"]);
        var xpPerHour           = (killsPerHour * monsterObject["XP"]);

        document.getElementById("superiorsResult").innerHTML = ""; 
    } else {
        var superiorsPerHour = (killsPerHour / 200);
        var keysPerHour = ((killsPerHour / monsterObject["KeyRate"]) + superiorsPerHour);
        var xpPerHour = ((killsPerHour * monsterObject["XP"]) + (superiorsPerHour * monsterObject["SuperiorXP"]));

        document.getElementById("superiorsResult").innerHTML = "<img src=\"images/superior.webp\"> Superiors/hr: <br>" + superiorsPerHour.toFixed(2);
    }

    // Update HTML page with results
    document.getElementById("keysResult").innerHTML = "<img src=\"images/favicon.ico\"> Larran's Keys/hr: <br>" + keysPerHour.toFixed(2);
    document.getElementById("xpResult").innerHTML = "<img src=\"images/xp.webp\"> XP/hr: <br>" + xpPerHour.toLocaleString();
    document.getElementById("speedResultExpeditious").innerHTML = "Average Task Length (<img src=\"images/expeditious.webp\">): <br>" + taskLengthExpeditious;
    document.getElementById("speedResult").innerHTML = "Average Task Length: <br>" + taskLength;
    document.getElementById("speedResultSlaughter").innerHTML = "Average Task Length (<img src=\"images/slaughter.webp\">): <br>" + taskLengthSlaughter;
    if (monsterObject["ExtendedLength"] == 0) {
        document.getElementById("speedResultExtendedExpeditious").innerHTML = "";
        document.getElementById("speedResultExtended").innerHTML = "";
        document.getElementById("speedResultExtendedSlaughter").innerHTML = "";
    } else {
        document.getElementById("speedResultExtendedExpeditious").innerHTML = "Average Task Length (<img src=\"images/extend.webp\"> + <img src=\"images/expeditious.webp\">): <br>" + taskLengthExtendedExpeditious;
        document.getElementById("speedResultExtended").innerHTML = "Average Task Length (<img src=\"images/extend.webp\">): <br>" + taskLengthExtended;
        document.getElementById("speedResultExtendedSlaughter").innerHTML = "Average Task Length (<img src=\"images/extend.webp\"> + <img src=\"images/slaughter.webp\">): <br>" + taskLengthExtendedSlaughter;
    }
}

// Formats time (in seconds) to a string with format "Hours:Minutes:Seconds".
function formatTime(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var seconds = Math.floor(seconds % 60);

    if (hours > 0) {
        return hours + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
    } else {
        return minutes + ":" + seconds.toString().padStart(2, "0");
    }
}

function about(){
    var aboutString = 
        "To use: <br><br>"
        +"1. Start a timer after getting assigned a slayer task, then stop the timer when you turn in your completed task.<br>"
        +"2. Fill in number of kills provided in the chat (this number accounts for exepeditious/slaughter bracelets!) in the \"Kill Count\" box, then write down the timer in the \"Task Time\" box.<br><br>"
        +"More Info: <br><br>"
        +"\"Average Task Time\" refers to the amount of time it would take to complete an average length task assigned by Krystilia, assuming you kill monsters at the same speed of the calculated task. "
        +"This can be used to assess the points/hr of a task, or to see how long you could sustain high XP and Key rates if you used a slaughter bracelet and/or task extension.";

    // Open or Close the about section:
    if(document.getElementById("about").style.backgroundColor == "rgb(249, 243, 235)") {
        // Close the about section
        document.querySelector(".aboutbutton").value = "More Info";

        document.getElementById("about").style.backgroundColor = "";
        document.getElementById("info").innerHTML = "";
    } else {
        // Display the about section
        document.querySelector(".aboutbutton").value = "Close Info";

        document.getElementById("about").style.backgroundColor = "#F9F3EB";
        document.getElementById("info").innerHTML = aboutString;
    }
}