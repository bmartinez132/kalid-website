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
	var finalScore = checkValue(question1) + checkValue(question2) + checkValue(question3) + checkValue(question4) + checkValue(question5) + checkValue(question6) 
					+ checkValue(question7)+ checkValue(question8) + checkValue(question9) + checkValue(question10);
	console.log(finalScore);
var messages = ["You may not have a mental illness. Perhaps you are upset, because your having a bad day","Some signs of mental illnesses is detected","You may have a mental illness. Please consult your doctor"];

var range;

	if (finalScore < 30) {
		range = 0;
	}
	if (finalScore > 30 && finalScore < 49) {
		range = 1;
	}
	if (finalScore == 50) {
		range = 2;
	}
document.getElementById("after_submit").style.visibility = "visible";

document.getElementById("message").innerHTML = messages[range];
}

function checkValue(val){
	if(val == "1"){
		return 1;
	}

	else if (val == "2"){
		return 2;
	}

	else if (val == "3"){
		return 3;
	}

	else if (val == "4"){
		return 4;
	}

	else if(val == "5"){
		return 5;
	}
	else{
		return 0;
	}


}