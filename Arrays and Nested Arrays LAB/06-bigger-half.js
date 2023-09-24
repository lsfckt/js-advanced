function biggerHalf(arr) {
    /** You are given an array of numbers. Write a JS function that sorts the array in ascending order and returns a new array,
     containing only the second half of the input. If there is an odd number of elements in the input, always take the bigger half.
     For example, if the input array contains 4 elements, the output should be 2, and if the input is 5 – the output is 3. */

    arr.sort((a, b) => a - b);
    const half = Math.ceil(arr.length / 2);

    const arrLength = arr.length;
    let newArr = [];

    if (arrLength % 2 === 0) {
        newArr = arr.slice(half);
    } else {
        newArr = arr.slice(half - 1);
    }
    
    return newArr;
}
biggerHalf([4, 7, 2, 5]);
// [5, 7]
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
// [7, 14, 19, 19]