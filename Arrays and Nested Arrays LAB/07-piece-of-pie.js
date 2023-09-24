function pieceOfPie(pieFlavorsArr, ...targetFlavors) {

    const [startSection, endSection] = targetFlavors;

    const startIndex = pieFlavorsArr.indexOf(startSection);
    const endIndex = pieFlavorsArr.indexOf(endSection);

    const newPieFlavorsArr = pieFlavorsArr.slice(startIndex, endIndex + 1);
    return newPieFlavorsArr;

}
pieceOfPie([
    'Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'
],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);
/**
['Key Lime Pie',
 'Cherry Pie',
 'Lemon Meringue Pie']
 */
pieceOfPie([
    'Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'
],
    'Pot Pie',
    'Smoked Fish Pie'
);
/**
['Pot Pie',
 'Steak and Cheese Pie',
 'Butter Chicken Pie',
 'Smoked Fish Pie']

 */