$(document).ready(function () {
    $( "#summ-slider" ).slider({
        animate: false,
        range: "min",
        min: 1000,
        max: 10000, 
        value: 7300,
        slide: function( event, ui ) {
            $("#summ").val(writeSummValue(ui.value).string);
        }
    });
    $( "#srok-slider" ).slider({
        animate: false,
        range: "min", 
        min: 1,
        max: 30,
        value: 18,
        slide: function( event, ui ) {
            $("#srok").val(writeSrokValue(ui.value).string);
        }
    });
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
    const object = writeSummValue($(this).val().replace(/[^0-9]/g, ''));
    $(this).val(object.string);
    $("#summ-slider").slider( "value", object.value);
});

function writeSummValue(current) {
    const num = parseInt(current, 10);
    if (num >= 10000) {
        return {
            value: 10000,
            string: '10000 ₽'
        }
    } else if (num <= 1000) {
        return {
            value: 1000,
            string: '1000 ₽'
        }
    } else {
        return {
            value: current,
            string: current + ' ₽'
        }
    }
}

$('#srok').on('input', function () {
    const current = $(this).val().replace(/[^0-9]/g, '');
    $(this).val(current);
});

$('#srok').on('change', function () {
    const object = writeSrokValue($(this).val().replace(/[^0-9]/g, ''));
    $(this).val(object.string);
    $("#srok-slider").slider( "value", object.value);
});

$('.plus-mobile').on('click', function (e) {
    e.preventDefault();
    let obj;
    if ($(this).hasClass('plus')) {
        const val = $(this).prev().val().replace(/[^0-9]/g, '');
        if ($(this).prev().data('name') === 'summ') {
            obj = writeSummValue(500 + parseInt(val, 10));
            $(this).prev().val(obj.string);
            $("#summ-slider").slider( "value", obj.value);
        } else {
            obj = writeSrokValue(1 + parseInt(val, 10));
            $(this).prev().val(writeSrokValue(1 + parseInt(val, 10)).string);
            $("#srok-slider").slider( "value", obj.value);
        }
    } else {
        const val = $(this).next().val().replace(/[^0-9]/g, '');
        if ($(this).next().data('name') === 'summ') {
            obj = writeSummValue(parseInt(val, 10) - 500);
            $(this).next().val(obj.string);
            $("#summ-slider").slider( "value", obj.value);
        } else {
            obj = writeSrokValue(parseInt(val, 10) - 1);
            $(this).next().val(obj.string);
            $("#srok-slider").slider( "value", obj.value);
        }
    }
})

function writeSrokValue(current) {
    const num = parseInt(current, 10);
    if (num >= 30) {
        return {
            value: 30,
            string: '30 дней'
        }
    } else if (num <= 1) {
        return {
            value: 1,
            string: '1 день'
        }
    } else {
        let ost = ' дней';
        if (current === 1 || current === 21) {
            ost = ' день';
        } else if (current === 2 || current === 3 || current === 4 || current === 22 || current === 23 || current === 24) {
            ost = ' дня';
        }
        return {
            value: current,
            string: current + ost
        }
    }
}