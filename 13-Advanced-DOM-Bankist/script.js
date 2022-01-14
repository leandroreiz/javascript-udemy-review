'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

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
// Button Learn More Scrolling
btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
// Page Navigation

// Event delegation
// 1. add eventListener to common parent element
// 2. determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// LECTURES

/*

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

// document.documentElement.style.setProperty('--color-primary', 'orangered');

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
// logo.classList.add('a', 'b');
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();

// Remove all other classes
// logo.className = 'DontUseThis';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

btnScrollTo.addEventListener('click', e => {
  // Smooth Scrolling modern way
  section1.scrollIntoView({ behavior: 'smooth' });

  // Lecture //////
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (x/y):', window.scrollX, window.scrollY);
  // console.log(
  //   'Height/width viewport:',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  /////////////////

  // Smooth Scrolling old way
  // const s1coords = section1.getBoundingClientRect();
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });
});

///////////////////////////////////////
// EVENT LISTENERS

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert(`addEventListener: Great! You are reading the header!`);
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 3000);

// h1.onmouseenter = function (e) {
//   alert(`onmouseenter: Great! You are reading the header!`);
// };

// rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Link', e.target, e.currentTarget);
  console.log(
    `this keyword and e.currentTarget are the same?`,
    this === e.currentTarget
  );

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Links', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('Nav', e.target, e.currentTarget);
  }
  // true // listening for the capture events instead of bubbling events
);

///////////////////////////////////////
// Page Navigation

// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
*/

const h1 = document.querySelector('h1');

// Going Downwards: Selecting Child Elements
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children); // Only direct children
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going Upwards : Selecting Parent Elements
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going Sideways: Selecting Siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// Nodes
console.log(h1.previousSibling);
console.log(h1.nextSibling);

// If we need all the siblings
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    el.style.transform = 'scale(0.5)';
  }
});
