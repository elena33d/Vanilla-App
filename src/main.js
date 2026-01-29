import headerTemplate from './partials/header.html';
import heroTemplate from './partials/hero.html';
import filtersTemplate from './partials/filters.html';
import './js/filters';
import categoriesTemplate from './partials/categories.html';
import './js/categories';
import exercisesTemplate from './partials/exercises.html';
import './js/exercises';

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






