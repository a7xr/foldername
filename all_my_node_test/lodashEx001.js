// https://medium.com/voobans-tech-stories/10-lodash-functions-everyone-should-know-334b372aec5d

const _ = require("lodash");

var foo = { a: "a property" };
var bar = { b: 4, c: "an other property" };

var result = _.assign({ a: "an old property" }, foo, bar);
// console.log(result);

function getRandomInteger() {
  return Math.round(Math.random() * 100);
}

var result = _.times(5, getRandomInteger);
console.log(result);
