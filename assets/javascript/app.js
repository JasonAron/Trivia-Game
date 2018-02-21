
//==============================================
//---- Why you do this to me (╯°□°）╯︵ ┻━┻) ---- 
//==============================================
//-------- Pseudo Code --------
//=============================

//Start Screen
	//on.click start trivia game.

//One question will appear at a time.
	//These questions will be timed.

//If correct 
	//Show a screen congratulating them for choosing the right option. 
	//After a few seconds display next question.
	//Do this with no user input.

//If incorrect
	//Show a screen condemning them for choosing the wrong option. 
	//Display correct answer
	//After a few seconds display next question.
	//Do this with no user input.

//If time runs out
	//Display time is up 
	//Display correct answer
	//After a few seconds display next question.
	//Do this with no user input

//After all question
	//Show final screen
		//Correct answers
		//Incorrect answers
		//Restart Option (without reloading page)


//===============================
//-------- Go!!! 2(^_^2) --------
//===============================

//====================
// ---- Questions ----
//====================
var	myQuestions = [
		{
			question: "Which of the following groups is disappearing the fastest?",
			answers:[
				 "Land Species",
				 "Sea Species",
				 "Fresh Water Species",
			],
			correctAnswer: "Fresh Water Species"
		},

		{
			question: "How many people could we feed with the grain we use for the Animal Agriculture Industry?",
			answers: [
				 "1 Million",
				 "800 Million",
				 "2 Billion",
				 "9 Billion"
			],
			correctAnswer: "9 Billion"
		},
		{
			question: "What is the number one driving force behind deforestation?",
			answers: [
				 "Timber and paper",
				 "Palm Oil",
				 "Cattle and pasture",
			],
			correctAnswer: "Cattle and pasture"
		},
		{
			question: "Which of these industry giants uses more water?",
			answers: [
				 "Crop",
				 "Animal Agriculture",
				 "Fracking",
			],
			correctAnswer: "Animal Agriculture"
		},
		{
			question: "What mass extinction did our planet just enter?",
			answers: [
				 "3rd",
				 "4th",
				 "5th",
				 "6th"
			],
			correctAnswer: "6th"
		},	
		{
			question: "How many toxins are regularly found in your drinking water?",
			answers: [
				 "4",
				 "6",
				 "8",
				 "12"
			],
			correctAnswer: 12
		},
		{
			question: "How much of the world's wealth do the richest 1% own?",
			answers: [
				 "20%",
				 "30%",
				 "40%",
				 "50%"
			],
			correctAnswer: "50%"
		},
	];
 
// ==========================
// ---- Global Variables ----
// ==========================
var correctTotal = 0;
var incorrectTotal = 0;
var unansweredTotal = 0;
var questionCounter = 0;
var questionTimeLeft;
var questionTranisitionTime;
var createTimer;



// ==========================
// ---- Game Start & End ----
// ==========================
function startGame() {
	$("#overlay").removeClass("hidden");
	$(".startBtn").addClass("hidden");
	generateQuestions();
};

function endGame() {
	$(".answers").empty();
	$("#countdowntimer").empty();
	$(".question").html("Correct Answers: " + correctTotal + "<br>" + "Wrong Answers: " + incorrectTotal + "<br>" + "Unanswered Questions: " + unansweredTotal + "<br>");

	var reset = $("<button>");
	reset.text("RESET");
	reset.attr("data-name", "reset");
	reset.addClass("resetBtn");
	$(".question").append(reset);


	reset.on("click", function() {
		var correctTotal = 0;
		var incorrectTotal = 0;
		var unansweredTotal = 0;
		var questionCounter = 0;

		generateQuestions(currentQuestion);
	});
startGame();
};


// ================
// ---- Timers ----
// ================
function startQuestionTimer() {
	var timeleft = 10;
	document.getElementById("countdowntimer").textContent = timeleft;
	createTimer = setInterval(function(){
		timeleft--;
		document.getElementById("countdowntimer").textContent = timeleft;
		if(timeleft === 0) {
    		clearInterval(createTimer);
    		startTransitionTimer();
    		gifUnanswered();
		}
	},1000);
};

function startTransitionTimer() {
	var timeleft = 1;
	createTimer = setInterval(function(){
		timeleft--;
		if(timeleft === 0) {
    		clearInterval(createTimer);
    		incrementQuestionCounter();
    		generateQuestions();
		}
	},1000);
};


// ============================
// ---- Generate Questions ----
// ============================
function generateQuestions() {
	if (questionCounter <= myQuestions.length) {
		var currentQuestion = myQuestions[questionCounter]
		$(".question").html(currentQuestion.question);
		for (let i = 0; i < currentQuestion.answers.length; i++) {
			var answer = $("<button>").attr("class", "answer");
			answer.attr("answer", i);
			answer.text(currentQuestion.answers[i]);
			$(".answers").append(answer);		
		}
		clearInterval(createTimer);
		startQuestionTimer();
		// incrementQuestionCounter();
	} else {
		endGame();
	}
};
// ==========================
// ---- Increment Totals ----
// ==========================
function increaseCorrectTotal() {
	correctTotal++;
};

