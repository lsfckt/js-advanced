class Circle {
    constructor(radius) { this.radius = radius; }

    set diameter(value) {
        if (value <= 0) {
            throw new Error('Diameter must be positive');
        }
        this.radius = value / 2;
    }
}
let c = new Circle(2);
c.diameter = -2;
console.log(`Radius: ${c.radius}`); // 0.8
console.log(`Diameter: ${c.diameter}`); // 1.6
console.log(`Area: ${c.area}`); // 2.0106…