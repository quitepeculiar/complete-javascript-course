/*
Coding Challenge #3:

Two gymnastics teams, Dolphins and Koalas
Compete against each other 3 times
Winner with highest average score wins a trophy

1. Calculate the avg score for each team, using
test data below

2. Compare the team's avg scores to determine the winner
of the competition, and print it to the console. Don't forget
that there can be a draw, so test for that too.

3. Bonus 1: Include a requirement for a minimum score of 100. 
With this rule, a team only wins if it has a higher score than the other
team, and also a score of at least 100 points.
4. Bonus 2: Minimum score also applies to a draw, eg when both teams have the same score and both have a score greater or equal to 100 points.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110.
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95, 123.
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106.

*/

// SEASON 1

// const avgDolphins = (96 + 108 + 89) / 3;
// const avgKoalas = (88 + 91 + 110) / 3;

// if (avgDolphins > avgKoalas) {
// 	console.log(
// 		`Dolphins are the winners with a ${avgDolphins} seasonal average!`
// 	);
// } else if (avgDolphins < avgKoalas) {
// 	console.log(`The Koalas win! Their seasonal average was ${avgKoalas}!`);
// } else {
// 	console.log(
// 		`It's a tie! The Koalas and Dolphins tie! Seasonal averages are ${avgDolphins} for Dolphins and ${avgKoalas} for the Koalas!`
// 	);
// }

// SEASON 2, with 100 minimum

// const avgDolphins = (97 + 112 + 101) / 3;
// const avgKoalas = (109 + 95 + 123) / 3;
// const minScore = 100;

// if (avgDolphins >= minScore && avgKoalas >= minScore) {
// 	console.log(`Both teams have made the minimum score of ${minScore}.`);
// } else if (avgDolphins < minScore) {
// 	console.log(
// 		`With an average of ${avgDolphins}, the Dolphins do not have enough points to qualify for the ${minScore}.`
// 	);
// } else if (avgKoalas < minScore) {
// 	console.log(
// 		`With an average of ${avgKoalas}, the Koalas do not have enough points to qualify for the ${minScore}.`
// 	);
// } else {
// 	console.log('Neither of the two teams make the minimum score!');
// }

// if (avgDolphins > avgKoalas) {
// 	console.log(
// 		`Dolphins are the winners with a ${avgDolphins} seasonal average!`
// 	);
// } else if (avgDolphins < avgKoalas) {
// 	console.log(`The Koalas win! Their seasonal average was ${avgKoalas}!`);
// } else {
// 	console.log(
// 		`It's a tie! The Koalas and Dolphins tie! Seasonal averages are ${avgDolphins} for Dolphins and ${avgKoalas} for the Koalas!`
// 	);
// }

// SEASON 3, with 100 minimum

const avgDolphins = (97 + 112 + 101) / 3;
const avgKoalas = (109 + 95 + 106) / 3;
const minScore = 100;

if (avgDolphins >= minScore && avgKoalas >= minScore) {
	console.log(`Both teams have made the minimum score of ${minScore}.`);
} else if (avgDolphins < minScore) {
	console.log(
		`With an average of ${avgDolphins}, the Dolphins do not have enough points to qualify for the ${minScore}.`
	);
} else if (avgKoalas < minScore) {
	console.log(
		`With an average of ${avgKoalas}, the Koalas do not have enough points to qualify for the ${minScore}.`
	);
} else {
	console.log('Neither of the two teams make the minimum score!');
}

if (avgDolphins > avgKoalas) {
	console.log(
		`Dolphins are the winners with a ${avgDolphins} seasonal average!`
	);
} else if (avgDolphins < avgKoalas) {
	console.log(`The Koalas win! Their seasonal average was ${avgKoalas}!`);
} else {
	console.log(
		`It's a tie! The Koalas and Dolphins tie! Seasonal averages are ${avgDolphins} for Dolphins and ${avgKoalas} for the Koalas!`
	);
}
