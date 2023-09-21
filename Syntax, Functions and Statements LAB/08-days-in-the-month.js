function monthDays(month, year) {

    return new Date(year, month, 0).getDate();
}
console.log(monthDays(1, 2012));