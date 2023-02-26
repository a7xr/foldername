function Person (fname, lname) {
    this.firstName = fname
    this.lastName = lname
}

const person1 = new Person('Bruce', 'Wayne');
const person2 = new Person('Tony', 'Stark');

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName
}

console.log(person1.getFullName())
console.log(person2.getFullName())
