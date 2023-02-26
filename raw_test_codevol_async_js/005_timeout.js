setTimeout(
    function greet() {
        console.log('Hello')
        setTimeout(greet, 200)
    }
, 10000)
