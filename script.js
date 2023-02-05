'use strict'

const body = document.getElementsByTagName('body')[0];
const innovationBtn = document.querySelector('.innovations-btn')
const mobileMenuBtn = document.querySelector('.header__menu-mobile-btn');
const mobileMenu = document.querySelector('.header__menu-mobile');
const mobileMenuLine = document.querySelector('.header__menu-mobile-separator');
const pressImage = document.querySelectorAll('.press__image-item');
const pressImageContainer = document.querySelectorAll('.press__image');
const pressContainer = document.querySelector('.press');

mobileMenuBtn.addEventListener('click', onMobileMenuBtnClick);
mobileMenuLine.addEventListener('click', onMobileMenuLineClick);
mobileMenu.addEventListener('touchend', onMobileMenuSwypeUp);
pressContainer?.addEventListener('click', onPressContainerClick);
// pressImageEventListener();

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

function onMobileMenuSwypeUp (e) {
    if (e.changedTouches[0].clientY < e.target.clientHeight) {
        onMobileMenuBtnClick();
    }
}
// mobileMenu.addEventListener('touchend', function(e){
//     if (e.changedTouches[0].clientY < e.target.clientHeight) {
//         onMobileMenuBtnClick();
//     }
//     });

// pressImage.addEventListener('click', onPressImageClick);

// function onPressImageClick(e) {
//     e.target.classList.toggle("active");
// }

function onPressContainerClick(e) {
    if(e.target.classList.contains('press__image-block')
        || e.target === pressContainer) {

        pressImageContainer.forEach(elem => {
            if(elem.classList.contains('active')){
                elem.classList.remove('active');
            } 
        });

        // pressImage.forEach((elem) => {
        //     if(elem.classList.contains('active')){
        //         elem.classList.remove('active');
        //         setTimeout(() => { 
        //             elem.classList.remove('index')
        //         },300)
        //     } 
        // });
    }
    
    if(e.target.classList.contains("press__image-item")) {
        pressImageContainer.forEach(elem => {
            if(elem.classList.contains('active')){
                elem.classList.remove('active');
            } 
        });

        const parent = e.target.parentElement;
        parent.classList.toggle("active");
    }
}
