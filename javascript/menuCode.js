// Jquery Code
$(document).ready(function(){

    // NAV Code
    $("#IntroSec").click(function(){
        $("#intro").show();
        $("#highlight").hide();
        $("#about").hide();
        $("#project").hide();
    });
    $("#AboutSec").click(function(){
        $("#about").show();
        $("#highlight").show();
        $("#intro").hide();
        $("#project").hide();
    });
    $("#ProjectsSec").click(function(){
        $("#about").hide();
        $("#highlight").show();
        $("#intro").hide();
        $("#project").show(); 
    });

    $("#highlight").hide();
    $("#about").hide();
    $("#project").hide();

    $("#siteSec").click(function(){
        $("#about").hide();
        $("#highlight").show();
        $("#intro").hide();
        $("#project").show(); 
    });

    $("#codeSec").click(function(){
        $("#about").hide();
        $("#highlight").show();
        $("#intro").hide();
        $("#project").show(); 
    });



});