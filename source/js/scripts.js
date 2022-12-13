const navMain = document.querySelector('.page-header__nav');
const navToggle = document.querySelector('.page-header__toogle');

navMain.classList.remove('page-header__toogle--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('page-header__toogle--closed')) {
    navMain.classList.remove('page-header__toogle--closed');
    navMain.classList.add('page-header__toogle--opened');
  } else {
    navMain.classList.remove('page-header__toogle--opened');
    navMain.classList.add('page-header__toogle--closed');
  }
})

const compare = document.querySelector('.example__compare');
const btnBefore = compare.querySelector('.example__control-text--before');
const btnAfter = compare.querySelector('.example__control-text--after');
const imgBefore = compare.querySelector('.example__demo--before');
const imgAfter = compare.querySelector('.example__demo--after');
const range = compare .querySelector('.example__range');

range.addEventListener('input', function() {
  imgBefore.style.width = (100 - range.value) + '%';
  imgAfter.style.width = range.value + '%';
})

btnBefore.addEventListener('click', function () {
  imgBefore.style.width = '100%';
  imgAfter.style.width = '0%';
  range.value = 0;
})
btnAfter.addEventListener('click', function () {
  imgBefore.style.width = '0%';
  imgAfter.style.width = '100%';
  range.value = 100;
})
