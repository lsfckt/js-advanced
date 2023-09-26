function magicMatrices(matrix) {

    const totalSum = matrix[0].reduce((acc, curr) => acc + curr);

    for (let row = 0; row < matrix.length; row++) {
        let rowSum = 0;
        let colSum = 0;

        for (let col = 0; col < matrix.length; col++) {
            rowSum += matrix[row][col];
            colSum += matrix[col][row];
        }

        if (totalSum != rowSum || totalSum != colSum) {
            return false;
        }
    }
    return true;
}
let output = magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
// true

let output2 = magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
// false

let output3 = magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);
// true
console.log(output);
console.log(output2);
console.log(output3);