// YT(Advanced JavaScript Crash Course _ channel:Codevolution)

function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}

const fn = outer()
fn()
fn ()
