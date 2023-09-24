function negativePositive(arr) {

    const newArr = [];

    arr.forEach(element => {
        if (element < 0) {
            newArr.unshift(element);
        } else {
            newArr.push(element);
        }
    });
    console.log(newArr.join('\n'));
}
negativePositive([7, -2, 8, 9]);
/**
-2
7
8
9
 */
negativePositive([3, -2, 0, -1]);
/**
-1
-2
3
0
 */