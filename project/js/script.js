'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
        addForm = document.querySelector('form.add'),
        filmList = document.querySelector('.promo__interactive-list'),
        formInput = addForm.querySelector('.adding__input'),
        formCheckbox = addForm.querySelector('[type="checkbox"'),
        formSubmitButton = document.querySelector('.yes').nextElementSibling;    
    // Deleting all the AD
    const adRemove = (arr) => {
        arr.forEach(item =>{
            item.remove();
        });   
    };
    adRemove(adItems);
    
    const makeChanges = (text, background) => {
        text.innerHTML= 'Драма';
        background.style.backgroundImage = 'url("img/bg.jpg")';
    };
    makeChanges(heading, background);

    const sortArr = (arr) => {
        arr.sort();
    };
    sortArr(movieDB.movies);

    const formRefactor = (films, parent) => {
        // let moviesArr = movieDB.movies.map(item => item.toUpperCase()); // 1.
        parent.innerHTML = ''; // 3.
        
        films.forEach((item, i) => { // 4.
            parent.innerHTML += `
            <li class="promo__interactive-item">
            ${i+1}. ${item}
                <div class="delete"></div>
            </li>   
            `;
        });
        sortArr(movieDB.movies);
    };
    formRefactor(movieDB.movies, filmList);

    // Getting the value of input
    formSubmitButton.addEventListener('click', (event)=>{
        event.preventDefault(); // Preventing the page from reloading1.
    
        let inputValue = formInput.value;
        let favorite = formCheckbox.checked;

        if (inputValue) {
            if(inputValue.length>21) {
                inputValue = `${inputValue.substring(0,21)}...`;
            }
            if (favorite) {
                console.log('adding the new movie');
            }
            movieDB.movies.push(inputValue);
            sortArr(movieDB.movies);
            formRefactor(movieDB.movies, filmList);
            console.log(movieDB.movies);
        }
        // formRefactor(); // Repeating the sorting, cleaning and data generating.
    });


    document.querySelectorAll('.delete').forEach((item, i) => {
        // console.log(item);x
           item.addEventListener('click', () => {  
                // item.closest(".promo__interactive-item").remove();
                // movieDB.movies.splice(i, 1);       
                // item.remove();

                console.log(item);
                console.log(item.parentElement);
                console.log(`${item} - item`);
                console.log(`${item.parentElement} - item parent`);          
                // console.log(item.closest);
           });
    });
    
});