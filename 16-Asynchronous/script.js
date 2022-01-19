'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////////////
// Render the cards on screen
const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
            +data.population / 1000000
          ).toFixed(1)} million people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>${
            data.region === 'Europe' ? '💶' : '💵'
          }</span>${data.currencies[0].name}</p>
        </div>
      </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

///////////////////////////////////////////////
// Render error message
const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  // countriesContainer.style.opacity = 1;
};
/*
///////////////////////////////////////////////
// Function to get JSON
const getJSON = function (url, errorMessage = `Something went wrong!`) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);

    return response.json();
  });
};

///////////////////////////////////////////////
// Using XMLHttpRequest
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    renderCountry(data);

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
// getCountryData('germany');

///////////////////////////////////////////////
// Callback Hell
const getCountryAndNeighbour = function (country) {
  // AJAX main country
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    // Render main country
    renderCountry(data);

    // Get neighbour
    const [neighbour] = data.borders;
    if (!neighbour) return;

    // AJAX neighbour
    const requestNeighbour = new XMLHttpRequest();
    requestNeighbour.open(
      'GET',
      `https://restcountries.com/v2/alpha/${neighbour}`
    );
    requestNeighbour.send();

    requestNeighbour.addEventListener('load', function () {
      const dataNeighbour = JSON.parse(this.responseText);

      // Render neighbour
      renderCountry(dataNeighbour, 'neighbour');
    });
  });
};
// getCountryAndNeighbour('brazil');

///////////////////////////////////////////////
// Promisses and Fetch API
const getCountryDataPromise = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};
// getCountryDataPromise('portugal');

const getCountryAndNeighbourPromise = function (country) {
  // Main country
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`Country not found! (${response.status})`);
      }

      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);

      // Neighbour
      // const neighbour = data[0].borders[0];
      const neighbour = 'asdqwes';

      if (!neighbour) return;

      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      // Handling the error
      console.error(`${err} 😭😭😭`);
      renderError(`Something went wrong! ${err.message}.`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
// getCountryAndNeighbourPromise('usa');

///////////////////////////////////////////////
// Handling Rejected Promises (catch)

// btn.addEventListener('click', function () {
//   getCountryAndNeighbourPromise('usa');
// });
// getCountryAndNeighbourPromise('asdjhgf');

const getCountryAndNeighbourError = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found!`)
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error(`No neighbour found!`);

      getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        `Country not found!`
      ).then(data => renderCountry(data, 'neighbour'));
    })
    .catch(err => {
      // Handling the error
      console.error(`${err} 😭😭😭`);
      renderError(`Something went wrong! ${err.message}.`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryAndNeighbourError('romania');
});

///////////////////////////////////////////////
// The Event Loop in Practice
// 1. top level code will be printed first
// 2. then the Event Loop will check the Microtasks Queue
// 3. and last the Callback Queue will be checked and executed

console.log(`Test Start`);

setTimeout(() => {
  console.log(`0 sec timer`);
}, 0);

Promise.resolve('Resolved Promise 1').then(res => console.log(res));

Promise.resolve('Resolved Promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});

console.log(`Test End`);
 

///////////////////////////////////////////////
// Building a simple Promise

const lotteryPromise = new Promise(function (resolve, reject) {
  console.warn(`Lottery draw is happening...`);
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve(`You WIN 🤑`);
    } else {
      reject(new Error(`You lost your money 😭`));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log(`I waited for 1 seconds`);
    return wait(1);
  })
  .then(() => {
    console.log(`I waited for 2 seconds`);
    return wait(1);
  })
  .then(() => {
    console.log(`I waited for 3 seconds`);
    return wait(1);
  })
  .then(() => console.log(`I waited for 4 seconds`));

Promise.resolve('Excuted immediately!').then(x => console.log(x));
Promise.reject(new Error(`Problem!`)).catch(x => console.error(x));

///////////////////////////////////////////////
// Promisifying the Geolocation API

const getPosition = () => {
  return new Promise((resolve, reject) => {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject); // same
  });
};

const getCountryChallenge = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found! (${response.status})`);
      return response.json();
    }) // Doesn't work when using { }
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`Something went wrong! ${err.message}`));
};

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://geocode.xyz/${lat},${lng}?json=1&auth=128527842171487e15815490x102441`
      );
    })
    .then(response => {
      if (!response.ok) throw new Error(`Too many requests! 😭`);
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}.`);
      getCountryChallenge(data.country);
    })
    .catch(err => console.error(err.message))
    .finally(() => (countriesContainer.style.opacity = 1));
};

// Event handler
btn.addEventListener('click', whereAmI);
*/

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
// CODING CHALLENGES: ASYNCHRONOUS JAVASCRIPT
///////////////////////////////////////////////
// CHALLENGE #1
/*
// In this challenge you will build a function 'whereAmI' which renders a country only based on GPS coordinates. For that, you will use a second API to geocode coordinates. So in this challenge, you’ll use an API on your own for the first time.

// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat') and a longitude value ('lng') (these are GPS coordinates, examples are in test data below).

// 2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do not use the 'getJSON' function we created, that is cheating.

// 3. Once you have the data, take a look at it in the console to see all the attributes that you received about the provided location. Then, using this data, log a message like this to the console: “You are in Berlin, Germany”

// 4. Chain a .catch method to the end of the promise chain and log errors to the console

// 5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does not reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message

// `https://geocode.xyz/${lat},${lng}?json=1&auth=128527842171487e15815490x102441`
// `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`

const getCountryChallenge = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found! (${response.status})`);
      return response.json();
    }) // Doesn't work when using { }
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`Something went wrong! ${err.message}`));
};

const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?json=1&auth=128527842171487e15815490x102441`
  )
    .then(response => {
      if (!response.ok) throw new Error(`Too many requests! 😭`);
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}.`);
      getCountryChallenge(data.country);
    })
    .catch(err => console.error(err.message))
    .finally(() => (countriesContainer.style.opacity = 1));
};

// Event handler
btn.addEventListener('click', () => {
  whereAmI(52.508, 13.381);
  whereAmI(19.037, 72.873);
  whereAmI(-33.933, 18.474);
});

// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.

// 7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code).

// Test data:
// § Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// § Coordinates 2: 19.037, 72.873
// § Coordinates 3: -33.933, 18.474
*/

