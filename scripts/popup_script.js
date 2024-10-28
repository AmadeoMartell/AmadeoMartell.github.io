const popupForm = document.getElementById('popupForm');
const openLoginPopup = document.getElementById('openLoginPopup');
const closeBtn = document.getElementById('closeBtn');

function showPopup() {
    popupForm.style.display = 'flex';
}

function hidePopup() {
    popupForm.style.display = 'none';
}

openLoginPopup.addEventListener('click', showPopup);
closeBtn.addEventListener('click', hidePopup);

window.addEventListener('click', function (event) {
    if (event.target === popupForm) {
        hidePopup();
    }
});
