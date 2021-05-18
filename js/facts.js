/*
Author - Ayush Kumar
Etihaas
CHROME EXTENSION
*/
var quote=""; 
$(document).ready(function(){
        var d=new Date();
        $('#quoteDisplay').html('Hang On! We\'re searching for you.');
         $("#quoteDisplay").append("<br><i class=\"fas fa-spinner fa-spin loader\"></i>");
        $.ajax({
	url: 'http://numbersapi.com/'+(d.getMonth()+1)+'/'+d.getDate()+'/date',
	type: 'GET',
	success: function(data){
		console.log(data);
        quote=data;
        $('#quoteDisplay').html(data);
	},
	error: function(data){
		console.log(data);
	}
});
});

function newFact()
    {
        $('#quoteDisplay').html('Hang On! We\'re searching for you.');
         $("#quoteDisplay").append("<br><i class=\"fas fa-spinner fa-spin loader\"></i>");
        $.ajax({
	url: 'http://numbersapi.com/05/18/date',
	type: 'GET',
	success: function(data){
		console.log(data);
        quote=data;
        $('#quoteDisplay').html(data);
	},
	error: function(data){
		console.log(data);
	}
});
    }

//function to tweet

$("#tweet").click(function(e){
         e.preventDefault();
         window.location = 'https://twitter.com/intent/tweet?url=https://github.com/vinitshahdeo/&text='+quote+'&hashtags=TodayInHistory,MadeByAyushKumar';    
});

// function to share on whatsapp

$("#whatsapp").click(function(e){
         e.preventDefault();
         window.location = 'https://wa.me/?text='+quote+' -- {{Shared via Chrome Extension made by Ayush Kumar}}';    
});
