function argumentInfo(...args) {

    const obj = {};

    args.forEach((element) => {

        let elementType = typeof element;
        console.log(`${elementType}: ${element}`);

        obj[elementType] = obj[elementType]
            ? (obj[elementType] += 1)
            : (obj[elementType] = 1);
    });

    const copied = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    copied.forEach(([key, value]) => console.log(`${key} = ${value}`));

}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });

/**
string: cat
number: 42
function: function () { console.log('Hello world!'); }
string = 1
number = 1
function = 1
 */