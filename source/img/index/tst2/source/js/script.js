import  steps  from "./data.js";

const cardList = document.querySelector('.cards__list')
const btnNext = document.querySelector('.control__button--next')
const btnPrev = document.querySelector('.control__button--prev')


for (let i = 0; i < steps.length; i++) {
    if( i == 0){
        cardList.innerHTML +=`
        <li class="cards__item" id="${steps[i].id}">
            <img class="cards__icon" width="152px" src="${steps[i].icon}">
            <h2 class="cards__title">${steps[i].headline}</h2>
            <p class="cards__text">${steps[i].text}</p>
        </li>
        `
    } else {
        cardList.innerHTML +=`
        <li class="cards__item cards__item--hide" id="${steps[i].id}">
            <img class="cards__icon" width="152px" src="${steps[i].icon}">
            <h2 class="cards__title">${steps[i].headline}</h2>
            <p class="cards__text">${steps[i].text}</p>
        </li>
   `
    }
}

const cardListItems = document.querySelectorAll('.cards__item')

let count = 0

btnNext.addEventListener('click', function () {
    if (count === cardListItems.length - 1) {
        btnNext.disabled = true;
        alert('Карточки закончились')
    } else {
        btnPrev.disabled = false;
        cardListItems[count].classList.add('cards__item--hide')
        count++
        cardListItems[count].classList.remove('cards__item--hide')
    }
})

btnPrev.addEventListener('click', function () {
    if (count <=0) {
        btnPrev.disabled = true;
        alert('Это первая карточка')
        count = 0
    } else {
        btnNext.disabled = false;
        cardListItems[count].classList.add('cards__item--hide')
        count--
        cardListItems[count].classList.remove('cards__item--hide')
    }

})