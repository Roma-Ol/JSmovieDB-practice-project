'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// Variables 2 w3k w/
let adItems = document.querySelectorAll('.promo__adv img'),
    background = document.querySelector('.promo__bg'),
    heading = background.querySelector('.promo__genre'),
    filmList = document.querySelector('.promo__interactive-list'),
    formInput = document.querySelector('.adding__input'),
    formYesCheckbox = document.querySelector('.yes'),
    formSubmitButton = document.querySelector('.yes').nextElementSibling,
    inputValue = formInput.value;

// Deleting all the AD
adItems.forEach(item =>{
    item.remove();
});

// Changing the header
heading.innerHTML= 'Драма';

// Changing the BG
background.style.backgroundImage = 'url("img/bg.jpg")';

formRefactor();

// Form basic behaviour
// 1. Creating new uppercase arr.
// 2. Sort arr.
// 3. Clean the default
// 4. Generate new html
function formRefactor() {
    let moviesArr = movieDB.movies.map(item => item.toUpperCase()); // 1.
    moviesArr.sort(); // 2.
    filmList.innerHTML = ''; // 3.

    moviesArr.forEach((item, i) => { // 4.
        filmList.innerHTML += `
        <li class="promo__interactive-item">
        ${i+1}. ${item}
            <div class="delete"></div>
        </li>   
        `;
    });
}


// Getting the value of input
formSubmitButton.addEventListener('click', (event)=>{
    event.preventDefault(); // Preventing the page from updating.

    let inputValue = formInput.value;

    if(inputValue.length>21){
        let newInputValue = inputValue.substring(0, 21) + "..."; // Cropping it.
        movieDB.movies.push(newInputValue);// Push new inputValue.
    } else {
        movieDB.movies.push(inputValue); // Push inputValue standart.
    }

    formRefactor(); // Repeating the sorting, cleaning and data generating.
});