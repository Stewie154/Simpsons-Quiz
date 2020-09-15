let score = 0;
const answer1 = document.getElementById('correct1');
const answer2 = document.getElementById('correct2');
const answer3 = document.getElementById('correct3');
const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const question3 = document.getElementById('question3');
const question1Btns = document.getElementById('question1Btns');
const question2Btns = document.getElementById('question2Btns');
const question3Btns = document.getElementById('question3Btns');
const scoreContainer = document.getElementById('score-container');
var scoreDisplay = document.getElementById('score-display');
var finalMessage = document.getElementById('message');
var finalPicture = document.getElementById('final-picture');




question1Btns.addEventListener('click', (checkFirstAnswer));
question2Btns.addEventListener('click', (checkSecondAnswer));
question3Btns.addEventListener('click', (checkThirdAnswer));

function checkFirstAnswer(click){
    buttonClicked = click.target;
    if (buttonClicked === answer1){
        answer1.classList.add('correct');
        question1.style.backgroundColor = 'green';
        score++;
    } else {
        buttonClicked.classList.add('incorrect');
        answer1.classList.add('correct');
        question1.style.backgroundColor = 'red';
    }
    question1Btns.removeEventListener('click', (checkFirstAnswer));
}
   
function checkSecondAnswer(click){
    buttonClicked = click.target;
    if (buttonClicked === answer2){
        answer2.classList.add('correct');
        question2.style.backgroundColor = 'green';
        score++;
    } else {
        buttonClicked.classList.add('incorrect');
        answer2.classList.add('correct');
        question2.style.backgroundColor = 'red';
    }
    question2Btns.removeEventListener('click', (checkFirstAnswer));
}

function checkThirdAnswer(click){
    buttonClicked = click.target;
    if (buttonClicked === answer3){
        answer3.classList.add('correct');
        question3.style.backgroundColor = 'green';
        score++;
    } else {
        buttonClicked.classList.add('incorrect');
        answer3.classList.add('correct');
        question3.style.backgroundColor = 'red';
    }
    question3Btns.removeEventListener('click', (checkThirdAnswer));
    revealResults();
}

function revealResults(){
    scoreContainer.classList.remove('hide');
    if(score === 3){
        scoreDisplay.innerHTML = 'You scored 3/3';
    } else if (score === 2){
        scoreDisplay.innerHTML = 'You scored 2/3';
        finalMessage.innerHTML = 'Good score!';
        finalPicture.src = './resources/images/average-homer.jpg';
    } else if (score === 1){
        scoreDisplay.innerHTML = 'You scored 1/3';
        finalMessage.innerHTML = 'Better than nothing, I suppose!';
        finalPicture.src = './resources/images/homer-confused.gif';
    } else {
        scoreDisplay.innerHTML = 'You scored 0/3';
        finalMessage.innerHTML = "It's the taking part that counts!";
        finalPicture.src = './resources/images/homer-scared.jpeg';
    }
    
}





