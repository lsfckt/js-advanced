function rotateArray(arr, number) {

    for (let i = 0; i < number; i++) {

        const element = arr.pop();
        arr.unshift(element);
    }
    console.log(arr.join(' '));
}
rotateArray(['1', '2', '3', '4'], 2);
// 3 4 1 2
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
// Orange Coconut Apple Banana