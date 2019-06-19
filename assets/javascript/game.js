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

    







});