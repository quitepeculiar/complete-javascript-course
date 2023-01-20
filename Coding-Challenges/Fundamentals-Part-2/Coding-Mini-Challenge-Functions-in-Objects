const catFoxx = {
	name: 'Foxx',
	nickname: 'Baby Man',
	furColor: 'Black and white',
	birthYear: 2010,
	activities: ['Squeaks', 'Eats kib-kib', 'Loafs'],
	isCute: true,

	calcAge: function () {
		this.age = 2023 - this.birthYear;
		return this.age;
	},

	summary: function () {
		this.summary = `${this.name} is also known as ${
			this.nickname
		}. He is ${this.calcAge()} years old.`;

		if (this.isCute == true) {
			return this.summary + ' He is also cute.';
		} else {
			return this.summary;
		}
	},
};

console.log(catFoxx.summary());
