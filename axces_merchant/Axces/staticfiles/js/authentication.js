/**
 * Created by paren on 10/04/16.
 */
$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        simulateTouch: false,
        autoHeight: true,
        // If we need pagination
        pagination: '.swiper-pagination'
    });
    $('[data-toggle="tooltip"]').tooltip();
    $('#next1').click(function () {
        mySwiper.slideNext(false);
         $('html, body').animate({
                scrollTop: 0
            }, 2);

    });
    $('#next2').click(function () {
        var n2 = false;
        if ($('#phone')) {
            if (!phone_correct($('#phone').val())) {
                $('#phone').attr('title', 'Please Enter Valid Phone Number').tooltip('fixTitle').tooltip('show');
                n2 = true;
            }
        }
        if ($('#email')) {
            if (!email_correct($('#email').val())) {
                $('#email').attr('title', 'Please Enter Valid Email').tooltip('fixTitle').tooltip('show');
                n2 = true;
            }
        }

        if(n2) {
             $('html, body').animate({
                scrollTop: $("#phone").offset().top - 200
            }, 1000);
            return false;
        }
        else {
            mySwiper.slideNext(false);
            $('html, body').animate({
                scrollTop: 0
            }, 2);
        }
    });
    $('#next3').click(function () {
        var n2 = false;
        if ($('#phone1')) {
            if (!phone_correct($('#phone1').val())) {
                $('#phone1').attr('title', 'Please Enter Valid Phone Number').tooltip('fixTitle').tooltip('show');
                n2 = true;

            }
        }
        if ($('#pan')) {
            if (!pan_correct($('#pan').val())) {
                $('#pan').attr('title', 'Please Enter Valid PAN Number').tooltip('fixTitle').tooltip('show');
                n2 = true;
            }
        }
        if(n2) {
            $('html, body').animate({
                scrollTop: $("#pan").offset().top - 200
            }, 1000);
            return false;
        }
        else{
            mySwiper.slideNext(false);
            $('html, body').animate({
                scrollTop: 0
            }, 2);}

    });
    $('#next4').click(function () {

        mySwiper.slideNext(false);
        $('html, body').animate({
                scrollTop: 0
            }, 2);
    });
    $('#next5').click(function () {
        mySwiper.slideNext(false);
        $('html, body').animate({
                scrollTop: 0
            }, 2);
    });

    $('button[data-text="Previous"]').click(function(e){
          mySwiper.slidePrev(false);$('html, body').animate({
                scrollTop: 0
            }, 2);
    });

});

var phone_correct = function (phone) {
    return /^\+?[0-9]{10,12}$/.test(phone);
};
var email_correct = function (email) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
};
var pan_correct = function (pan) {
    return /^[0-9A-Z]{4}[A-Z][0-9]{4}[A-Z]$/.test(pan);
};

