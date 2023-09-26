function sortingNumbers(arr) {

    arr.sort((a, b) => a - b);
    const newArr = [];

    while (arr.length != 0) {
        const firstEl = arr.shift();
        const lastEl = arr.pop();

        newArr.push(firstEl, lastEl);
    }
    return newArr;
}
let result = sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
// [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
console.log(result);