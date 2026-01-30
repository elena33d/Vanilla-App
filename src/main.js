import headerTemplate from './partials/header.html';
import heroTemplate from './partials/hero.html';
import filtersTemplate from './partials/filters.html';
import './js/filters';
import categoriesTemplate from './partials/categories.html';
import './js/categories';
import exercisesTemplate from './partials/exercises.html';
import './js/exercises';
import modalTemplate from './partials/modal-exercise.html';
import { openModal } from './js/modal-exercise';
import ratingTemplate from './partials/modal-rating.html';
import { openRatingModal } from './js/modal-rating';
import { closeModal } from './js/modal-exercise';

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