function increaseIncorrectTotal() {
	incorrectTotal++;
};

function increaseUnansweredTotal() {
	unansweredTotal++;
};

function incrementQuestionCounter(){
	questionCounter++;
};


//===============================
// ---- Question Transitions ----
//===============================
function gifCorrect() {
	$(".answers").empty();
	$("#countdowntimer").empty();
	$(".question").html("YOU ARE CORRECT!" + "<br>" + '<img src="assets/images/correctAnswer.gif">');

	increaseCorrectTotal();
};

function gifIncorrect() {
	$(".answers").empty();
	$("#countdowntimer").empty();
	$(".question").html("YOU ARE WRONG!" + "<br>" + "Correct answer is " + myQuestions[questionCounter].correctAnswer
    + "<br>" + '<img src="assets/images/wrongAnswer.gif">');

	increaseIncorrectTotal();
};

function gifUnanswered() {
	$(".answers").empty();
	$("#countdowntimer").empty();
	$(".question").html("WHERE YOU GO?" + "<br>" + "Correct answer is " + myQuestions[questionCounter].correctAnswer
    + "<br>" + '<img src="assets/images/unanswered.gif">');

	increaseUnansweredTotal();
};


// ==========================
// ---- Player's Guess ------
// ==========================
function checkCorrectIncorrect(value) {	
	if (myQuestions[questionCounter].answers[value] == myQuestions[questionCounter].correctAnswer) {
		gifCorrect();
	} else {
		gifIncorrect();
	}
	startTransitionTimer();
};

// =========================
// ---- Event Listeners ----
// =========================
$(".answers").on("click", ".answer", function() {
	clearInterval(createTimer);
	checkCorrectIncorrect($(this).attr("answer"));
});

$(".startBtn").on("click", function() {
	startGame();
});


// ===========================
// ---- Saved Code Blocks ----
// ===========================

// if (questionCounter >= myQuestions.length) {
// 		// End game 
// } else {
// 	generateQuestions()
// }


// function generateQuestions() {
// 	if (questionCounter <= myQuestions.length) {
// 		var currentQuestion = myQuestions[questionCounter]
// 		$(".question").html(currentQuestion.question)
// 		for (let i = 0; i < currentQuestion.answers.length; i++) {
// 		var answer = $("<button>").attr("class", "answer");
// 			answer.attr("answer", i);
// 			answer.text(currentQuestion.answers[i]);
// 			$(".answers").append(answer);		
// 		}
// 		clearInterval(createTimer);
// 		startQuestionTimer();
// 		incrementQuestionCounter();
// 	} else {
// 		endGame();
// 	}
// };

// function generateQuestions() {
// 	var currentQuestion = myQuestions[questionCounter]
// 	$(".question").html(currentQuestion.question)
// 	for (let i = 0; i < currentQuestion.answers.length; i++) {
// 		var answer = $("<button>").attr("class", "answer");
// 		answer.attr("answer", i);
// 		answer.text(currentQuestion.answers[i]);
// 		$(".answers").append(answer);		
// 	}
// 	clearInterval(createTimer);
// 	startQuestionTimer();
// 	incrementQuestionCounter();
// };


// function endStatsDisplay(){ 
// //     $("#question").html("Correct Answers: " + correctCounter + "<br>" + "Wrong Answers: " + wrongCounter + "<br>"
// //     + "Unanswered Questions: " + unansweredCounter + "<br>");
    
// //     var restart = $("<button>");
// //     restart.text("RESTART");
// //     restart.addClass("restartBtn");
// //     restart.attr("data-name", "restart")
// //     $("#question").append(restart);
    
// //     restart.on("click", function(){
// //         questionCounter = 0;
// //         correctTotal = 0;
// //         incorrectTotal = 0;
// //         unansweredTotal = 0;
// //     }
// // };


// function loadStats(){
// 	if (currentQuestion >= 7) {
// 		endStatsDisplay();
// 	} else {
// 		incrementQuestionCounter();
// 	}
// };


// function checkCorrectIncorrect(value) {	
// 	console.log(value);
// 	// console.log(myQuestions[questionCounter].correctAnswer);
// 	if (value == myQuestions[questionCounter].correctAnswer) {
// 		gifCorrect();
// 	} else {
// 		gifIncorrect();
// 	}
// 	startTransitionTimer();
// };


// function checkCorrectIncorrect(index) {	
// 	if (myQuestions[questionCounter - 1].answers[index] == myQuestions[questionCounter -1].correctAnswer) {
// 		gifCorrect();
// 	} else {
// 		gifIncorrect();
// 	}
// 	startTransitionTimer();
// };
