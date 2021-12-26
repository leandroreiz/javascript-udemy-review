"use strict";
console.log("----- CHALLENGES -----");
//////////////////////////////////
// CHALLENGE #1
console.log("#1");
const calcAverage = (value1, value2, value3) => (value1 + value2 + value3) / 3;

// TEST DATA 1
// const dolphinsAverage = calcAverage(44, 23, 71);
// const koalasAverage = calcAverage(65, 54, 49);

// TEST DATA 2
const dolphinsAverage = calcAverage(85, 54, 41);
const koalasAverage = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    return `The Dolphins are the winners (${avgDolphins} vs. ${avgKoalas}).`;
  } else if (avgKoalas >= avgDolphins * 2) {
    return `The Koalas are the winners (${avgKoalas} vs. ${avgDolphins}).`;
  } else {
    return `No winners!`;
  }
}

console.log(checkWinner(dolphinsAverage, koalasAverage));

//////////////////////////////////
// CHALLENGE #2
console.log("#2");

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(tips, totals);

//////////////////////////////////
// CHALLENGE #3
console.log("#3");
