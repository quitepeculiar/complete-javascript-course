// From 48. Looping Backwards and Loops in Loops

for (let exercise = 1; exercise < 4; exercise++) {
	console.log(`----- Starting exercise ${exercise}`);

	for (let rep = 1; rep < 6; rep++) {
		console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋🏻`);
	}
}

// The While loop

// for loop example
for (let rep = 1; rep <= 10; rep++) {
	console.log(`Lifting weights repetition ${rep} 🏋🏻`);
}

// while loop example
let rep = 1;

while (rep <= 10) {
	console.log(`WHILE: Lifting weights repetition ${rep} 🏋🏻`);
	rep++;
}

// a while loop without a counter
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
	console.log(`You rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 6) + 1;
	if (dice === 6) console.log('Loop will now end.');
}
