const _ = require('lodash');

var foo = { a: "a property" };
var bar = { b: 4, c: "an other property" }

var result = _.assign({ a: "an old property" }, foo, bar);
console.log(result);
