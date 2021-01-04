var monthName = "January 2021";
var days = 31;
var startingDay = 0;

console.log("\n\nCalander of", monthName, "\n");
console.log("sun    mon    thu    wed    thu    fri   sat");

for (var i = 0; i < 5; i++) {
    var dayRow = "";
    for (var j = 1; j <= 7; j++) {
        var currentDay = 7 * i + j;

        if (currentDay > days) {
            break;
        }

        if (currentDay > 9) {
            dayRow += currentDay + "    ";
        } else {
            dayRow += currentDay + "     ";
        }
    }
    console.log(dayRow);
}
