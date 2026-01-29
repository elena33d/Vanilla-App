const categoriesSection = document.querySelector('.categoriesSection');
const exercisesSection = document.querySelector('.exercisesSection');

document.addEventListener('click', event => {
  if (event.target.closest('.categoryCard')) {
    categoriesSection.classList.add('isHidden');
    exercisesSection.classList.remove('isHidden');
  }
});
