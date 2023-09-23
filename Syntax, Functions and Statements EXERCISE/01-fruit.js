function fruit(fruitType, weightInGrams, pricePerKgs) {

    const weightInKgs = weightInGrams / 1000;
    const money = weightInKgs * pricePerKgs;

    const output = `I need ${'$' + money.toFixed(2)} to buy ${weightInKgs.toFixed(2)} kilograms ${fruitType}.`
    console.log(output);
}
fruit('orange', 2500, 1.80);
// I need $4.50 to buy 2.50 kilograms orange.
fruit('apple', 1563, 2.35);
// I need $3.67 to buy 1.56 kilograms apple.