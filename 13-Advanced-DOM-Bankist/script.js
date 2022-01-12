'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// LECTURES

///////////////////////////////////////
// SELECTING ELEMENTS
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
console.log(document.getElementById('section--1'));

const header = document.querySelector('.header');

// returns a node list
const allSections = document.querySelectorAll('.section');
console.log(allSections);
// --

// returns a HTML collection
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
console.log(document.getElementsByClassName('btn'));
// --

///////////////////////////////////////
// CREATING AND INSERTING ELEMENTS
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = `We use cookies for improved functionality and analytics.`;
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;
// header.prepend(message);
// header.append(message.cloneNode(true));
header.append(message);
// header.before(message);
// header.after(message);

///////////////////////////////////////
// DELETING ELEMENTS
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());
// Old way to remove an element would be selecting its parent
// .addEventListener('click', () => message.parentElement.removeChild(message));

///////////////////////////////////////
// STYLES
message.style.backgroundColor = '#37383d';
message.style.width = '104%';

console.log(message.style.color); // nothing is returned as it wasn't set as inline style
console.log(getComputedStyle(message).color); // rgb(187, 187, 187)
console.log(message.style.backgroundColor); // rgb(55, 56, 61)

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

///////////////////////////////////////
// ATTRIBUTES

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

// Non-standard property
console.log(logo.designer); // nothing is return
console.log(logo.getAttribute('designer'));
// --

// Set attributes
logo.alt = `Beautiful minimalist logo`;
logo.setAttribute('company', 'Bankist');

console.log(logo.src); // http://127.0.0.1:8080/img/logo.png
console.log(logo.getAttribute('src')); // img/logo.png

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // http://127.0.0.1:8080/#
console.log(link.getAttribute('href')); // #

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('a', 'b');
logo.classList.remove();
logo.classList.toggle();
logo.classList.contains();

// remove all other classes
// logo.className = 'DontUseThis';
