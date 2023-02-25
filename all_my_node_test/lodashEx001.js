// https://medium.com/voobans-tech-stories/10-lodash-functions-everyone-should-know-334b372aec5d

const _ = require("lodash");

var foo = { a: "a property" };
var bar = { b: 4, c: "an other property" };

var result = _.assign({ a: "an old property" }, foo, bar);
// console.log(result); // { a: 'a property', b: 4, c: 'an other property' }

function getRandomInteger() {
  return Math.round(Math.random() * 100);
}

var result = _.times(5, getRandomInteger);
// console.log(result); // [ 8, 57, 43, 67, 98 ]

var users = [
  { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
  { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
  { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
  { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" },
];

var user = _.find(users, { lastName: "Doe", gender: "male" });
// console.log(user); // { firstName: 'John', lastName: 'Doe', age: 28, gender: 'male' }

var underAgeUser = _.find(users, function (user) {
  return user.age < 18;
});
// console.log(underAgeUser); // { firstName: 'Jane', lastName: 'Doe', age: 5, gender: 'female' }

var bar = { foo: { key: "foo" } };
_.set(bar, "foo.items[0]", "An item");
// console.log(bar); // bar => { foo: { key: "foo", items: ["An item"] } }
var name = _.get(bar, "name", "John Doe");
// console.log(name); // name => John Doe

var posts = [
  { id: "1abc", title: "First blog post", content: "..." },
  { id: "2abc", title: "Second blog post", content: "..." },
  // more blog posts
  { id: "34abc", title: "The blog post we want", content: "..." },
  // even more blog posts
];

posts = _.keyBy(posts, "id");

var post = posts["34abc"];
// console.log(post); // { id: '34abc', title: 'The blog post we want', content: '...' }

var users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 28 },
  { name: "Bill", age: 65 },
  { name: "Emily", age: 17 },
  { name: "Jack", age: 30 },
];

var reducedUsers = _.reduce(
  users,
  function (result, user) {
    if (user.age >= 18 && user.age <= 59) {
      (result[user.age] || (result[user.age] = [])).push(user);
    }

    return result;
  },
  {}
);
// console.log(reducedUsers);
// // {
// //     '28': [ { name: 'Jane', age: 28 } ],
// //     '30': [ { name: 'John', age: 30 }, { name: 'Jack', age: 30 } ]
// //   }

var original = { foo: "bar" };
var copy = original;
copy.foo = "new value";
// copy -> { foo: "new value" } Yeah!
// original -> { foo: "new value" } Oops!

var original = { foo: "bar" };
var copy = _.cloneDeep(original);
copy.foo = "new value";
// copy -> { foo: "new value" } Yeah!
// original -> { foo: "bar" } Yeah!

var sortedArray = [1, 1, 2, 3, 3, 3, 5, 8, 8];
var result = _.sortedUniq(sortedArray);
console.log(result);
