function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var correct = 0;

		if (question1 == "Happy") {
			correct++;
	}	
		if (question2 == "Yes") {
			correct++;
	}
		if (question3 == "Yes") {
			correct++;
	}	
		if (question4 == "Yes") {
			correct++;
	}	
		if (question5 == "Yes") {
			correct++;
	}
		if (question6 == "Yes") {
			correct++;
	}	
		if (question7 == "Yes") {
			correct++;
	}	
		if (question8 == "Yes") {
			correct++;
	}
		if (question9 == "Yes") {
			correct++;
	}	
		if (question10 == "Yes") {
			correct++;
		}

var messages = ["You may not have a mental illness. Perhaps you are upset, because your having a bad day","Some signs of mental illnesses is detected","You may have a mental illness. Please consult your doctor"];

var range;

	if (correct < 4) {
		range = 2;
	}
	if (correct > 4 && correct < 7) {
		range = 1;
	}
	if (correct > 7) {
		range = 0;
	}
document.getElementById("after_submit").style.visibility = "visible";

document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}