"use strict";

const body = document.getElementsByTagName("body")[0];
const innovationBtn = document.querySelector(".innovations-btn");
const mobileMenuBtn = document.querySelector(".header__menu-mobile-btn");
const mobileMenu = document.querySelector(".header__menu-mobile");
const mobileMenuLine = document.querySelector(".header__menu-mobile-separator");
const pressImage = document.querySelectorAll(".press__image-item");
const pressImageContainer = document.querySelectorAll(".press__image");
const pressContainer = document.querySelector(".press");

mobileMenuBtn.addEventListener("click", onMobileMenuBtnClick);
mobileMenuLine.addEventListener("click", onMobileMenuLineClick);
mobileMenu.addEventListener("touchend", onMobileMenuSwypeUp);
pressContainer?.addEventListener("click", onPressContainerClick);

function onMobileMenuBtnClick() {
  mobileMenu.style.display = "block";
  setTimeout(() => {
    mobileMenu.classList.toggle("active");
    mobileMenuBtn.classList.toggle("active");
    if (mobileMenu.classList.contains("active")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, 1);
}

function onMobileMenuLineClick() {
  onMobileMenuBtnClick();
}

function onMobileMenuSwypeUp(e) {
  if (e.changedTouches[0].clientY < e.target.clientHeight) {
    onMobileMenuBtnClick();
  }
}

function onPressContainerClick(e) {
  if (
    e.target.classList.contains("press__image-block") ||
    e.target === pressContainer
  ) {
    pressImageContainer.forEach((elem) => {
      if (elem.classList.contains("active")) {
        elem.classList.remove("active");
      }
    });
  }

  if (e.target.classList.contains("press__image-item")) {
    pressImageContainer.forEach((elem) => {
      if (elem.classList.contains("active")) {
        elem.classList.remove("active");
      }
    });

    const parent = e.target.parentElement;
    parent.classList.toggle("active");
  }
}
