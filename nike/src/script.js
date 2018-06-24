$(document).scroll(function(event){
    
    var scrollPos = $(window).scrollTop();
    console.log(scrollPos);

    if(scrollPos >= 423){
        $(".fixed-navbar").css({"height": "70px"});
        $(".fixed-navbar img").css({"height": "70px"});
        $(".fixed-navbar  #menu-icon").css({"height": "40px"});
    }
    else{
        $(".fixed-navbar").css({"height": "0px"});
        $(".fixed-navbar img").css({"height": "0px"});
        $(".fixed-navbar #menu-icon").css({"height": "0px"});
    };


});