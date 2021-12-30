///////////////////////////////////
// SCOPE IN JAVASCRIPT

'use strict';

const currentYear = new Date().getFullYear();

function calcAge(birthYear) {
  const age = currentYear - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age} and born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // creating NEW variable with same name as outer scope's variable
      const firstName = 'Jonas';

      const str = `Oh, you're a millenial, ${firstName}.`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      // reassigning outer scope's variable
      output = 'NEW OUTPUT!';
    }
    // console.log(str); // reference error
    console.log(millenial); // var variables are func scoped
    // console.log(add(2, 3)); // reference error if using strict, works if not
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Leandro';
calcAge(1983);
// console.log(age); // reference error
// printAge(); // reference error
