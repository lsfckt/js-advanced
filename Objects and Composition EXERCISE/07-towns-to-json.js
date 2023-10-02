function townsToJSON(arr) {

    const townsArr = [];

    for (let i = 1; i < arr.length; i++) {
        let [town, latitude, longitude] = arr[i].split(' | ');
        let splitedTown = town.split('| ').join('');
        let splitedLongitude = longitude.split(' |').join('');

        const lat = Number(latitude);
        const lon = Number(splitedLongitude);

        const obj = {
            Town: splitedTown,
            Latitude: Number(lat.toFixed(2)),
            Longitude: Number(lon.toFixed(2)),
        }
        townsArr.push(obj);
    }

    const json = JSON.stringify(townsArr);
    console.log(json);
}
townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);
// [{"Town":"Sofia",
//   "Latitude":42.7,
//   "Longitude":23.32
// },
// {"Town":"Beijing", 
//  "Latitude":39.91, 
//  "Longitude":116.36
// }]

townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);
// [{"Town":"Veliko Turnovo",
//   "Latitude":43.08,
//   "Longitude":25.62
// },
// {"Town":"Monatevideo",
//  "Latitude":34.5,
//  "Longitude":56.11
// }]
