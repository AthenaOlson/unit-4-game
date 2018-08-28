

// A random 'goal value' is set to UI at the start of each game
    // the value is random between 19-120 and should restart with every game.
    // this value will be set on <span id="goal">
// click on crystal (on.click?) - can each crystal be named by its id? #per, #pSapp, #am, #yel
    // each crystal needs a hidden value. 
    // crystal values restart with each game. 
    // crystal value amounts are random and hidden between 1-12.
    // as user clicks crystals, amounts tally to score.score should appear in the UI in this location <span id="score"
// wins and losses are tallied at the bottom of the screen
    // win value is <span id="wins"
    // losses value isi <span id="losses"
// not yet in code: something to tell the user if they win or lose a game

$(document).ready(function() {
});


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}

var targetNumber = getRandomInt(19, 120);
$("#goal").text(targetNumber);

var counter = 0;


var crystals = {
    per: { value: getRandomInt(1,12) },
    pSapp: { value: getRandomInt(1,12) },
    am: { value: getRandomInt(1,12) },
    yel: { value: getRandomInt(1,12) },  
    }
// console.log("valueOfPerCrystal",crystals.per.value)
// console.log("valueOfpSappCrystal",crystals.pSapp.value)
// console.log("valueOfAmCrystal",crystals.am.value)
// console.log("valueOfYelCrystal",crystals.yel.value)

$("#per").on("click", function() {
    counter += crystals.per.value;
    $("#score").text(counter);

    if (counter === targetNumber) {
        var paragraph = document.getElementById("p");
        paragraph.textContent += "you won!";
        var winningNumber = (counter =+1);
        $("#wins").html(winningNumber);
    }

    else if (counter >= targetNumber) {
        var paragraph = document.getElementById("p");
        paragraph.textContent += "you lost!";
        var losingNumber = (counter =+1);
        $("#losses").text(losingNumber);
    }

  });

  $("#pSapp").on("click", function() {
    counter += crystals.pSapp.value;
    $("#score").text(counter);

    if (counter === targetNumber) {
        var paragraph = document.getElementById("p");
        paragraph.textContent += "you won!";
        var winningNumber = (counter =+1);
        $("#wins").html(winningNumber);
    }

    else if (counter >= targetNumber) {
        var paragraph = document.getElementById("p");
        paragraph.textContent += "you lost!";
        var losingNumber = (counter =+1);
        $("#losses").text(losingNumber);
    }
  });

  $("#am").on("click", function() {
    counter += crystals.am.value;
    $("#score").text(counter);

    if (counter === targetNumber) {
        var paragraph = document.getElementById("p");
        paragraph.textContent += "you won!";
        var winningNumber = (counter =+1);
        $("#wins").html(winningNumber);
    }

    else if (counter >= targetNumber) {
        var paragraph = document.getElementById("p");
        paragraph.textContent += "you lost!";
        var losingNumber = (counter =+1);
        $("#losses").text(losingNumber);
    }
  });

  $("#yel").on("click", function() {
    counter += crystals.yel.value;
    $("#score").text(counter);

    if (counter === targetNumber) {
        var paragraph = document.getElementById("p");
        paragraph.textContent += "you won!";
        var winningNumber = (counter =+1);
        $("#wins").html(winningNumber);
    }

    else if (counter >= targetNumber) {
        var paragraph = document.getElementById("p");
        paragraph.textContent += "you lost!";
        var losingNumber = (counter =+1);
        $("#losses").text(losingNumber);
    }
    });