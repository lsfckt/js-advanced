function biggestElement(arr) {
   
    let maxNum = Number.MIN_SAFE_INTEGER;

    arr.forEach(row => {
        row.forEach(currNum => {
            
            if (currNum > maxNum) {
                maxNum = currNum;
            }

        });
    });
    console.log(maxNum);
}
biggestElement([
    [-20, -50, -10],
    [-8, -33, -145]
]);
// 145
// biggestElement([
//     [3, 5, 7, 12],
//     [-1, 4, 33, 2],
//     [8, 3, 0, 4]
// ]);
// 33