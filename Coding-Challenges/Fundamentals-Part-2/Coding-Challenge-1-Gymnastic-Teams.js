// Coding Challenge #1 for JavaScript Fundamentals - Part 2

/* 
Back to the two gymanstic teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. 
Each team competes 3 times, and then the average of the 3 scores is calculated (so 1 average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins.

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores.
2 Use the function to calculate the average for both teams. 
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner of both DATA 1 and DATA 2.
5. Ignore draws this time.


TEST DATA 1: Dolphins score 44, 23, and 71. Koalas score 65, 54, and 49.

TEST DATA 2: Dolphins score 85, 54, and 41. Koalas score 23, 34, and 27.
*/

const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

// Test Data 1
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
	if (avgDolphins >= avgKoalas * 2) {
		console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
	} else if (avgKoalas >= avgDolphins * 2) {
		console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
	} else {
		console.log(
			`There is no winner this time. (${avgDolphins} vs. ${avgKoalas})`
		);
	}
};

checkWinner(avgDolphins1, avgKoalas1);

// Test Data 2 - Alternatively assign the values above to let rather than const
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

checkWinner(avgDolphins2, avgKoalas2);
