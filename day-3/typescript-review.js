var SUNNY_DAY_MESSAGE = "It is sunny out today";
var isSunny = true;
var numberSunnyDays = 0;
/**
 *
 * @param isSunny
 *        if today is sunny
 * @param numberSunnyDays
 *        how many days in a row it's been sunny
 * @returns
 *        Returns a string saying hi, if it's sunny, and how many days in a row it has been sunny for.
 *        Example: "Hi! It is sunny Today. It has been sunny for 4 days in a row."
 */
function sunnyDayMessage(isSunny, numberSunnyDays) {
    if (isSunny == true) {
        numberSunnyDays = 1 + numberSunnyDays;
        return "Hi! It is sunny Today. It has been sunny for " + numberSunnyDays + " days in a row.";
    }
    else {
        numberSunnyDays = 0;
        return "Hi! it is not sunny Today";
    }
}
console.log(sunnyDayMessage(true, 5));
// function hello(name: string, isSunny: boolean) {
//     if (!isSunny) {
//       return "Hi " + name;
//     }
//     return `Hi, ${name} it is sunny out today`;
// }
// console.log(hello("Kyle", isSunny))
