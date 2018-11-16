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

    crystalValue: function() {

        for (var i = 0; this.cValue.length < 4; i++) {
            
            var randomNumber = Math.floor(Math.random() * this.cValues.length);

            if (typeof this.cValues[randomNumber] !== 'number') {

                randomNumber = Math.floor(Math.random() * this.cValues.length);
            } 

            else {     

            // add crystal value to unique crystal values array
            this.cValue.push(this.cValues[randomNumber]); 

            // ensure we grab the index of the crystal value we added
            randomNumber = randomNumber - 1;

            // remove crystal value from possible options to avoid duplicates
            this.cValues.splice(this.cValues[randomNumber], 1, '');
            }
            
        }

        // assign unique values to each crystal
        this.crystalA = this.cValue[0];
        this.crystalB = this.cValue[1];
        this.crystalC = this.cValue[2];
        this.crystalD = this.cValue[3];

        console.log(crystal.crystalA + " " + crystal.crystalB + " " + crystal.crystalC + " " + crystal.crystalD);

    },

}

crystal.crystalValue();


