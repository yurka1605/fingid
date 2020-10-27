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

$('#summ').on('input', function () {
    const current = $(this).val().replace(/[^0-9]/g, '');
    $(this).val(current);
});

$('#summ').on('change', function () {
    let current = $(this).val().replace(/[^0-9]/g, '');
    const num = parseInt(current, 10);
    if (num >= 10000) {
        current = 10000;
        $(this).val('10 000 ₽');
    } else if (num <= 1000) {
        $(this).val('1 000 ₽');
        current = 1000; 
    } else {
        const arr = `${ current }`.split('');
        const newArr = [];
        arr.forEach((el, i) => {
            if (i && i % 3 === 0) {
                newArr.push(i);
            }
        });
        newArr.forEach(el => arr.reverse().splice(el, 0, ' '));
        $(this).val(arr.reverse().join('') + ' ₽');
    }
    const childs = $(this).next().children();
    $(childs[0]).css('width', `${ ((current - 1000) / 9000) * 100 }%`);
    $(childs[1]).css('left', `${ ((current - 1000) / 9000) * 100 }%`);
});

$('#srok').on('input', function () {
    const current = $(this).val().replace(/[^0-9]/g, '');
    $(this).val(current);
});

$('#srok').on('change', function () {
    let current = $(this).val().replace(/[^0-9]/g, '');
    const num = parseInt(current, 10);
    if (num >= 30) {
        current = 30;
        $(this).val('30 дней');
    } else if (num <= 1) {
        $(this).val('1 день');
        current = 1;
    } else {
        let ost = ' дней';
        console.log((!/12/g.test(current) || !/13/g.test(current) || !/14/g.test(current)));
        if (/1/g.test(current) && !/11/g.test(current) && !/12/g.test(current) && !/13/g.test(current) && !/14/g.test(current)) {
            ost = ' день';
        } else if (
            (!/12/g.test(current) && !/13/g.test(current) && !/14/g.test(current)) &&
            (/2/g.test(current) || /3/g.test(current) || /4/g.test(current))
        ) {
            ost = ' дня';
        }
        $(this).val(current + ost );
    }
    const childs = $(this).next().children();
    $(childs[0]).css('width', `${ ((current - 1) / 29) * 100 }%`);
    $(childs[1]).css('left', `${ ((current - 1) / 29) * 100 }%`);
});

let isDown = false;
let startPointX;
$('.control-summ .calc__clider-point').on('mousedown', function (e) {
    isDown = true;
    startPointX = e.clientX;
});

$('.calc__control').on('mousemove', function (e) {
    console.log(isDown);
    if (isDown) {
        console.log(startPointX - e.clientX);
    }
});

$('.control-summ .calc__clider-point').on('mouseup', function() { 
    isDown = false;
});