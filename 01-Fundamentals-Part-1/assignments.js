let country;
let continent;
let population;
let isIsland;
let language;

country = "Ireland";
continent = "Europe";
population = 5018969;
isIsland = true;

console.log("---------- ASSIGNMENTS ----------");
console.log(
  country +
    " is located in " +
    continent +
    " and its population is " +
    population.toLocaleString() +
    " as of Thursday, December 23, 2021."
);

if (isIsland) console.log(country + " is an island.");

language = "English";

console.log("The language spoken here is " + language + ".");

console.log(
  "Half of the population of Ireland is " +
    (population / 2).toLocaleString() +
    "."
);

population++;
console.log(
  "The population plus one citizen is " + population.toLocaleString() + "."
);
population--;

const finlandPopulation = 6000000;
if (population > finlandPopulation) {
  console.log("Yes, " + country + " has a bigger population.");
} else {
  console.log("No, Finland has a bigger population than " + country + ".");
}

const description =
  ">>>>> " +
  country +
  " is in " +
  continent +
  ", and its " +
  population.toLocaleString() +
  " people speak " +
  language +
  ".";

console.log(description);
