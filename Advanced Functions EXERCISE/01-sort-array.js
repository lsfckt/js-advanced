function sortArray(arr, arg) {

    let output;

    if (arg === 'asc') {
        output = arr.sort((a, b) => a - b);
    } else {
        output = arr.sort((a, b) => b - a);
    }
    return output;
}
sortArray([14, 7, 17, 6, 8], 'asc');
// [6, 7, 8, 14, 17]
sortArray([14, 7, 17, 6, 8], 'desc');
// [17, 14, 8, 7, 6]