///////////////////////////////////////////////
// CHALLENGE #2
// For this challenge you will actually have to watch the video! Then, build the image loading functionality that I just showed you on the screen.

// Your tasks: Tasks are not super-descriptive this time, so that you can figure out some stuff by yourself. Pretend you're working on your own

// PART 1
// 1. Create a function 'createImage' which receives 'imgPath' as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path

const imagesContainer = document.querySelector('.images');
let img;

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve) {
    img = document.createElement('img');
    img.src = imgPath;
    resolve(img);
  });
};

createImage(`img/img-1.jpg`)
  .then(res => {
    return new Promise(function (resolve, reject) {
      // check if the image was loaded
      window.addEventListener('load', event => {
        if (img.complete) {
          resolve(imagesContainer.insertAdjacentElement('afterbegin', img));
        }
      });

      // listen for errors
      window.addEventListener('error', event => {
        reject(new Error(`The image couldn't be loaded! ⛔`));
      });
    });
  })
  .catch(err => console.error(`Image load error [${err.message}]`));

wait(2)
  .then(() => {
    img.style.display = 'none';
    return wait(2);
  })
  .then(() => {
    img.src = `img/img-2.jpg`;
    img.style.display = 'flex';
    return wait(2);
  })
  .then(() => {
    img.style.display = 'none';
  });

// 2. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image (listen for the'error' event), reject the promise

// 3. If this part is too tricky for you, just watch the first part of the solution

// PART 2
// 4. Consume the promise using .then and also add an error handler

// 5. After the image has loaded, pause execution for 2 seconds using the 'wait' function we created earlier

// 6. After the 2 seconds have passed, hide the current image (set display CSS property to 'none'), and load a second image (Hint: Use the image element returned by the 'createImage' promise to hide the current image. You will need a global variable for that)

// 7. After the second image has loaded, pause execution for 2 seconds again

// 8. After the 2 seconds have passed, hide the current image

// Test data: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to “Fast 3G” in the dev tools Network tab, otherwise images load too fast
