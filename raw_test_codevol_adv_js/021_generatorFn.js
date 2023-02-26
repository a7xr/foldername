function* generatorFn() {
    yield 'Hello'
    yield 'World'
}

const generatorObject = generatorFn() 
for (const word of generatorObject) {
    console.log(word)
}
