// Navbar Modal
const navButton = document.querySelector('#navButton');
const closeNavButton = document.querySelector('#close-button');
const modal = document.querySelector('#modal');
const modalLinks = document.querySelectorAll('.modal-link');

navButton.addEventListener('click', toggleModal);
closeNavButton.addEventListener('click', toggleModal);
window.addEventListener('click', modalCheck);
modalLinks.forEach(btn => btn.addEventListener('click', toggleModal))

function toggleModal() {
    modal.classList.toggle('show-modal')
}
function modalCheck() {
    if (event.target === modal) {
        toggleModal();
    }
}