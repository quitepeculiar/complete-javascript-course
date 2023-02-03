'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
};

const displayScore = function (currentScore) {
	document.querySelector('.score').textContent = currentScore;
};

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);

	if (!guess) {
		// document.querySelector('.message').textContent = '⛔️ No number!';
		displayMessage('⛔️ No number!');
	} else if (guess === secretNumber) {
		displayMessage('🎉 Correct Number!');
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';

		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
			score--;
			displayScore(score);
		} else {
			displayMessage('💩 Sozzo, you lost!');
			score--;
			displayScore(0);
		}
	}
});

document.querySelector('.again').addEventListener('click', function () {
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	score = 20;

	displayScore(score);
	displayMessage('Start guessing...');
	document.querySelector('.guess').value = '';
	document.querySelector('.number').textContent = '?';

	// Restore original background colour and number box width
	document.querySelector('body').style.backgroundColor = '#222222';
	document.querySelector('.number').style.width = '15rem';
});
