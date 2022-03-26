const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');


if (popupLinks.length > 0) {

    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function(event) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            event.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.popup__close');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const element = popupCloseIcon[index];
        element.addEventListener('click', function (event) {
            popupClose(element.closest('.popup'));
            event.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        }

        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (event) {
            if (!event.target.closest('.popup__content')) {
                popupClose(event.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive) {
    popupActive.classList.remove('open')
}

document.addEventListener("keydown", function (event) {
    if (event.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});