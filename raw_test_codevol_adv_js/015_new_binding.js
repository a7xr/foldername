// New binding
function Person(name) {
      this.name = name;
}

const p1 = new Person('name001');
const p2 = new Person('name002');

console.log(p1.name, p2.name);
