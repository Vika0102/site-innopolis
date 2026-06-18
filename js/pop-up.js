let loginButton = document.querySelector('.login-button');
let loginPopUp = document.querySelector ('.login-pop-up');
let Closenews = document.querySelector('.popup-close');

loginButton.addEventListener ('click', showPopup);

function showPopup(evt) {
    evt.preventDefault();

    loginPopUp.classList.toggle('show-popup');
};

function close() {
    mailingPopUp.classList.remove('show-popup');
}

// Находим кнопку закрытия внутри попапа
const closeButton = mailingPopUp.querySelector('.popup-close');

if (closeButton) {
    closeButton.addEventListener('click', close);
}
