function addAndRemove(arr) {

    const newArr = [];
    let counter = 1;

    for (const el of arr) {
        el === 'add' ? newArr.push(counter) : newArr.pop();
        counter++;
    }

    let output = newArr;

    if (newArr.length === 0) {
        output = 'Empty'
    } else {
        output = newArr.join('\n');
    }

    console.log(output);
}
addAndRemove(['add', 'add', 'add', 'add']);
// 1 2 3 4
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
// 1 4 5
addAndRemove(['remove', 'remove', 'remove']);
// Empty
