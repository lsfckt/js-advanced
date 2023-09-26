function everyNth(arr, num) {

    const newArr = [];

    for (let i = 0; i <= arr.length; i += num) {

        if (arr[i] != undefined) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
everyNth([
    '5',
    '20',
    '31',
    '4',
    '20'],
    2
);
// ['5', '31', '20']
everyNth([
    'dsa',
    'asd',
    'test',
    'tset'],
    2
);
// ['dsa', 'test']
everyNth([
    '1',
    '2',
    '3',
    '4',
    '5'],
    6
);
// [1]