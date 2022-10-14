/*

Coding Challenge #2

Use the BMI example from Challenge #1 and the code you already wrote
and improve it:

1. Print a nice output to the console, saying who has the higher BMI.
The message can be either "Mark's BMI is higher than John's" or "John's
BMI is higher than Mark's"
2. Use a template literal to include the BMI values in the outputs.

*/

const marksMass = 82;
const marksHeight = 1.68;
const johnsMass = 92;
const johnsHeight = 1.95;

const marksBMI = marksMass / marksHeight ** 2;
const johnsBMI = johnsMass / johnsHeight ** 2;

if (marksBMI > johnsBMI) {
    console.log(`Mark's BMI is ${marksBMI} and it is 
    higher than ${johnsBMI}, which is John's.`)
} else if (marksBMI < johnsBMI) {
    console.log(`Mark's BMI is ${marksBMI} and it is 
    lower than ${johnsBMI}, which is John's.`)
} else {
    console.log(`Mark and John have the same BMI.`)
}

