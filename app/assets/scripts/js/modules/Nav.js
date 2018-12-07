import $ from 'jquery';
    //make classes for navigation
    //for when clicked open and closed shows menu

    class Nav {

        constructor() {
            alert("alert in constructor is working");
            this.events();
        }

        events(){
            alert("alert in events is working");
            $('.hamburger').on('click', function () {
                $('.menu').addClass('open');
            });
            
            $( '.menu a' ).on("click", function(){
                $('.menu').removeClass('open');
            });
        }
    }
