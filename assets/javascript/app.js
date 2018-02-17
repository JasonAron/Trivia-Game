
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


var questionArray = [""]
var answerArray = [[""]]
var correctAnswers = [""]
var correctTotal = 0;
var incorrectTotal = 0;
var unansweredTotal = 0;

//====================
// ---- Questions ----
//====================
let state = {
	myQuestions: [
		{
			question: "Which of the following groups is disappearing the fastest?",
			answers:[
				 "Land Species",
				 "Sea Species",
				 "Fresh Water Species",
			],
			correctAnswer: [2]
		},

		{
			question: "How many people could we feed with the grain we use for the Animal Agriculture Industry?",
			answers: [
				 "1 Million",
				 "800 Million",
				 "2 Billion",
				 "9 Billion"
			],
			correctAnswer: [3]
		},
		{
			question: "What is the number one driving force behind deforestation?",
			answers: [
				 "Timber and paper",
				 "Palm Oil",
				 "Cattle and pasture",
			],
			correctAnswer: [2]
		},
		{
			question: "Which of these industry giants uses more water?",
			answers: [
				 "Crop",
				 "Animal Agriculture",
				 "Fracking",
			],
			correctAnswer: [1]
		},
		{
			question: "What mass extinction did our planet just enter?",
			answers: [
				 "3rd",
				 "4th",
				 "5th",
				 "6th"
			],
			correctAnswer: [3]
		},	
		{
			question: "How many toxins are regularly found in your drinking water?",
			answers: [
				 "4",
				 "6",
				 "8",
				 "12"
			],
			correctAnswer: [3]
		},
		{
			question: "How much of the world's wealth do the riches 1% own?",
			answers: [
				 "20%",
				 "30%",
				 "40%",
				 "50%"
			],
			correctAnswer: [3]
		},
	],
	questionCounter: 3
}; 



function startGame() {
	$("#overlay").removeClass("hidden");
	$(".startBtn").addClass("hidden");
	generateQuestions();

};

function startTimer() {
	var timeleft = 25;
	var createTimer = setInterval(function(){
	timeleft--;
	document.getElementById("countdowntimer").textContent = timeleft;
	if(timeleft <= 0)
    	clearInterval(createTimer);
	},1000);
};

function generateQuestions() {
	var currentQuestion = state.myQuestions[state.questionCounter]
	$(".question").html(currentQuestion.question)
	for (let i = 0; i < currentQuestion.answers.length; i++) {
		$(".answers").append("<button class='answer'>" + currentQuestion.answers[i] + "</button>" + "<br>");		
	}
	startTimer();
};

$(".startBtn").on("click", function() {
	startGame();

});







// function gameLoad() {
// 	$("#overlay").hide();	
// }

// gameLoad();





