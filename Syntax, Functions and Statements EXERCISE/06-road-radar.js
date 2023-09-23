function roadRadar(speed, area) {

    const limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    }

    let diff = 0;
    let status = '';
    let output = ``;

    for (const key in limits) {
        const currLimit = limits[key];

        if (key === area && speed > currLimit) {
            diff = speed - currLimit;

            if (diff <= 20) {
                status = 'speeding';
            } else if (diff <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }

            output = `The speed is ${diff} km/h faster than the allowed speed of ${currLimit} - ${status}`
        } else if (key === area && speed <= currLimit) {
            output = `Driving ${speed} km/h in a ${currLimit} zone`
        }

    }
    console.log(output);
}
roadRadar(40, 'city');
// Driving 40 km/h in a 50 zone
roadRadar(21, 'residential');
// The speed is 1 km/h faster than the allowed speed of 20 - speeding
roadRadar(120, 'interstate');
// The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding    
roadRadar(200, 'motorway');
// The speed is 70 km/h faster than the allowed speed of 130 - reckless driving