function cityRecord(cityName, population, treasury) {

    const record = {};

    record.name = cityName;
    record.population = population;
    record.treasury = treasury;

    return record;
}
let output = cityRecord('Tortuga',
7000,
15000
)
console.log(output);