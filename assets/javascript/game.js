// 1. game load
//     - header with title, subhead with instructions, number to guess, score card, gems
// 2. random number to guess is generated & gems are assigned random number
// 3. user clicks a gem, "score" increases by random value of clicked gem
// 4. if "score" equals number to guess, you win! win is tallied and all random numbers reset
//    if "score" exceeds number to guess, you lose! loss is tallied and all random numbers reset

// variables I need:
// - gem (does each gem need a variable?)
// - number to guess (random number between 19 - 120)
// - value of gem (does each gem need a variable? between 1-12)
// - wins, losses

// functions i need:
// - generate number to guess
// - generate value of gems
// - increase wins/losses

var crystal = {

    // each of our four crystals
    crystalA: 0,
    crystalB: 0,
    crystalC: 0,
    crystalD: 0,

    cValue: [], // to hold unique,non-repeated crystal values 
    cValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // possible crystal values

    wins: 0,
    losses: 0,

    numberToGuess: 19,

    userScore: 0,

    clickMessages: [
        "Excellent choice, matey.",
        "Choose carefully...",       
        "Quick, fill yer pockets!",       
        "Keep yer eye on yer target.",        
        "Handsomely done. ",    
        "Shiver me timbers!"
    ],

    crystalValue: function() {

        this.cValue = [];
        this.cValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        for (var i = 0; this.cValue.length < 4; i++) {
            
            var randomNumber = Math.floor(Math.random() * this.cValues.length);

            if (typeof this.cValues[randomNumber] !== 'number') {

                randomNumber = Math.floor(Math.random() * this.cValues.length);
            } 

            else {     

            // add crystal value to unique crystal values array
            this.cValue.push(this.cValues[randomNumber]); 

            // console.log(this.cValue);

            // ensure we grab the index of the crystal value we added
            randomNumber = randomNumber - 1;

            // replace crystal value from possible options to avoid duplicates
            this.cValues.splice(this.cValues[randomNumber], 1, '');

            // console.log(this.cValues);
            }
            
        }

        // assign unique values to each crystal
        this.crystalA = this.cValue[0];
        this.crystalB = this.cValue[1];
        this.crystalC = this.cValue[2];
        this.crystalD = this.cValue[3];

        console.log("Clues for landlubbers:");
        console.log("BLUE: " + crystal.crystalA + " | RED: " + crystal.crystalB + " | YELLOW: " + crystal.crystalC + " | GREEN: " + crystal.crystalD);

    },

    generateNumberToGuess: function() {
        this.numberToGuess = Math.floor(Math.random() * (120 - 19 + 1) + 19);

        $('#numberToGuess').text(this.numberToGuess);
    },

    checkScore: function() {
        if (crystal.userScore == crystal.numberToGuess) {
            $('#message').text("Ye sailed away with yer bounty! Congrats! Try again?");
            this.wins++;
            $('#wins').text(this.wins);
            crystal.newGame();
        } 
        
        else if (crystal.userScore > crystal.numberToGuess) {
            $('#message').text("Blimey! Ye've been caught red-handed. Try again!");
            this.losses++;
            $('#losses').text(this.losses);
            crystal.newGame();
        }
    },

    newGame: function() {
        this.userScore = 0;
        $('#userScore').text(this.userScore);
        this.crystalValue();
        this.generateNumberToGuess();
    }

}

// on crystal click functions

$('#crystalA').click(function() {
    crystal.userScore = crystal.userScore + crystal.crystalA;
    $('#userScore').text(crystal.userScore);
    $('#message').text("Fill yer pockets quickly but carefully.");
    crystal.checkScore();
});

$('#crystalB').click(function() {
    crystal.userScore = crystal.userScore + crystal.crystalB;
    $('#userScore').text(crystal.userScore);
    $('#message').text("Fill yer pockets quickly but carefully.");
    crystal.checkScore();
});

$('#crystalC').click(function() {
    crystal.userScore = crystal.userScore + crystal.crystalC;
    $('#userScore').text(crystal.userScore);
    $('#message').text("Fill yer pockets quickly but carefully.");
    crystal.checkScore();
});

$('#crystalD').click(function() {
    crystal.userScore = crystal.userScore + crystal.crystalD;
    $('#userScore').text(crystal.userScore);
    $('#message').text("Fill yer pockets quickly but carefully.");
    crystal.checkScore();
});

$(document).ready(function() {

    crystal.crystalValue();

    crystal.generateNumberToGuess();

});


