function diagonalSums(arr) {

    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = arr[0].length - 1;

    arr.forEach(currArray => {
        firstDiagonal += currArray[firstIndex++]
        secondDiagonal += currArray[secondIndex--];
    });
    console.log(firstDiagonal + ' ' + secondDiagonal);
}