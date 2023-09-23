function previousDay(year, month, day) {

    let curDate = new Date(year, month - 1, day);
    curDate.setDate(curDate.getDate() - 1);

    let newYear = curDate.getFullYear();
    let newMonth = curDate.getMonth() + 1;
    let newDay = curDate.getDate();

    let ouput = `${newYear}-${newMonth}-${newDay}`;
    console.log(ouput);

}
previousDay(2016, 9, 1);
// 2016-8-31
previousDay(2015, 5, 10);
// 2015-5-9