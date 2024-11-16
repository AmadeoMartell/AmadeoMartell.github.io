const popupForm = document.getElementById('popupForm');
const registerPopup = document.getElementById('registerPopup');
const openLoginPopup = document.getElementById('openLoginPopup');
const openRegisterPopup = document.getElementById('openRegisterPopup');
const closeBtn = document.getElementById('closeBtn');
const closeRegisterBtn = document.getElementById('closeRegisterBtn');

function showPopup() {
    popupForm.style.display = 'flex';
}

function hidePopup() {
    popupForm.style.display = 'none';
}

function showRegisterPopup() {
    registerPopup.style.display = 'flex';
}

function hideRegisterPopup() {
    registerPopup.style.display = 'none';
}

openLoginPopup.addEventListener('click', showPopup);
closeBtn.addEventListener('click', hidePopup);

openRegisterPopup.addEventListener('click', showRegisterPopup);
closeRegisterBtn.addEventListener('click', hideRegisterPopup);

window.addEventListener('click', function (event) {
    if (event.target === popupForm) hidePopup();
    if (event.target === registerPopup) hideRegisterPopup();
});
