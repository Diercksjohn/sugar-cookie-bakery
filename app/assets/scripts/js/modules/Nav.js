import $ from 'jquery';
    //make classes for navigation
    //for when clicked open and closed shows menu

    class Nav {

        constructor() {
            this.events();
        }

        events(){
            $('.hamburger').on('click', function () {
                $('.menu').addClass('open');
            });
            
            $( '.menu a' ).on("click", function(){
                $('.menu').removeClass('open');
            });
        }
    }
