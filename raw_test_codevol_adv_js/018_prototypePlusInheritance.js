function Person (fname, lname) {
    this.firstName = fname
    this.lastName = lname
}

const person1 = new Person('Bruce', 'Wayne');
const person2 = new Person('Tony', 'Stark');

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName
}

function SuperHero(fName, lName) {
    // Below is the code instance of usage "extends" in other language
    Person.call(this, fName, lName)
    this.isSuperHero = true
}
SuperHero.prototype = Object.create(Person.prototype)
SuperHero.prototype.constructor = SuperHero

SuperHero.prototype.fightCrime = function() {
    console.log(`${this.name} is Fighting crime`)
}

console.log(`Person1: ${person1.getFullName()}`)
console.log(`Person2: ${person2.getFullName()}`)


const spiderman = new SuperHero('Tony', 'Parker');
console.log(`${spiderman.firstName} is the name of Spiderman`)
