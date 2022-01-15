'use strict';

///////////////////////////////////////
// Selectors

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const slides = document.querySelectorAll('.slide');
const dotContainer = document.querySelector('.dots');
const sliderBtnLeft = document.querySelector('.slider__btn--left');
const sliderBtnRight = document.querySelector('.slider__btn--right');

///////////////////////////////////////
// Modal Window

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
// Learn More Button Smooth Scrolling

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
// Tabbed Component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  // if clicking on the parent element it returns null and generates an error message, this condition checks if is there any truthy value
  if (!clicked) return;

  // Removing the active classes from elements
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(tab =>
    tab.classList.remove('operations__content--active')
  );

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///////////////////////////////////////
// Menu Fade Animation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing an "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////////////////////
// Sticky Navigation Menu

// Using Intersection Observer API
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

///////////////////////////////////////
// Reveal Sections

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

///////////////////////////////////////
// Lazy Loading Images

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  // Remove blur filter
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  // Stop observing
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

///////////////////////////////////////
// Slider Component

const sliderComponent = function () {
  // Variables
  const maxSlide = slides.length;
  let curSlide = 0;

  // Functions
  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (sld, i) => (sld.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // Event Handlers
  sliderBtnRight.addEventListener('click', nextSlide);
  sliderBtnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
sliderComponent();

/*
///////////////////////////////////////
///////////////////////////////////////
// DIFFERENT WAYS TO DO...

// Page Navigation

document.querySelectorAll('.nav__link').forEach(el => {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

// Sticky Navigation Menu

// Using Intersection Observer API
const obsCallback = function (entries, observer) {
  entries.forEach(entry => console.log(entry));
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);

// Using window.addEventListener('scroll', ...)
const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function (e) {
  if (this.window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

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
*/
