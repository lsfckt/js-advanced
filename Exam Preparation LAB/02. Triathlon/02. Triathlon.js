class Triathlon {
    constructor(competitionName) {

        this.competition = competitionName;
        this.participant = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {

        const isExist = `${participantName} has already been added to the list`;
        const newParticipant = `A new participant has been added - ${participantName}`

        if (this.participant[participantName]) {
            return isExist;

        }
        this.participant[participantName] = participantGender;

        return newParticipant;
    }

    completeness(participantName, condition) {

        if (!this.participant[participantName]) {
            throw new Error(`${participantName} is not in the current participants list`);
        }

        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }

        const completedCount = Math.trunc(condition / 30);

        if (completedCount < 3) {
            return `${participantName} could only complete ${completedCount} of the disciplines`;
        }

        const participantGender = this.participant[participantName];

        this.listOfFinalists.push({
            name: participantName,
            gender: participantGender,
        });

        return `Congratulations, ${participantName} finished the whole competition`;
    }

    rewarding(participantName) {

        let hasNotParticipant = `${participantName} is not in the current finalists list`;
        let hasParticipant = `${participantName} was rewarded with a trophy for his performance`;

        const hasFinalist = this.listOfFinalists.some((currFin) => currFin.name === participantName);

        return !hasFinalist ? hasNotParticipant : hasParticipant;
       
    }

    showRecord(criteria) {

        if(this.listOfFinalists.length === 0) {
           return `There are no finalists in this competition`;
        }

        const hasCriteria = this.listOfFinalists.some((currCriteria) => currCriteria.gender === criteria);

        const participant = this.listOfFinalists.find((finalist) => finalist.gender === criteria);

        const falseCriteria = `There are no ${criteria}'s that finished the competition`;
        
    
        if(criteria === 'all') {
            let output = `List of all ${this.competition} finalists:`

            this.listOfFinalists.forEach(finalist => {
                output += `\n${finalist.name}`;
            });

            return output;

        } else if(hasCriteria) {
            const trueCriteria = `${participant.name} is the first ${criteria} that finished the ${this.competition} triathlon`;

            return trueCriteria;

        } else {
            return falseCriteria
        }


    }
}
// const contest1 = new Triathlon("Dynamos");
// console.log(contest1.addParticipant("Peter", "male"));
// console.log(contest1.addParticipant("Sasha", "female"));
// console.log(contest1.addParticipant("Peter", "male"));


// A new participant has been added - Peter
// A new participant has been added - Sasha
// Peter has already been added to the list

// console.log('-------------------------------');

// const contest2 = new Triathlon("Dynamos");
// console.log(contest2.addParticipant("Peter", "male"));
// console.log(contest2.addParticipant("Sasha", "female"));
// console.log(contest2.addParticipant("George", "male"));
// console.log(contest2.completeness("Peter", 100));
// console.log(contest2.completeness("Sasha", 70));
// console.log(contest2.completeness("George", 20));

// A new participant has been added - Peter
// A new participant has been added - Sasha
// A new participant has been added - George
// Congratulations, Peter finished the whole competition
// Sasha could only complete 2 of the disciplines
// Uncaught Error: George is not well prepared and cannot finish any discipline
// console.log('-------------------------------');

const contest3 = new Triathlon("Dynamos");
console.log(contest3.addParticipant("Peter", "male"));
console.log(contest3.addParticipant("Sasha", "female"));
console.log(contest3.completeness("Peter", 100));
console.log(contest3.completeness("Sasha", 70));
console.log(contest3.rewarding("Peter"));
console.log(contest3.rewarding("Sasha"));

// A new participant has been added - Peter
// A new participant has been added - Sasha
// Congratulations, Peter finished the whole competition
// Sasha could only complete 2 of the disciplines
// Peter was rewarded with a trophy for his performance
// Sasha is not in the current finalists list
console.log('-------------------------------');

const contest4 = new Triathlon("Dynamos");
console.log(contest4.showRecord("all"));

// There are no finalists in this competition
console.log('-------------------------------');

const contest5 = new Triathlon("Dynamos");
console.log(contest5.addParticipant("Peter", "male"));
console.log(contest5.addParticipant("Sasha", "female"));
console.log(contest5.completeness("Peter", 100));
console.log(contest5.completeness("Sasha", 90));
console.log(contest5.rewarding("Peter"));
console.log(contest5.rewarding("Sasha"));
console.log(contest5.showRecord("all"));

// A new participant has been added - Peter
// A new participant has been added - Sasha
// Congratulations, Peter finished the whole competition
// Congratulations, Sasha finished the whole competition
// Peter was rewarded with a trophy for his performance
// Sasha was rewarded with a trophy for his performance
// List of all Dynamos finalists:
// Peter
// Sasha
console.log('-------------------------------');

const contest6 = new Triathlon("Dynamos");
console.log(contest6.addParticipant("Peter", "male"));
console.log(contest6.addParticipant("Sasha", "female"));
console.log(contest6.addParticipant("George", "male"));
console.log(contest6.completeness("Peter", 100));
console.log(contest6.completeness("Sasha", 90));
console.log(contest6.completeness("George", 95));
console.log(contest6.rewarding("Peter"));
console.log(contest6.rewarding("Sasha"));
console.log(contest6.rewarding("George"));
console.log(contest6.showRecord("male"));

// A new participant has been added - Peter
// A new participant has been added - Sasha
// A new participant has been added - George
// Congratulations, Peter finished the whole competition
// Congratulations, Sasha finished the whole competition
// Congratulations, George finished the whole competition
// Peter was rewarded with a trophy for his performance
// Sasha was rewarded with a trophy for his performance
// George was rewarded with a trophy for his performance
// Peter is the first male that finished the Dynamos triathlon