// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = (billValue) =>
	billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

for (let i = 0; i < bills.length; i++) {
	const tipValue = calcTip(bills[i]);
	tips.push(tipValue);

	const totalValue = tipValue + bills[i];
	totals.push(totalValue);

	console.log(
		`The bill was ${bills[i]} dollars. The tip was ${tipValue} dollars. Altogether, the total was ${totalValue} dollars.`
	);
}

// Bonus
const calcAverage = function (arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	let avg = sum / arr.length;
	console.log(`The sum of ${arr} is ${sum}. The average is ${avg}`);
	return avg;

	// alternatively without the sentence and avg variable
	// return sum / arr.length
};

calcAverage(bills);
calcAverage(tips);
calcAverage(totals);
