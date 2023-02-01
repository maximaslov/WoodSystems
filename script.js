'use strict'

const mobileMenuBtn = document.querySelector('.header__menu-mobile-btn');
const mobileMenu = document.querySelector('.header__menu-mobile');
const mobileMenuLine = document.querySelector('.header__menu-mobile-separator');

mobileMenuBtn.addEventListener('click', onMobileMenuBtnClick);
mobileMenuLine.addEventListener('click', onMobileMenuLineClick);

function onMobileMenuBtnClick() {
    mobileMenu.style.display = 'block';
    setTimeout(()=> {
        mobileMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    }, 1)
}

function onMobileMenuLineClick () {
    onMobileMenuBtnClick();
}
