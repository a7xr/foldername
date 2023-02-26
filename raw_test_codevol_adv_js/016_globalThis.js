globalThis.name = 'globalName001';
function sayMyName () {
    console.log(`GlobalNameThis: ${this.name}`);
}
sayMyName()
