

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
console.log("ready!")

// new game from beginning
// crystal variables
    var crystal = {
        green: {
            name: "green",
            value: 0
        },
        pink: {
            name: "pink",
            value: 0
        },
        yellow: {
            name: "yellow",
            value: 0
        },
        purple: {
            name: "purple",
            value: 0
        }
    };

    // scores current and target
    var currentScore = 0;
    var targetScore = 0;

    // wins and losses
    var winCount = 0;
    var lossCount = 0;
    // global variable
    var playing = false;
    // functions
    // gets random number
    var getRandom = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    // starts and restarts the game
    var startGame = function() {

        

        currentScore = 0;

        targetScore = getRandom(19, 120);

        crystal.green.value = getRandom(1, 12);
        crystal.pink.value = getRandom(1, 12);
        crystal.yellow.value = getRandom(1, 12);
        crystal.purple.value = getRandom(1, 12);

    $("#score").text(currentScore);
    $("#goal").text(targetScore);

    //    console testing
    console.log("I'm here");
    console.log("Goal Score: " + targetScore);
    console.log("Green Crystal: " + crystal.green.value + " | Pink Crystal: " + crystal.pink.value + " | Yellow Crystal: " + crystal.yellow.value + " | Purple Crystal: " + crystal.purple.value);
    };
    // check if user won or lost the game, then resets the game
    var checkWin = function() {

        if (currentScore > targetScore) {
            var paragraph = document.getElementById("p");
            paragraph.textContent = ("Sorry, you lost!");
            $("#play-again").show();
            playing = false;
            console.log("You Lost!");
            lossCount++;
            $("#losses").text(lossCount);
        } else if (currentScore === targetScore) {
            var paragraph = document.getElementById("p");
            paragraph.textContent = ("You won!");
            $("#play-again").show();
            playing = false;
            console.log("You won!");
            winCount++;
            $("#wins").text(winCount);
        }
    };

    // builds crystal click function
    var addValues = function(clickedCrystal) {
        currentScore += clickedCrystal.value;
        $("#score").text(currentScore);
        checkWin();
        console.log("Your Score: " + currentScore);
    };

    // Main process
    startGame();

    $("#green").click(function() {
        if (playing) {
            addValues(crystal.green);
        }    
    });

    $("#pink").click(function() {
        if (playing) {
            addValues(crystal.pink);
        }    
    });

    $("#yellow").click(function() {
        if (playing) {
            addValues(crystal.yellow);
        }
    });

    $("#purple").click(function() {
        if (playing) {
            addValues(crystal.purple);
        }
    });

    $("#play-again").click(function() {
        var paragraph = document.getElementById("p");
        paragraph.textContent = ("");
        startGame();
        $("#play-again").hide();
        playing = true;
    })

});








// end new....


// var targetNumber = getRandomInt(19, 120);
// $("#goal").text(targetNumber);

// var counter = 0;

// var crystals = {
//     per: { value: getRandomInt(1,12) },
//     pSapp: { value: getRandomInt(1,12) },
//     am: { value: getRandomInt(1,12) },
//     yel: { value: getRandomInt(1,12) },  
//     }
// // }
// // console.log("valueOfPerCrystal",crystals.per.value)
// // console.log("valueOfpSappCrystal",crystals.pSapp.value)
// // console.log("valueOfAmCrystal",crystals.am.value)
// // console.log("valueOfYelCrystal",crystals.yel.value)

// $("#per").on("click", function() {
//     counter += crystals.per.value;
//     $("#score").text(counter);

//     if (counter === targetNumber) {
//         var paragraph = document.getElementById("p");
//         paragraph.textContent += "you won!";
//         var winningNumber = (counter =+1);
//         $("#wins").html(winningNumber);
//         // restartGame()
//     }
    
//     else if (counter >= targetNumber) {
//         var paragraph = document.getElementById("p");
//         paragraph.textContent += "you lost!";
//         var losingNumber = (counter =+1);
//         $("#losses").text(losingNumber);
//         // restartGame()
//     }

//   });
  

//   $("#pSapp").on("click", function() {
//     counter += crystals.pSapp.value;
//     $("#score").text(counter);

//     if (counter === targetNumber) {
//         var paragraph = document.getElementById("p");
//         paragraph.textContent += "you won!";
//         var winningNumber = (counter =+1);
//         $("#wins").html(winningNumber);
//     }

//     else if (counter >= targetNumber) {
//         var paragraph = document.getElementById("p");
//         paragraph.textContent += "you lost!";
//         var losingNumber = (counter =+1);
//         $("#losses").text(losingNumber);
//     }
//   });

//   $("#am").on("click", function() {
//     counter += crystals.am.value;
//     $("#score").text(counter);

//     if (counter === targetNumber) {
//         var paragraph = document.getElementById("p");
//         paragraph.textContent += "you won!";
//         var winningNumber = (counter =+1);
//         $("#wins").html(winningNumber);
//     }

//     else if (counter >= targetNumber) {
//         var paragraph = document.getElementById("p");
//         paragraph.textContent += "you lost!";
//         var losingNumber = (counter =+1);
//         $("#losses").text(losingNumber);
//     }
//     });

//   $("#yel").on("click", function() {
//     counter += crystals.yel.value;
//     $("#score").text(counter);

//     if (counter === targetNumber) {
//         var paragraph = document.getElementById("p");
//         paragraph.textContent += "you won!";
//         var winningNumber = (counter =+1);
//         $("#wins").html(winningNumber);
//     }

//     else if (counter >= targetNumber) {
//         var paragraph = document.getElementById("p");
//         paragraph.textContent += "you lost!";
//         var losingNumber = (counter =+1);
//         $("#losses").text(losingNumber);
//     }
 
//     })
    