function ToLocalDate (inDate) {
    var date = new Date();
    date.setTime(inDate.valueOf() - 60000 * inDate.getTimezoneOffset());
    return date;
}

var result = ToLocalDate(1677069788);
console.log(result);