const button1 = document.getElementById("button1");

const modalArea = document.getElementsByClassName("modal-area")[0];
const modalLayer = document.getElementsByClassName("modal-layer")[0];
const modalCloser = document.getElementsByClassName("modal-closer")[0];
const modalContent = document.getElementById("modal-content");

const items = document.getElementsByClassName("item");


const modalArea_toggleElements = [modalLayer, modalCloser];

modalArea_toggleElements.forEach(element => {
    element.addEventListener('click', function() {
        modalContent.textContent ="";
        modalArea.classList.remove('is-show');
    }, false);
});

for (let index = 0; index < items.length; index++) {
    const element = items[index];
    element.addEventListener('click', function() {
        modalContent.textContent ="";
        modalContent.insertAdjacentHTML("afterbegin",document.getElementById("modal-"+element.id).innerHTML);
        modalArea.classList.add('is-show');
    }, false);   
}
