function cookingNumbers(...params) {

    /**
•	chop - divide the number by two
•	dice - square root of a number
•	spice - add 1 to the number
•	bake - multiply number by 3
•	fillet - subtract 20% from the number
 */
    let [startingPoint, ...commands] = params;
    startingPoint = Number(startingPoint);

    let currCommand = commands.shift();

    while (currCommand != undefined) {

        switch (currCommand) {
            case 'chop':
                startingPoint /= 2;
                break;
            case 'dice':
                startingPoint = Math.sqrt(startingPoint);
                break;
            case 'spice':
                startingPoint++;
                break;
            case 'bake':
                startingPoint *= 3
                break;
            case 'fillet':
                startingPoint *= 0.8;
                startingPoint = startingPoint.toFixed(1);
                break;
        }
        console.log(startingPoint);

        currCommand = commands.shift();
    }
}
cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// 16
// 8
// 4
// 2
// 1
cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
// 3
// 4
// 2
// 6
// 4.8

