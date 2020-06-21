// Function constructor

// var john = {
// 	name: 'John',
// 	yearOfBirth: 1990,
// 	job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job) {
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;
// }

// Person.prototype.calculateAge  = function() {
// 	console.log(2020-this.yearOfBirth);
// }

// Person.prototype.lastName = 'Smith';

// //new operator creates a new empty object
// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

//Object.create

// var personProto = {
// 	calculateAge: function() {
// 		console.log(2020-this.yearOfBirth);
// 	}
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto,
// 	{
// 		name: { value: 'Jane' },
// 		year: { value: 1969 },
// 		job: { value: 'designer' }
// 	});

// Primitives vs Objects

// //primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);

// //objects
// var obj1 = {
// 	name: 'John',
// 	age: 26
// };
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

// //functions
// var age = 27;
// var obj = {
// 	name: 'Jonas',
// 	City: 'Lisbon'
// };

// function change(a, b) {
// 	a = 30;
// 	b.city = 'San Francisco';
// }

// change(age, obj);
// console.log(age);
// console.log(obj.city);

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
// 	var arrRes = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		arrRes.push(fn(arr[i]))
// 	}
// 	return arrRes;
// }

// function calculateAge(el) {
// 	return 2016 - el;
// }

// function isFullAge(el) {
// 	return el >= 18;
// }

// function maxHeartRate(el) {
// 	if (el >= 18 && el <= 81) {
// 		return Math.round(206.9 - (0.67*el));
// 	} else {
// 		return -1;
// 	}
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);

// console.log(ages);
// console.log(fullAges);
// console.log(rates);

// function interviewQuestion(job) {
// 	if (job === 'designer') {
// 		return function(name) {
// 			console.log(name + ', can you please explain what UX design is?');
// 		}
// 	} else if (job === 'teacher') {
// 		return function(name) {
// 			console.log('What subject do you teach, ' + name + '?');
// 		}
// 	} else {
// 		return function(name) {
// 			console.log ('Hello ' + name + ', what do you do?');
// 		}
// 	}
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('John');

// function game() {
// 	var score = Math.random() * 10;
// 	console.log(score >= 5);
// }

// game();

// (function() {
// 	var score = Math.random() * 10;
// 	console.log(score >= 5);
// })();

// // console.log(score);

// (function(goodLuck) {
// 	var score = Math.random() * 10;
// 	console.log(score >= 5) - goodLuck;
// })(5);

// function retirement(retirementAge) {
// 	var a = " years left until retirement.";
// 	return function (yearOfBirth) {
// 		var age = 2016 - yearOfBirth;
// 		console.log(retirementAge - age + a);
// 	};
// }

// var retirementGermany = retirement(65);
// var retirementUS = retirement(66);
// var retirementIceland = retirement(67);

// retirementUS(1990);
// retirementGermany(1990);
// retirementIceland(1990);

// // retirement(66)(1990);


// function interviewQuestion(job) {
// 	return function (name) {
// 		if (job === "designer") {
// 			console.log(name + ", can you please explain what UX design is?");
// 		} else if (job === "teacher") {
// 			console.log("What subject do you teach, " + name + "?");
// 		} else {
// 			console.log("Hello " + name + ", what do you do?");
// 		}
// 	};
// }

// interviewQuestion('teacher')('John');





(function() {
	function Question(question, answers = [], correctAnswer) {
		this.question = question;
		this.answers = answers;
		this.correctAnswer = correctAnswer;
	}
	
	Question.prototype.randomQuestion = function() {
		console.log(this.question);
	
		for (var i = 0; i < this.answers.length; i++) {
			console.log(i + ': ' + this.answers[i]);
		}
	}
	
	Question.prototype.checkAnswer = function(ans, callBack) {
		var sc;
		if (ans === this.correctAnswer) {
			console.log('Correct!');
			sc = callBack(true);
		} else {
			console.log('Incorrect answer. Try again!');
			sc = callBack(false);
		}
		this.displayScore(sc);
	}

	Question.prototype.displayScore = function(score) {
		console.log('Your current score is: ' + score);
		console.log('-------------------------');
	}
	
	var question1 = new Question(
		"who am i?",
		["the king", "the queen", "the bishop", "nobody"],
		3
	);
	
	var question2 = new Question(
		"what am i?",
		["bug", "placeto", "human", "atom"],
		2
	);
	
	var question3 = new Question(
		"where am i?",
		["tokyo", "moscow", "lisbon", "antarctica"],
		0
	);

	var questions = [question1, question2, question3];

	function score() {
		var sc = 0;
		return function(correct) {
			if (correct) {
				sc++;
			}
			return sc;
		}
	}

	var keepScore = score();

	function nextQuestion() {
		var selectedQuestion = questions[Math.floor (Math.random() * questions.length)];
		selectedQuestion.randomQuestion();
		
		var inputAnswer = prompt(selectedQuestion.question, 'input a number');
		console.log('Your answer is ' + selectedQuestion.answers[inputAnswer]);

		if(inputAnswer !== 'exit') {
			selectedQuestion.checkAnswer(parseInt(inputAnswer), keepScore);
			nextQuestion();
		}		
	}
	
	nextQuestion();
	
})();






