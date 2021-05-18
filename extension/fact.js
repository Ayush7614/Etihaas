/*
Author - Ayush Kumar
Etihaas
CHROME EXTENSION
*/
var quote = "";
$(document).ready(function() {
    var d = new Date();
    $('#quoteDisplay').html('Hang On! We\'re searching for you.');
    $("#quoteDisplay").append("<br><i class=\"fas fa-spinner fa-spin loader\"></i>");
    $.ajax({
        url: 'http://numbersapi.com/' + (d.getMonth() + 1) + '/' + d.getDate() + '/date',
        type: 'GET',
        success: function(data) {
            console.log(data);
            quote = data;
            $('#quoteDisplay').html(data);
        },
        error: function(data) {
            console.log(data);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("moreFact").addEventListener("click", newFact);
});

function newFact() {
    $('#quoteDisplay').html('Hang On! We\'re searching for you.');
    $("#quoteDisplay").append("<br><i class=\"fas fa-spinner fa-spin loader\"></i>");
    $.ajax({
        url: 'http://numbersapi.com/05/18/date',
        type: 'GET',
        success: function(data) {
            console.log(data);
            quote = data;
            $('#quoteDisplay').html(data);
        },
        error: function(data) {
            console.log(data);
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("tweet").addEventListener("click", tweetNow);
});

//function to tweet
function tweetNow() {
    var url = 'https://twitter.com/intent/tweet?url=https://github.com/vinitshahdeo/&text=' + quote + '&hashtags=TodayInHistory,MadeByVinitShahdeo'
    var win = window.open(url, '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Hey buddy! Please allow popups for this chrome extension.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("whatsapp").addEventListener("click", shareOnWhatsApp);
});


//function to share on whatsapp
function shareOnWhatsApp() {
    var win = window.open('https://wa.me/?text=' + quote + ' -- {{Shared via Chrome Extension made by Ayush Kumar}}', '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Hey buddy! Please allow popups for this chrome extension.');
    }
}
