'use strict';

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

///////////////////////////////////////////////
// CHALLENGE #2
// For this challenge you will actually have to watch the video! Then, build the image loading functionality that I just showed you on the screen.

// Your tasks: Tasks are not super-descriptive this time, so that you can figure out some stuff by yourself. Pretend you're working on your own

// PART 1
// 1. Create a function 'createImage' which receives 'imgPath' as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path

// 2. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image (listen for the'error' event), reject the promise

// 3. If this part is too tricky for you, just watch the first part of the solution

// PART 2
// 4. Consume the promise using .then and also add an error handler

// 5. After the image has loaded, pause execution for 2 seconds using the 'wait' function we created earlier

// 6. After the 2 seconds have passed, hide the current image (set display CSS property to 'none'), and load a second image (Hint: Use the image element returned by the 'createImage' promise to hide the current image. You will need a global variable for that)

// 7. After the second image has loaded, pause execution for 2 seconds again

// 8. After the 2 seconds have passed, hide the current image

// Test data: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to “Fast 3G” in the dev tools Network tab, otherwise images load too fast

let currentImg;

const imagesContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath, className) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.className = className;

    // Check if the image was loaded
    img.addEventListener('load', () => {
      imagesContainer.append(img);
      resolve(img);
    });

    // Listen for errors
    img.addEventListener('error', () => {
      reject(new Error(`Image not found! [ ${img.src} ]`));
    });
  });
};

createImage(`img/img-1.jpg`)
  .then(img => {
    imagesContainer.append(img);
    currentImg = img;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage(`img/img-2.jpg`);
  })
  .then(img => {
    imagesContainer.append(img);
    currentImg = img;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err.message));

///////////////////////////////////////////////
// CHALLENGE #3

const path1 = `img/img-1.jpg`;
const path2 = `img/img-2.jpg`;
const path3 = `img/img-3.jpg`;

// PART 1
const loadNPause = async function (imgPath) {
  try {
    // Image 1
    let img = await createImage(path1);
    await wait(2);
    img.style.display = 'none';

    // Image 2
    img = await createImage(path2);
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(`🔴${err}`);
  }
};
// loadNPause();

// PART 2
const loadAll = async function (imgArr) {
  try {
    // Create images
    const imgs = imgArr.map(async path => await createImage(path));
    // Handling the array of Promises
    const imgsEl = await Promise.all(imgs);
    // Asign 'parallel' class to the images
    imgsEl.forEach(imgEl => imgEl.classList.add('parallel'));
  } catch (err) {
    console.error(`🔴${err}`);
  }
};
loadAll([path1, path2, path3]);
*/

///////////////////////////////////////////////
///////////////////////////////////////////////
// LECTURES ///////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

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
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////////////
// Render error message
const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////////////
// Function to get JSON
const getJSON = function (url, errorMessage = `Something went wrong!`) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);

    return response.json();
  });
};
/*
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

///////////////////////////////////////////////
// Consuming Promises with Async/Await
// Next ----->
///////////////////////////////////////////////
// Error handling With try...catch

const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    // Reverse geocoding
    const resGeocode = await fetch(
      `https://geocode.xyz/${lat},${lng}?json=1&auth=128527842171487e15815490x102441`
    );

    // Check if the location was successfully retrieved
    if (!resGeocode.ok) throw new Error(`📍Problem getting location!`);
    const dataGeo = await resGeocode.json();

    // Country data
    const resCountry = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );

    // Check if the country was returned with success
    if (!resCountry.ok) throw new Error(`📍Problem getting country!`);
    const data = await resCountry.json();

    // Render the country information
    renderCountry(data[0]);
  } catch (err) {
    console.error(`🟡 ${err}`);
    renderError(`🔴 Something went wrong! ${err.message}`);
  }
};
whereAmI();

const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmIOpen = async function () {
  try {
    // Geolocation
    const position = await getPosition();
    const { latitude, longitude } = position.coords;

    // Reverse geocoding
    const apiKey = '84f0ecbcde084cb5a85b43f4a3cb986f';
    const apiURL = 'https://api.opencagedata.com/geocode/v1/json';
    const requestURL =
      apiURL +
      '?' +
      'key=' +
      apiKey +
      '&q=' +
      encodeURIComponent(latitude + ',' + longitude) +
      '&pretty=1' +
      '&no_annotations=1';

    const resGeo = await fetch(requestURL);
    if (!resGeo.ok) throw new Error(`📍 Position not found!`);
    const dataGeo = await resGeo.json();
    const country = dataGeo.results[0].components.country;

    // Country data
    const requestURLCountry = `https://restcountries.com/v2/name/${country}`;
    const resCountry = await fetch(requestURLCountry);
    if (!resCountry.ok) throw new Error(`⛔ Country not found!`);
    const dataCountry = await resCountry.json();

    renderCountry(dataCountry[0]);
    return `${dataCountry[0].capital}, ${dataCountry[0].name}`;
  } catch (err) {
    console.error(`🔴 ${err}`);
    renderError(`🔴 ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

// console.log(`1: Will get location`);
// whereAmIOpen()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log(`3: Finished getting location`));

console.log(`1: Will get location`);
// async IIFE (Immediately Invoked Function Expression)
(async function () {
  try {
    const result = await whereAmIOpen();
    console.log(`2: ${result}`);
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log(`3: Finished getting location`);
})();

///////////////////////////////////////////////
// Running Promises in Parallel

const get3Countries = async function (c1, c2, c3) {
  try {
    const requestURL = `https://restcountries.com/v2/name/`;
    // const [data1] = await getJSON(`${requestURL}${c1}`);
    // const [data2] = await getJSON(`${requestURL}${c2}`);
    // const [data3] = await getJSON(`${requestURL}${c3}`);

    const data = await Promise.all([
      getJSON(`${requestURL}${c1}`),
      getJSON(`${requestURL}${c2}`),
      getJSON(`${requestURL}${c3}`),
    ]);
    console.log(data.map(country => country[0].capital));
  } catch (err) {
    console.log(err);
  }
};
get3Countries('portugal', 'canada', 'ireland');

///////////////////////////////////////////////
// Promise Combinators: race, allSettled and any

let requestURL = `https://restcountries.com/v2/name/`;

// Promise.race
// The fastest result will be fulfilled, only one result
(async function () {
  const res = await Promise.race([
    getJSON(`${requestURL}italy`),
    getJSON(`${requestURL}egypt`),
    getJSON(`${requestURL}mexico`),
  ]);
  console.log(res[0]);
})();

// Setting a timeout function to run against a getJSON
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error(`⌛Request timeout!`));
    }, sec * 1000);
  });
};

Promise.race([getJSON(`${requestURL}brazil`), timeout(1)])
  .then(data => console.log(data[0]))
  .catch(err => console.error(err));

// Promise.allSettled
// Returns an Array of all results for all Promises
Promise.allSettled([
  Promise.resolve(`Success`),
  Promise.reject(`ERROR`),
  Promise.resolve(`Another success`),
])
  .then(data => console.log(data))
  .catch(err => console.error(err));

// returns an ERROR
Promise.all([
  Promise.resolve(`Success`),
  Promise.reject(`ERROR`),
  Promise.resolve(`Another success`),
])
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Promise.any [ES2021]
// Return the first fulfilled Promise, ignore rejected Promises
Promise.any([
  Promise.resolve(`Success`),
  Promise.reject(`ERROR`),
  Promise.resolve(`Another success`),
])
  .then(data => console.log(data))
  .catch(err => console.error(err));
*/
