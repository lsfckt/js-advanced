function elements(arr) {

    let sum = 0;
    let inverse = 0;
    let concat = '';

    arr.forEach(el => {
        sum += el;
        inverse += 1 / el;
        concat += el;
    });
    
    console.log(sum);
    console.log(inverse);
    console.log(concat);
}
elements([1, 2, 3]);