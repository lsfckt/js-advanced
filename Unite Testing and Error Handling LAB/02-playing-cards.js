function cardsPlaying(face, suit) {

    const cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const cardSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    }

    if (cardFaces.includes(face) && Object.keys(cardSuits).includes(suit)) {
        return {
            face,
            suit,
            toString() {
                return `${face}${cardSuits[suit]}`;
            },
        };
    } else {
        throw new Error('Error');
    }
}
// const cards = cardsPlaying('A', 'S'); //A♠
// cards.toString();
const cards = cardsPlaying('10', 'H'); //10♥
cards.toString();
// const cards = cardsPlaying('1', 'C'); // Error
// cards.toString();