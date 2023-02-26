// https://github.com/jamesqquick/javascript-array-functions-practice
// https://www.youtube.com/watch?v=3LOEGS4qcRM&list=PLDlWc9AfQBfZGZXFb_1tcRKwtCavR7AfT
// YT(JavaScript Array Filter Method Practice in 5 Minutes)
const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

// FILTER
// Get characters with mass greater than 100
const great100Characters = characters.filter((character) => {
  return character.mass > 100;
});
// console.log(great100Characters);

// Get characters with height less than 200
const less100Characters = characters.filter((character) => {
  return character.height < 200;
});
// console.log(less100Characters);

// Get all male characters
const maleCharacters = characters.filter((character) => {
  return character.gender === "male";
});
// console.log(maleCharacters);

// Get all female characters

// MAP
// Get an array of all names
const allNames = characters.map((character) => {
  return character.name;
});
// console.log(allNames);

// Get an array of all heights
const allHeight = characters.map((character) => {
  return character.height;
});
// console.log(allHeight);
// Get an array of objects with just name and height properties
// Get an array of all first names

// SOME
// Is there at least one male character?
const someMale = characters.some((c) => {
  return c.gender === "male";
});
// console.log(someMale);

// Is there at least one character with blue eyes?
const someBlueEye = characters.some((c) => {
  return c.eye_color === "blue";
});
// console.log(someBlueEye);

// Is there at least one character taller than 200?
const tallerThan200 = characters.some((c) => {
  return c.height > 200;
});
// console.log(tallerThan200);
// Is there at least one character that has mass less than 50?

// SORT
// Sort by mass
const byMass = characters.sort((a, b) => {
  return a.mass - b.mass;
});
// console.log(byMass);

// Sort by name
const byName = characters.sort((a, b) => {
  if (a.name < b.name) return -1;
  return 1;
});
// console.log(byName);

// Sort by height
// Sort by gender

// REDUCE
// Get the total mass of all characters
const totalMass = characters.reduce((acc, cur) => {
  return acc + cur.mass;
}, 0);
// console.log(totalMass);

// Get the total height of all characters
// Get the total number of characters in all the character names
// Get the total number of characters by eye color (hint. a map of eye color to count)
const charactersByEyeColor = characters.reduce((acc, cur) => {
  if (acc[cur.eye_color]) {
    acc[cur.eye_color] += 1;
  } else {
    acc[cur.eye_color] = 1;
  }
  return acc;
}, {});
console.log(charactersByEyeColor);

// EVERY
// Does every character have blue eyes?
// Does every character have mass more than 40?
// Is every character shorter than 200?
// Is every character male?
