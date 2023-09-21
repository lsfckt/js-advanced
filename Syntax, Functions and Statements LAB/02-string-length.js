function stringLenght(first, second, third) {

    let lengthSum = first.length + second.length + third.length;
    let avgLength = lengthSum / 3;

    console.log(lengthSum);
    console.log(Math.floor(avgLength));

}
stringLenght('chocolate', 'ice cream', 'cake');