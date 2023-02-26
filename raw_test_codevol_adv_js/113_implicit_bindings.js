const person = {
    name: 'name001',
    sayname: function () {
        console.log(`My name is ${this.name}`)
    }
}

person.sayname();
