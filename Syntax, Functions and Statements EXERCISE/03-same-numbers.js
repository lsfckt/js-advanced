function sameNumbers(num) {

    const arr = num
    .toString()
    .split('')
    .map((x) => Number(x));
    const sum = arr.reduce((a, b) => a + b);

    let isSame = true;

    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] !== arr[i + 1]) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);

}
sameNumbers(2222222);
// true
sameNumbers(1234);
// false