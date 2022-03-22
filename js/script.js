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

// const gallery = function() {

//     const elems = document.querySelector('.galery__list');
    
//     const imageBlock = document.querySelector('.gallery__preview');
//     const buttonClose = imageBlock.querySelector('.gallery__preview_close');

//     if(!elems) return;

//     const show = function(event) {
//         event.preventDefault();

//         let target = event.target;
//         console.log(target);

//         let targetTagName = target.tagName;

//         if(targetTagName == 'IMG') {
//             let parent = target.parentNode;
//             console.log(parent);

//             let href = parent.getAttribute('href');

//             let img = document.createElement('img');
//             img.setAttribute ("src", href);

//             hide();
            
//             imageBlock.append(img);
//             imageBlock.classList.remove('hide');
//         }
//     }

//     const hide = function (){
//         imageBlock.classList = 'hide';
//         let children = imageBlock.children;
//         console.log(children);

//         for (let i = 0; i < children.length; i++) {
//             if (children[i].tagName == 'IMG') {
//                 imageBlock.removeChild(children[i]);
//             }
//         }
//     }

//     buttonClose.addEventListener('click', hide)
//     elems.addEventListener('click', show);
// };

// gallery(); 



function slider() {
    const images = document.querySelectorAll('.slider .slides > div');
    const sliderLine = document.querySelector('.slider .slides');
    let count = 0;
    let width;

    function init() {
        console.log('resize');
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