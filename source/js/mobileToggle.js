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
