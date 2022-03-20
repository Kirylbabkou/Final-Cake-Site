$(function (){
    $('.burger-menu').click(function () {
        if($('nav ul').css('display') == 'none'){
            $('nav ul').slideDown();
        } else {
            $('nav ul').slideUp();
        }
        
    });


    $('.about').slick({
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 801,
            settings: {
                dots: false,
                centerMode: true,
                centerPadding: '40px',
            }
        }]
    });

    AOS.init();

});