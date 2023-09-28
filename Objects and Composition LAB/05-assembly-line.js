function createAssemblyLine() {

    return {
        hasClima(obj) {
            const clima = {
                temp: 21,
                tempSettings: 21,
                adjustTemp: function () {
                    if (obj.temp < obj.tempSettings) {
                        obj.temp++;
                    } else if (obj.temp > obj.tempSettings) {
                        obj.temp--;
                    }
                },
            }
            Object.assign(obj, clima)
        },

        hasAudio(obj) {
            obj.currentTrack = { name: null, artist: null };

            obj.nowPlaying = () => {
                if (obj.currentTrack !== null) {
                    console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
                }
            }

        },

        hasParktronic(obj) {
            obj.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (distance < 0.24) {
                    console.log("Beep! Beep!");
                } else if (distance >= 0.25 && distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log(' ');
                }
            }

        },
    }
}
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);





