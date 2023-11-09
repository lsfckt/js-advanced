class footballTeam {
    constructor(clubName, country) {

        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {

        let output = 'You successfully invite ';

        footballPlayers.map(curr => {

            let [name, age, value] = curr.split('/');
            age = Number(age);
            value = Number(value);



            const player = this.invitedPlayers.find(player => player.name === name);

            if (player && player.value < value) {
                player.value = value;

            } else {

                this.invitedPlayers.push({ name, age, value });
                output += `${name}, `;
            }
        });

        output = output.substring(0, output.length - 2);
        output += '.';
        return output;
    }

    signContract(selectedPlayer) {

        let [name, offer] = selectedPlayer.split('/');
        offer = Number(offer);

        let player = this.invitedPlayers.find(player => player.name === name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);

        } else if (Number(offer) < player.value) {

            const priceDifference = player.value - offer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`)

        } else {

            player.value = 'Bought';
            return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`
        }

    }

    ageLimit(name, ageLimit) {

        let player = this.invitedPlayers.find(player => player.name === name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (player.age < ageLimit) {
            const ageDifference = ageLimit - player.age;

            if (ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }

        } else {
            return `${name} is above age limit!`
        }
    }

    transferWindowResult() {

        let output = "Players list:";

        const sorted = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));

        sorted.forEach(player => {
            output += `\nPlayer ${player.name}-${player.value}`;
        });

        return output;
    }
}