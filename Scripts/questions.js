var next1 = document.getElementById("btn_next1");
var next2 = document.getElementById("btn_next2");
var next3 = document.getElementById("btn_next3");

var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");

var firstForm = document.getElementById("firstQuestion");
var secondForm = document.getElementById("secondQuestion");
var thirdForm = document.getElementById("thirdQuestion");

var firstAnswer = firstForm.elements[2];
var secondAnswer = secondForm.elements[0];
var thirdAnswer = thirdForm.elements[3];

var score = 0;

next1.onclick = function(){
    if(firstAnswer.checked){
        score++;
        console.log(score);
    }
    question2.style.display = "block";
    question1.style.display = "none";
    question3.style.display = "none";
}
next2.onclick = function(){
    if(secondAnswer.checked){
        score++;
        console.log(score);
    }
    question2.style.display = "none";
    question1.style.display = "none";
    question3.style.display = "block";
}
next3.onclick = function(){
    if(thirdAnswer.checked){
        score++;
        console.log(score);
    }
    question2.style.display = "none";
    question1.style.display = "none";
    question3.style.display = "none";
    var result = document.getElementById("score");
    result.innerHTML = score;
    document.getElementById("score_div").style.display = "block";
}

