function lowestPricesInCities(arr) {
    // As output, you must print each product with its lowest price and the town at which the product is sold at that price. 
    // If two towns share the same lowest price, print the one that was entered first. 
    const lowestPrices = {};

    arr.forEach(el => {
        let [town, product, price] = el.split(' | ');
        price = Number(price);

        if (!lowestPrices.hasOwnProperty(product)) {
            lowestPrices[product] = {
                price,
                town,
            }
        } else {
            if (price < lowestPrices[product]['price']) {
                lowestPrices[product] = {
                    price,
                    town,
                }
            }
        }
    });
    for (const product in lowestPrices) {
        console.log(`${product} -> ${lowestPrices[product]['price']} (${lowestPrices[product]['town']})`);
        }
    }
lowestPricesInCities([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
   ' Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000']);
    // Audi -> 1000 (Mexico City)
    // BMW -> 99999 (Mexico City)
    // Mitsubishi -> 1000 (New York City)
    // Mercedes -> 1000 (Washington City)
    // NoOffenseToCarLovers -> 0 (Sofia City)
