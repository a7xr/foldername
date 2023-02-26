class Person {
    constructor (fName, lName) {
        this.firstName = fName
        this.lastName = lName
    }
    sayMyName() {
        return this.firstName + ' ' + this.lastName
    }
}

const p1 = new Person('Bruce', "Wayne")
console.log(p1.sayMyName())
