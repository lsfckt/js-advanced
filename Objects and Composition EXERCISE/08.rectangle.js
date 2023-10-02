function rectangle(width, height, color) {

    color = color.split('');
    color[0] = color[0].toUpperCase();
    color = color.join('');

    const rectObj = {
        width,
        height,
        color,
        calcArea: function calcArea() {
            return area = width * height;
        }
    }

    return rectObj;

}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
// 4
// 5
// Red
// 20
