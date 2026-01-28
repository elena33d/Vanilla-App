import headerTemplate from './partials/header.html';
import heroTemplate from './partials/hero.html';
import filtersTemplate from './partials/filters.html';
import './js/filters';

const filters = document.querySelector('.filters');
filters.innerHTML = filtersTemplate;

const header = document.querySelector('.header');
const hero = document.querySelector('.hero');

header.innerHTML = headerTemplate;
hero.innerHTML = heroTemplate;


