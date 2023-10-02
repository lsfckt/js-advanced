function carFactory(clientOrder) {
    //TODO car info dictionary

    const carDictionary = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 },
    }

    //TODO Wheelsize function
    function theWheels(data) {

        const size = clientOrder.wheelsize % 2 === 0 ? clientOrder.wheelsize - 1 : clientOrder.wheelsize;
        newCarObj.wheels = Array(4).fill(size, 0, 4);
    }
    // TODO new car obj
    const newCarObj = {
        model: clientOrder.model,
        engine: carDictionary[clientOrder.power <= 90 ? 'smallEngine' : clientOrder.power <= 120 ? 'normalEngine' : 'monsterEngine'],
        carriage: {
            type: clientOrder.carriage,
            color: clientOrder.color,
        },
    }

    theWheels(clientOrder);
    return newCarObj;
}
carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});
// { model: 'VW Golf II',
//   engine: { power: 90,
//             volume: 1800 },
//   carriage: { type: 'hatchback',
//               color: 'blue' },
//   wheels: [13, 13, 13, 13] }

carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});
// { model: 'Opel Vectra',
//   engine: { power: 120,
//             volume: 2400 },
//   carriage: { type: 'coupe',
//               color: 'grey' },
//   wheels: [17, 17, 17, 17] }
