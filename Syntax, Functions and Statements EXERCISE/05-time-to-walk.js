function timeToWalk(steps, footPrint, speedPerH) {

    let distansInKm = (steps * footPrint) / 1000; // (4000 * 0.60) / 1000 = 2.4km
    let time = distansInKm / speedPerH; // 2.4 / 5 = 0.48

    let hrs = Math.floor(time); //[hours]
    if (hrs <= 9) {
        hrs = "0" + hrs;
    }

    let minutes = Math.floor(time * 60); // 0.48 * 60 = 28;
    let rest = 0;

    if (distansInKm / 0.5 > 0) {
        rest = Math.floor(distansInKm / 0.5); // 2.4 / 0.5 = 4;
        minutes += rest; // 28 + 4 = 32;
    }
    if (minutes <= 9) {
        minutes = "0" + minutes
    }
    let seconds = (((time * 60) % 1) * 60).toFixed(0) //[sec]

    console.log(`${hrs}:${minutes}:${seconds}`)
}
timeToWalk(4000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5)