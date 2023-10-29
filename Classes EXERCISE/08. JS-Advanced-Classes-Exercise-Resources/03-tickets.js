function tickets(ticketDescriptions, sortingCriterion) {

    class Ticket {
        constructor(destination, price, ticketsStatus) {
            this.destination = destination;
            this.price = price;
            this.status = ticketsStatus;
        }

    }
    const ticketsStore = [];

    ticketDescriptions.forEach(line => {
        const [destination, price, ticketsStatus] = line.split('|');

        ticketsStore.push(new Ticket(destination, Number(price), ticketsStatus));

    });

    const sortedArr = ticketsStore.sort((a, b) => {
        return typeof a[sortingCriterion] === 'number'
            ? a[sortingCriterion] - b[sortingCriterion]
            : a[sortingCriterion].localeCompare(b[sortingCriterion]);
    });
    return sortedArr;
}
tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
);
/**[ 
  Ticket { destination: 'Boston',
    price: 126.20,
    status: 'departed' }, 
  Ticket { destination: 'New York City',
    price: 95.99,
    status: 'available' }, 
  Ticket { destination: 'New York City',
    price: 95.99,
    status: 'sold' }, 
  Ticket { destination: 'Philadelphia',
    price: 94.20,
    status: 'available' } ]
 */