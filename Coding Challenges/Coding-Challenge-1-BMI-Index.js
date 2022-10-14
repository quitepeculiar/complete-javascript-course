/*

Mark and John BMI

1. Store Mark and John's mass and height in variables
2. Calculate both their BMIs w/formula: BMI = mass / height ** 2 = mass / (height * height)
3. Create a boolean variable 'markHigherBMI' w/info about whether Mark has a higher BMI than John.

TEST DATA 1: Mark weighs 78kg and is 1.69m tall. John weighs 92kg and is 1.95m tall.
TEST DATA 2: Mark weighs 95kg and is 1.88m tall. John weighs 85kg and is 1.76m tall.

*/

const marksMass = 78;
const marksHeight = 1.69;
const johnsMass = 92;
const johnsHeight = 1.95;

const marksBMI = marksMass / marksHeight ** 2;
console.log("The BMI for Mark is " + marksBMI);

const johnsBMI = johnsMass / johnsHeight ** 2;
console.log("The BMI for John is " + johnsBMI);

const markHigherBMI = marksBMI > johnsBMI;

console.log("Does Mark have a higher BMI? " + markHigherBMI);

const marksMass2 = 95;
const marksHeight2 = 1.88;
const johnsMass2 = 85;
const johnsHeight2 = 1.76;

const marksBMI2 = marksMass2 / marksHeight2 ** 2;
console.log("The BMI for Mark is " + marksBMI2);

const johnsBMI2 = johnsMass2 / johnsHeight2 ** 2;
console.log("The BMI for John is " + johnsBMI2);

const markHigherBMI2 = marksBMI2 > johnsBMI2;

console.log("Does Mark have a higher BMI? " + markHigherBMI2);
