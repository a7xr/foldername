const P = {
    name: "name001"
}

function saymyname () {
    console.log(`My name is ${this.name}`)
}

saymyname.call(P)
