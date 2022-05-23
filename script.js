const popupBtn = document.querySelectorAll('.open-window');
const popupOverlay = document.querySelectorAll('.popup-overlay');
const popupBtnClose = document.querySelectorAll('.popup-close');

popupBtn.forEach((item, index) => {
    item.addEventListener("click", () => {
        popupOverlay[index].style.display = 'block';
    });
});

popupOverlay.forEach((item, index) => {
    item.addEventListener("click", (event) => {
        if (event.target.className === 'popup-overlay') {
            popupOverlay[index].style.display = 'none';
        }
    });
});

popupBtnClose.forEach((item, index) => {
    item.addEventListener("click", (event) => {
        popupOverlay[index].style.display = 'none';
    });
});