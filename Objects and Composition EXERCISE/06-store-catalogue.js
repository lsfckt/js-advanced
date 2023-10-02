function storeCatalogue(arr) {

    const sortedCatalogue = arr.sort();
    const catalogue = {};

    sortedCatalogue.forEach(line => {
        const splitedLine = line.split(' : ');
        let [product, price] = splitedLine;
        price = Number(price);

        if (!catalogue.hasOwnProperty(product.charAt(0))) {
            catalogue[product.charAt(0)] = [{
                [product]: price,
            }];
        } else {
            catalogue[product.charAt(0)].push({ [product]: price });
        }
    });

    for (const char in catalogue) {
        console.log(char);
        for (const prop of catalogue[char]) {
            for (const key in prop) {
                console.log(`  ${key}: ${prop[key]}`);
            }
        }
    }
}
storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
// A
//   Anti-Bug Spray: 15
//   Apple: 1.25
//   Appricot: 20.4
// B
//   Boiler: 300
// D
//   Deodorant: 10
// F
//   Fridge: 1500
// T
//   T-Shirt: 10
//   TV: 1499
