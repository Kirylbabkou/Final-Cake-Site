$(function (){
    $('.burger-menu').click(function () {
        if($('nav ul').css('display') == 'none'){
            $('nav ul').slideDown();
        } else {
            $('nav ul').slideUp();
        }
        
    });


    
    AOS.init();

});



function slider() {
    const images = document.querySelectorAll('.slider .slides > div');
    const sliderLine = document.querySelector('.slider .slides');
    let count = 0;
    let width;

    function init() {
        
        width = document.querySelector('.slider').offsetWidth;
        sliderLine.style.width = width * images.length + 'px';
        images.forEach(item => {
            item.style.width = width + 'px';
            item.style.height = 'auto';
        });
        rollSlider();
    }

    init();
    window.addEventListener('resize', init);

    document.querySelector('.slider-next').addEventListener('click', function () {
        count++;
        if (count >= images.length) {
            count = 0;
        }
        rollSlider();
    });

    document.querySelector('.slider-prev').addEventListener('click', function () {
        count--;
        if (count < 0) {
            count = images.length - 1;
        }
        rollSlider();
    });

    function rollSlider() {
        sliderLine.style.transform = 'translate(-' + count * width + 'px)';

    }
}

slider();