const hamburgerOpen = document.querySelector('.hamburger__open');
const hamburgerClose = document.querySelector('.hamburger__close');
const mobileMenu = document.querySelector('.menu');
const footerIcons = document.querySelectorAll('.icon');

hamburgerOpen.addEventListener('click', () => {
    hamburgerOpen.classList.toggle('hidden');
    mobileMenu.classList.toggle('hidden');
    hamburgerClose.classList.toggle('hidden');
});

hamburgerClose.addEventListener('click', () => {
    hamburgerOpen.classList.toggle('hidden');
    mobileMenu.classList.toggle('hidden');
    hamburgerClose.classList.toggle('hidden');
});

