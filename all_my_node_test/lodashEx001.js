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
// console.log(result);

var users = [
  { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
  { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
  { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
  { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" },
];

var user = _.find(users, { lastName: "Doe", gender: "male" });
console.log(user);

var underAgeUser = _.find(users, function(user) {
	return user.age < 18;
});
console.log(underAgeUser);