//main.js
'use strict';

$(document).ready(function(){
    $('#col-center').prepend(
        $('<div></div>',{
            id: 'carList',
            html: '<ul></ul>'
        })
    );

    $('body').on('click', '.tab', function(){
        $('.active').removeClass('active');
        $(this).addClass('active');
    });

});

window.onload = function(){

    $.ajax({
        url: "https://zillow-rest.herokuapp.com/automobiles",
        jsonp: "callback",
        dataType: "jsonp",
        success: function( response ) {
            console.log( response );
            response.automobiles.sort(function(a, b){
                return b.mpg - a.mpg;
            });
            for(var i in response.automobiles){
                $('#carList ul').append($('<li></li>', {
                    html: "Name: " + response.automobiles[i].name + ", Price: " + response.automobiles[i].price + ", MPG: " + response.automobiles[i].mpg
                }));
            }

        }

    });


};
