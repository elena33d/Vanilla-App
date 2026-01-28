import headerTemplate from './partials/header.html';
import heroTemplate from './partials/hero.html';

const header = document.querySelector('.header');
const hero = document.querySelector('.hero');

header.innerHTML = headerTemplate;
hero.innerHTML = heroTemplate;
