function weekDays(day) {

    let print = 0;

    switch (day) {
        case 'Monday':
            print = 1;
            break;
        case 'Tuesday':
            print = 2;
            break;
        case 'Wednesday':
            print = 3;
            break;
        case 'Thursday':
            print = 4;
            break;
        case 'Friday':
            print = 5;
            break;
        case 'Saturday':
            print = 6;
            break;
        case 'Sunday':
            print = 7;
            break;
        default: print = 'error'
            break;
    }
    console.log(print);
}
weekDays('s');