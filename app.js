'use strict';

let time = Number(prompt('What hour is it? (0-23)?'));
let message;
let username;
let favoritesong; 
if (time < 0 || time > 23) { 
    message = 'That hour does not exist!';
} else if (time <= 11) {
    message = 'Good Morning!';
} else if (time <= 18) {
    message = 'Good Afternoon!';
} else {
    message = 'Good Evening!';
}

username = prompt('What is your name?');
console.log('Hello, ' + username);

favoritesong = prompt('What is your favorite song?');
console.log('Great choice, who doesn\'t love ' + favoritesong + '?');

document.write(message + ' Hello ' + username + '! Great choice, who doesn\'t love ' + favoritesong + '?');