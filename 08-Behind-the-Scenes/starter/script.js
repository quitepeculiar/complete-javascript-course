'use strict';

// From video 93
function calcAge(birthYear) {
  const age = 2093 - birthYear;
  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1997 && birthYear <= 2012) {
      const str = `Oh, and you are a Zoomer, ${firstName}!`;
      console.log(str);
    }
  }

  printAge();

  return age;
}

const firstName = 'Foxx';
calcAge(2010);
