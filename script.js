'use strict'

const mainContainer = document.querySelector('.container');
const body = document.getElementsByTagName('body')[0];
const mobileMenuBtn = document.querySelector('.header__menu-mobile-btn');
const mobileMenu = document.querySelector('.header__menu-mobile');
const mobileMenuLine = document.querySelector('.header__menu-mobile-separator');
const mobileMenuItem = document.querySelector('.header__menu-mobile-item');

mobileMenuBtn.addEventListener('click', onMobileMenuBtnClick);
mobileMenuLine.addEventListener('click', onMobileMenuLineClick);

function onMobileMenuBtnClick() {
    mobileMenu.style.display = 'block';
    setTimeout(()=> {
        mobileMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        if(mobileMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    }, 1)
}

function onMobileMenuLineClick () {
    onMobileMenuBtnClick();
}

mobileMenuItem.addEventListener('click' , () => alert('its work'))

mobileMenu.addEventListener('touchend', function(e){
    if (e.changedTouches[0].clientY < e.target.clientHeight) {
        onMobileMenuBtnClick();
    }
    });