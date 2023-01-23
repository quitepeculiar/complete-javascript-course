// Coding Challenge #3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mark = {
	firstName: 'Mark',
	lastName: 'Miller',
	weightKg: 78,
	heightM: 1.69,

	calcBMI: function () {
		// BMI = mass / height ** 2 = mass / (height * height)
		this.markBMI = this.weightKg / (this.heightM * this.heightM);
		return this.markBMI;
	},
};

const john = {
	firstName: 'John',
	lastName: 'Smith',
	weightKg: 92,
	heightM: 1.95,

	calcBMI: function () {
		// BMI = mass / height ** 2 = mass / (height * height)
		this.johnBMI = this.weightKg / (this.heightM * this.heightM);
		return this.johnBMI;
	},
};

// Simple sentence to check work
console.log(
	`Mark's BMI is ${mark.calcBMI()} and John's BMI is ${john.calcBMI()}.`
);

// Who has the higher BMI?
if (mark.calcBMI() > john.calcBMI()) {
	console.log(
		`Mark's BMI (${mark.calcBMI()} is higher than John's (${john.calcBMI()}).`
	);
} else if (mark.calcBMI() < john.calcBMI()) {
	console.log(
		`John's BMI (${john.calcBMI()}) is higher than Mark's BMI (${mark.calcBMI()}).`
	);
} else {
	console.log(
		`John's BMI (${john.calcBMI()}) and Mark's BMI (${mark.calcBMI()}) are the same, or there may be an issue with the data.`
	);
}
