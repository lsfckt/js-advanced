function stars(num) {

    let star = '* '

    if (num === null || num === ' ' || num === 'string') {
        for (let i = 0; i < 5; i++) {
            console.log(star.repeat(5));
        }
    } else {
        for (let i = 0; i < num; i++) {
            console.log(star.repeat(num));
        }
    }
}
stars('asda');