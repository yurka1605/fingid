$(document).ready(function () {
    
});

$(window).scroll(function () {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 0) {
        $('.header__nav').addClass('fixed'); 
    } else {
        $('.header__nav').removeClass('fixed');
    }
});