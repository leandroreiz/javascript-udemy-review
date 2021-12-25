console.log("---------- CHALLENGES ----------");
/*
////////////////////////////////
// CHALLENGE #1
// TEST DATA 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// TEST DATA 2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

////////////////////////////////
// CHALLENGE #2
if (markHigherBMI) {
  console.log(
    `Mark's BMI (${BMIMark.toFixed(
      1
    )}) is higher than John's (${BMIJohn.toFixed(1)})!`
  );
} else {
  console.log(
    `John's BMI (${BMIJohn.toFixed(
      1
    )}) is higher than Mark's (${BMIMark.toFixed(1)})!`
  );
}

////////////////////////////////
// CHALLENGE #3
// TEST DATA
const scoreDolphins = [96, 108, 89];
const scoreKoalas = [88, 91, 110];

// TEST DATA BONUS 1
// const scoreDolphins = [97, 112, 101];
// const scoreKoalas = [109, 95, 123];

// TEST DATA BONUS 2
// const scoreDolphins = [97, 112, 101];
// const scoreKoalas = [109, 95, 106];

let scoreAverage = 0;
for (let i = 0; i < scoreDolphins.length; i++) {
  scoreAverage += scoreDolphins[i];
}
const averageDolphins = scoreAverage / 3;
console.log(averageDolphins);

scoreAverage = 0;
for (let i = 0; i < scoreKoalas.length; i++) {
  scoreAverage += scoreKoalas[i];
}
const averageKoalas = scoreAverage / 3;
console.log(averageKoalas);

if (
  averageDolphins === averageKoalas &&
  averageDolphins >= 100 &&
  averageKoalas >= 100
) {
  console.log(`DRAW!`);
} else if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log(`The Dolphins are the winners!`);
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
  console.log(`The Koalas are the winners!`);
} else {
  console.log(
    `No team reached the minimum average score of 100. No winners this time!`
  );
}
*/
////////////////////////////////
// CHALLENGE #4
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
);
