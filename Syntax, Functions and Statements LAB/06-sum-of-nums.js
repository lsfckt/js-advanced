function sumOfNumbers(first, second) {

    first = +first;
    second = +second;

    let sum = 0;

    for (let i = first; i <= second; i++) {
        sum += i;
    }
    console.log(sum);
}
sumOfNumbers('1', '5')