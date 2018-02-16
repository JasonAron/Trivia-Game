
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

//===========================
//-------- Questions --------
//===========================

//1.Which of the following groups is disappearing the fastes?
	//Land Species, Sea Species, *Freshwater Species*
//2. How many people could we feed with the grain we use for the cattle industry?
	//1 Million, 800 Million, 2 Billion, *9 Billion*
//3. 
//4.
//5. 
//6. 
//7. 
//8. 

//===============================
//-------- Go!!! 2(^_^2) --------
//===============================


var startScreen
var counter = 25;
var questionArray = [""]
var answerArray = [[""]]
var correctAnswers = [""]
var correctTotal = 0;
var incorrectTotal = 0;
var unansweredTotal = 0;

let state = {
	myQuestions: [
		{
			question: "Which of the following groups is disappearing the fastest?",
			answers:[
				 "Land species",
				 "Sea species",
				 "Fresh water",
			],
			correctAnswer: "c"
		},

		{
			question: "How many people could we feed with the grain we use for the cattle industry?",
			answers: [
				 "Land species",
				 "Sea species",
				 "Fresh water",
			],
			correctAnswer: "c"
		},
	],
	questionCounter: 0
} 



function startGame() {
	$("#overlay").removeClass("hidden");
	$(".startBtn").addClass("hidden");
	generateQuestions();

};

function generateQuestions() {
	var currentQuestion = state.myQuestions[state.questionCounter]
	$(".question").html(currentQuestion.question)
	for (let i = 0; i < currentQuestion.answers.length; i++) {
		$(".answers").append("<button class='answer' >" + currentQuestion.answers[i] + "</button>"); 		
	}
};

$(".startBtn").on("click", function() {
	startGame()

});







// function gameLoad() {
// 	$("#overlay").hide();	
// }

// gameLoad();





