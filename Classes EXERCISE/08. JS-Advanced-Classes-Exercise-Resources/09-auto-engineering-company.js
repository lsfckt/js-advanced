function autoEngineeringCompany(arr) {

    const obj = {};

    arr.forEach(line => {
        let [carBrand, carModel, producedCars] = line.split(' | ');
        producedCars = Number(producedCars);

        if (!obj[carBrand]) {
            obj[carBrand] = { [carModel]: producedCars }

        } else {
            if (!obj[carBrand].hasOwnProperty(carModel)) {
                obj[carBrand][carModel] = producedCars;

            } else {
                obj[carBrand][carModel] += producedCars;
            }
        }
    });

    const entries = Object.entries(obj).forEach(line => {
        const currBrand = line[0];
        console.log(currBrand);

        const brandEntries = Object.entries(line[1]).forEach(([model, cars]) => {
            console.log(`###${model} -> ${cars}`);
        });
    });
}
autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);
/*
Audi
###Q7 -> 1000
###Q6 -> 100
BMW
###X5 -> 1000
###X6 -> 100
Citroen
###C4 -> 145
###C5 -> 10
Volga
###GAZ-24 -> 1000000
Lada
###Niva -> 1000000
###Jigula -> 1000000
 */