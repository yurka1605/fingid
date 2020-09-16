$(document).ready(function () {

});

$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $('.header__nav').addClass('fixed'); 
    } else {
        $('.header__nav').removeClass('fixed');
    }
});

$('.header__burger').on('click', function () {
    $('.mobile__menu').addClass('active');
});

$('.close-btn').on('click', function () {
    $('.mobile__menu').removeClass('active');
});
