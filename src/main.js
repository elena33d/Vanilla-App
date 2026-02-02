import './css/styles.css';
import './js/filters';
import './js/categories';
import './js/exercises';

document.body.insertAdjacentHTML('beforeend', ratingTemplate);

document.addEventListener('click', event => {
  if (event.target.classList.contains('ratingBtn')) {
    closeModal();
    openRatingModal();
  }
});

document.body.insertAdjacentHTML('beforeend', modalTemplate);

document.addEventListener('click', event => {
  if (event.target.classList.contains('startBtn')) {
    openModal();
  }
});

const exercises = document.querySelector('.exercises');
exercises.innerHTML = exercisesTemplate;

const categories = document.querySelector('.categories');
categories.innerHTML = categoriesTemplate;

const filters = document.querySelector('.filters');
filters.innerHTML = filtersTemplate;

const header = document.querySelector('.header');
const hero = document.querySelector('.hero');

header.innerHTML = headerTemplate;
hero.innerHTML = heroTemplate;









