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

$('.banner__point').on('click', function () {
    let num = 0;
    $('.banner__point').each((i, el) => {
        if ($(this).data('num') === $(el).data('num')) {
            num = i;
        }
        $(el).removeClass('active');
    });
    $(this).addClass('active');
    $('.banner__slider').css('transform', `translateX(-${ num * 100 }%)`); 
});
