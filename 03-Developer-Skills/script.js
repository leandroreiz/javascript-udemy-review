// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// 1) Understanding the problem
// tempAmplitude = tempMax - tempMin

// With:
// A: amplitude of the temperature over the time period to be calculated
// Tmax: highest temperature in the required time period
// Tmin: the lowest temperature in the time period to be calculated

// 2) Breaking up into sub-problems

// a) Calculate the max temperature
// b) Calculate the min temperature
// c) Create a func to calc the amplitude
// d) Deal with sensor errors

// PROBLEM 2:
// Function should now receive 2 arrays with temperatures

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

let tempMin = temperatures[0];
let tempMax = temperatures[0];

const calcTempAmplitude = function (primaryArr, secondaryArr) {
  // e) Merge both arrays
  const temps = [].concat(primaryArr, secondaryArr);

  for (let i = 0; i < temps.length; i++) {
    // d) Deal with sensor errors
    if (temps[i] === 'error') continue;

    // a) Calculate the max temperature
    if (temps[i] > tempMax) tempMax = temps[i];

    // b) Calculate the min temperature
    if (temps[i] < tempMin) tempMin = temps[i];
  }

  // c) Create a func to calc the amplitude
  return tempMax - tempMin;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(`The temperature amplitude is ${amplitude} degrees celsius.`);

// Identify, Find, Fix, Prevent

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees Celsius: ')),
    value: 10,
  };

  console.table(measurement);

  // debugger;
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

//////////////////////////
// CHALLENGE

// TEST DATA
const t1 = [17, 21, 23];
const t2 = [12, 5, -5, 0, 4];

const printForecast = function (maxTemps) {
  let outputString = '... ';

  for (let i = 0; i < maxTemps.length; i++) {
    outputString += `${maxTemps[i]}℃ in ${i + 1} ${
      i + 1 === 1 ? 'day' : 'days'
    } ... `;
  }

  console.log(outputString);
};

printForecast(t1);
printForecast(t2);
