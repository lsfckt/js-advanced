function subSum(arr, ...indexes) {

    let [startIndex, endIndex] = indexes;

    if (Array.isArray(arr) == false) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }


    return arr
        .slice(startIndex, endIndex + 1)
        .map(Number)
        .reduce((a, b) => a + b, 0);

}
// console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300)); //150
// console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)); //3.3
// console.log(subSum([], 1, 2)); //0
// console.log(subSum('text', 0, 2)); //NaN