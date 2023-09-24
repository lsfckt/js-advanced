function epe(arr) {

    let evens = ''

    for (let i = 0; i < arr.length; i += 2) {
        evens += arr[i] + ' ';
    }

    console.log(evens);
}
epe(['20', '30', '40', '50', '60']);
// 20 40 60
epe(['5', '10']);
// 5