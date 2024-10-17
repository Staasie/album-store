'use strict'

function yourName() {
    let name = prompt('What is your name?');
    return document.write(name);
}

function favoriteSong() {
    let song = prompt ('What\'s your favorite song?');
    return document.write("Great song choice, I love \"" + song + "\"");
}

function timeOfDay() {
    let time = prompt('What hour is it? (0-23)');
    let message = '';

    if (time < 0 || time > 23) { 
        message = 'That hour does not exist!';
    } else if (time <= 11) {
        message = 'Good Morning!';
    } else if (time <= 18) {
        message = 'Good Afternoon!';
    } else {
        message = 'Good Evening!';
    }

    return message;
}

function displayRating() {
    let output = '';
    let rating = prompt ('scale of 1-5, how many stars would you rate my website?');
    for(let i = 0; i < rating; i++){
        output += "<img class= 'star' src='https://www.citypng.com/public/uploads/preview/hd-glowing-neon-yellow-star-transparent-png-7017516945411456fzdnwlob3.png' width='50' height='50'/>";
    }
    return document.write(output);
}
 
function rateMyPage() {
    let answer = prompt('rate my webpage');
    let output = '';

    if (answer >= 4) { 
        message = 'so happy you enjoy the album store webpage!';
    } else if (answer <= 3) {
        message = 'we/ll do better';
    } else if (answer < 3) {
        message = 'well that is no fun!';
    }

    return document.write(output);
}








// 'use strict'

// function yourName() {
//     let name = prompt('What is your name?');
//     return document.write(name);
// }

// function guess answer() {
//     let answer;

//     while (answer !=9) {
//         alert('Try Again!');
// //     } else 
// }



// let username = yourName(); 
// let timeMessage = timeOfDay();

// let favoritesong = prompt('What is your favorite song?');

// let finalMessage = `${timeMessage} Hello ${username}! Great choice, who doesn\'t love ${favoritesong}?`;

// document.body.innerHTML = finalMessage;


// 'use strict';

// let time = prompt('What hour is it? (0-23)');
// let message;
// let username = prompt('What is your name?');
// let favoritesong = prompt('What is your favorite song?');
// if (time < 0 || time > 23) { 
//     message = 'That hour does not exist!';
// } else if (time <= 11) {
//     message = 'Good Morning!';
// } else if (time <= 18) {
//     message = 'Good Afternoon!';
// } else {
//     message = 'Good Evening!';
// }

// console.log('Hello, ' + username);

// console.log('Great choice, who doesn\'t love ' + favoritesong + '?');

// document.write(message + ' Hello ' + username + '! Great choice, who doesn\'t love ' + favoritesong + '?');


