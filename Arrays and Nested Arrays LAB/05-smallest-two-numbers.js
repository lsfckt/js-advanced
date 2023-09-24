function smallestNumbers(arr) {
    
    arr.sort((a, b) => a - b);
    const smallest = arr.slice(0, 2);

    return smallest.join(' ');

}
smallestNumbers([30, 15, 50, 5]);
// 5 15
smallestNumbers([3, 0, 10, 4, 7, 3]);
// 0 3