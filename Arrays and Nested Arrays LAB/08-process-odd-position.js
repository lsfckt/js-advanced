function processOddPositions(arr) {
// You are given an array of numbers. Write a JS function that returns the elements at odd positions from the array,
// doubled and in reverse order.
    const oddArr = [];

    for (let i = 1; i < arr.length; i += 2) {
        oddArr.push(arr[i]);
    }

    const newArr = oddArr.map((x) => x * 2);
    newArr.reverse();

    console.log(newArr.join(' '));

}
processOddPositions([10, 15, 20, 25]);
// 50 30
processOddPositions([3, 0, 10, 4, 7, 3]);
// 6 8 0