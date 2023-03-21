function keysPerHour() {
    // Get input values
    var killCount           = parseInt(document.getElementById("killCount").value);
    var dropRate            = parseInt(document.getElementById("dropRate").value);
    var timeTakenMinutes    = parseInt(document.getElementById("timeTakenMinutes").value);
    var timeTakenSeconds    = parseInt(document.getElementById("timeTakenSeconds").value);
    var superiorPossible    = document.getElementById("superior").checked;

    // Convert time to minutes, get kills per second
    var timeTaken           = (timeTakenMinutes * 60) + timeTakenSeconds;
    var killsPerSecond      = killCount / timeTaken;

    // Calculate results
    if (superiorPossible) {
        var superiorsPerHour = ((killsPerSecond * 3600) / 200);
        var keysPerHour = (((killsPerSecond * 3600) / dropRate) + superiorsPerHour);
        document.getElementById("keysResult").innerHTML = "Larran's Keys/hr: " + keysPerHour.toFixed(2);
        document.getElementById("superiorsResult").innerHTML = "Superiors/hr: " + superiorsPerHour.toFixed(2);
    } else {
        var keysPerHour = ((killsPerSecond * 3600) / dropRate).toFixed(2);
        document.getElementById("keysResult").innerHTML = "Larran's Keys/hr: " + keysPerHour;
        document.getElementById("superiorsResult").innerHTML = "";
    }
}
