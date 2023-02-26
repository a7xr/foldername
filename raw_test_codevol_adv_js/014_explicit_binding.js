//// Implicit bindings
// const person = {
//     name: 'name001',
//     sayMyName: function () {
//         console.log(`My name is ${this.name}`)
//     },
// }
// 
// person.sayMyName()

const P = {
    name: "name002"
}

function saymynameexp() {
    console.log(`My name is ${this.name}`)
}

saymynameexp.call(P)
