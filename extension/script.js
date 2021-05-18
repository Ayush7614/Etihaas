/*
Author - Ayush Kumar
Etihaas
CHROME EXTENSION
*/

var d = new Date(),
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    day = days[d.getDay()],
    months = ['Jan', 'Feb', 'Mar', 'Ap', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    month = months[d.getMonth()],
    date = d.getDate(),
    suf = ['th', 'st', 'nd', 'rd'],
    v = date % 100,
    date = date + (suf[(v - 20) % 10] || suf[v] || suf[0]),
    hours = d.getHours(),
    minutes = d.getMinutes(),
    noon = '';
// Display hours in 12-hour format, and set am/pm
if (hours == 12) {
    noon = 'pm';
} else if (hours > 12) {
    hours = hours - 12;
    noon = 'pm';
} else {
    noon = 'am';
};
// Add '0' to minutes if less than 10
if (minutes < 10) {
    minutes = '0' + minutes;
};
// Output the Timestamp
var timestamp = day + ', ' + month + ' ' + date + ', ' + hours + ':' + minutes + ' ' + noon;

document.getElementById("datetime").innerHTML = timestamp;
