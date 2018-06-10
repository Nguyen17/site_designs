/* GRID ITEM OVERLAY ANIMATION */


function overlayHover(params_){


    
    $("" + params_).mouseover(function () {
   
        $("" + params_ +" .fullOverlay").css({"opacity" :"1" });
        $("" + params_ + " .overlay").css({"background" : "red"});
        
        $("" + params_ + " .overlay .text").css({"border-bottom" : "3px solid rgba(255, 255, 255, 1)"});
    }).mouseleave(function(){
    
        $("" + params_ + " .fullOverlay").css({"opacity" :"0" });
        $("" + params_ + " .overlay").css({"background" : "rgba(0, 0, 0, 0.5)"});
        $("" + params_ + " .overlay .text").css({"border-bottom" : "0px solid rgba(255, 255, 255, 0)"});
    })
}


// Iterates through featured content and target the class for overlay animation effects
var featured_array = [".featured-one", ".featured-two", ".featured-three", ".featured-four"];

overlayHover(featured_array[0]);
overlayHover(featured_array[1]);
overlayHover(featured_array[2]);
overlayHover(featured_array[3]);


// SCROLL EFFECTS

$(window).scroll(function(event){
    console.log($(window).scrollTop());


var scroll_event = $(window).scrollTop();
var target_scroll = 296;
if ($(window).scrollTop() > 520){
    $(".topMenu").css({"background-color" : "transparent", "transition" : "1s"});
    $(".menuBar").css({"background-color" : "transparent", "transition" : "1.5s", "color" : "white"});
    $(".topMenu ul:nth-child(1) li:nth-child(1)").css({"background-color" : "transparent", "border" : "none"});
}
if(scroll_event < 520){
    $(".topMenu").css({"background-color" : "#252525", "transition" : "1s"});
    $(".menuBar").css({"background-color" : "white", "transition" : "1s", "color" : "black"});
    $(".topMenu ul:nth-child(1) li:nth-child(1)").css({"background-color" : "white", "border": "2px solid white"});
    $(".nav--right").css({"color" : "white", "transition" : "1s"});
    $(".brand--label").css({"color" : "white", "transition" : "1s"});

};


// @2418px mark
if ($(window).scrollTop() > 2400){
   
    $(".topMenu").css({"color" : "black", "transition" : "1s"});
    $(".menuBar").css({"background-color" : "transparent", "transition" : "1.5s", "color" : "black"});
    $(".topMenu ul:nth-child(1) li:nth-child(1)").css({"background-color" : "transparent", "border" : "none"});
    $(".nav--right").css({"color" : "black", "transition" : "1s"});
    $("#brand--label").css({"color" : "black", "transition" : "1s"});
}

})



/* SUB MENU ANIMATION */
$("#nav-men").on("mouseover", function (){

    $(".close--section").css({"display" : "flex"});
    $(".sub--menu").css({"height" : "315px"});
    $(".sub--menu-men").delay(500).css({"display" : "grid"});
    $(".sub--menu-women").css({"display" : "none"});
    $(".sub--menu-studio").css({"display" : "none"});
    $(".sub--menu-designer").css({"display" : "none"});

    /* Bottom border animation */


})

$(".sub--menu").mouseleave(function (){

    $(".close--section").css({"display" : "none"});
    $(".sub--menu").css({"height" : "0px"});
    $(".sub--menu-women").css({"display" : "none"});
    $(".sub--menu-men").delay(500).css({"display" : "none"});
    $(".sub--menu-designer").css({"display" : "none"});
    $(".sub--menu-studio").css({"display" : "none"});
})

$("#nav-women").on("mouseover", function (){

    $(".sub--menu").css({"height" : "315px"});
    $(".sub--menu-women").css({"display" : "grid"});
    $(".sub--menu-men").css({"display" : "none"});
    $(".sub--menu-studio").css({"display" : "none"});
    $(".sub--menu-designer").css({"display" : "none"});
    $(".close--section").css({"display" : "flex"});


})


$("#nav-studio").on("mouseover", function (){

    $(".close--section").css({"display" : "flex"});
    $(".sub--menu").css({"height" : "315px"});
    $(".sub--menu-studio").css({"display" : "grid"});
    $(".sub--menu-women").css({"display" : "none"});
    $(".sub--menu-men").css({"display" : "none"});
    $(".sub--menu-designer").css({"display" : "none"});


})


$("#nav-designer").on("mouseover", function (){

    $(".close--section").css({"display" : "flex"});
    $(".sub--menu").css({"height" : "315px"});
    $(".sub--menu-studio").css({"display" : "none"});
    $(".sub--menu-women").css({"display" : "none"});
    $(".sub--menu-men").css({"display" : "none"});
    $(".sub--menu-designer").css({"display" : "grid"});

})



