const person = {
    name: 'name001',
    sayMyName: function () {
        console.log(`My name is ${this.name}`)
    },
}

person.sayMyName()
