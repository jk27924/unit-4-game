// PSEUDO CODING!!!!!!
// 1. Creates number between 19 and 120 randomly
    // displays random number on the DOM
// 2. Creates random number from 1 to 12 for each crystal when clicked
    // each image should have RANDOM and HIDDEN points from 1 to 12
// 3. adds up scores from clicking each crystal repeatedly
// 4. resets the game
    // a. IF random number === total score, you WIN
    // b. ELSE IF random number < total score, you LOSE
// 6. WINS and LOSSES should update as soon as the game resets


$(document).ready(function(){

    // creates number between 19 and 120 randomly
    var ranNum = Math.floor(Math.random() * (120 - 19)) + 19;
    console.log(ranNum);


    // displays random number on the DOM
    $('.ranNumBox').text(ranNum);


    // creates random number from 1 to 12 for each crystal when clicked
    function crystalPoint(id) {
        var crystalValue = Math.floor(Math.random() * (12 - 1)) + 1;
        $(id).attr("value",crystalValue);
    };

    crystalPoint("#red");
    crystalPoint("#blue");
    crystalPoint("#yellow");
    crystalPoint("#green");



    // declaring variables
    var total = 0; 
    var wins = 0;
    var losses = 0;
    var totalScore = 0;


    // adds up scores from clicking each crystal repeatedly
    $(".crystalButton").click(function() {
        var crystalValue = $(this).val();
        crystalValue = parseFloat(crystalValue);
        totalScore = totalScore + crystalValue;
        console.log(totalScore);

        $('#totalScore').text(totalScore);

        if (totalScore ==ranNum) {
            winner();
        } else if (totalScore > ranNum) {
            loser();
        }

        function winner() {
            alert("You won!");
            wins++;
            $('#wins').text(wins);
        }

        function loser() {
            alert("You lost!");
            losses++;
            $('#losses').text(losses);
        }



    })


    







});