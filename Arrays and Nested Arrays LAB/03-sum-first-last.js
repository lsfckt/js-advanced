function sumFirstLast(arr) {

    const arrToNumber = arr.map((x) => Number(x));

    const first = arrToNumber.shift();
    const last = arrToNumber.pop();

    const sum = first + last;
    console.log(sum);

}
sumFirstLast(['20', '30', '40']);
// 60
sumFirstLast(['5', '10']);
// 15