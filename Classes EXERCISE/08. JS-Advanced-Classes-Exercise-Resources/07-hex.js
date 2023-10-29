class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    plus(number) {
        //This function should add a number or Hex object and return a new Hex object
        const newHex = this.value + number;
        return new Hex(newHex);
    }

    minus(number) {
        const newHex = this.value - number;
        return new Hex(newHex);
    }

    parse(hexadecimal) {
        return parseInt(hexadecimal, 16);
    }
}
let FF = new Hex(255);
console.log(FF.toString()); // 0XFF
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString()); // 0XF
console.log(a.plus(b).toString() === '0xF'); // true
console.log(FF.parse('AAA')); // 2730
