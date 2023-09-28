function townPopulation(arr) {

    const townRecord = {};

    arr.forEach(element => {
        [currTown, cityPopulation] = [...element.split(' <-> ')];

        if (!townRecord.hasOwnProperty(currTown)) {

            townRecord[currTown] = Number(cityPopulation);
        } else {
            townRecord[currTown] += Number(cityPopulation);
        }
    });

    for (const towns in townRecord) {
        console.log(`${towns} : ${townRecord[towns]}`);
    }

}
townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
    'Las Vegas <-> 2']
);
/**
Sofia : 1200000
Montana : 20000
New York : 10000000
Washington : 2345000
Las Vegas : 1000000
 */

townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);
/**
Istanbul : 101000
Honk Kong : 2100004
Jerusalem : 2352344
Mexico City : 23401925
 */