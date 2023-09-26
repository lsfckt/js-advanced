function extract(arr) {

    let biggest = 0;
    const newArr = [];

    arr.forEach(el => {
        if (el >= biggest) {
            biggest = el;
            newArr.push(biggest);
        }
    });
    return newArr;
}
extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// [1, 3, 8, 10, 12, 24]

extract([1, 2, 3, 4]);
// [1, 2, 3, 4]

extract([20, 3, 2, 15, 6, 1]);
// [20]
