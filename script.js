'use strict'

const mobileMenuBtn = document.querySelector('.header__menu-mobile-btn');
const mobileMenu = document.querySelector('.header__menu-mobile');

mobileMenuBtn.addEventListener('click', onMobileMenuBtnClick);

function onMobileMenuBtnClick() {
    mobileMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.style.display = 'block';
}