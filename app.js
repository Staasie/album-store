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

// let username = yourName(); 
// let timeMessage = timeOfDay();

// let favoritesong = prompt('What is your favorite song?');

let finalMessage = `${timeMessage} Hello ${username}! Great choice, who doesn\'t love ${favoritesong}?`;

document.body.innerHTML = finalMessage;


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