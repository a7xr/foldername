function f_hello (fc001) {
    console.log ('hello')
    fc001('name001')
}

f_hello((name) => {
    console.log (`This is inside the callback: ${name}`)
})
