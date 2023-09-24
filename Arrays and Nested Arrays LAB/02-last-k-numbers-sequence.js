function lkns(n, k) {

    const arr = [];
    arr.push(1);

    for (let i = 1; i < n; i++) {
        const max = Math.max(0, i - k);

        const sliced = arr.slice(max, max + k);
        arr.push(sliced.reduce((acc, el) => acc + el));
    }
    return arr;
}
lkns(6, 3);
// [1, 1, 2, 4, 7, 13]
lkns(8, 2);
// [1, 1, 2, 3, 5, 8, 13, 21]