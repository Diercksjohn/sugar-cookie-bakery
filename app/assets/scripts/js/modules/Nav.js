import $ from 'jquery';
    //fix by making this a class
    $('.hamburger').on('click', function () {
        $('.menu').addClass('open');
    });
    
    $( '.menu a' ).on("click", function(){
        $('.menu').removeClass('open');
    });

