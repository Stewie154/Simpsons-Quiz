let score = 0;
const questionContainer = document.getElementById('question-container');
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const question = document.getElementById('question');
const answerBtns = document.getElementById('answer-btns');
const showResultsBtn = document.getElementById('show-results');
const playAgainBtn = document.getElementById('play-again-btn');
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');
let answer4 = document.getElementById('answer4');
let currentQuestionIndex 

const scoreContainer = document.getElementById('score-container');
let scoreDisplay = document.getElementById('score-display');
let finalPicture = document.getElementById('final-picture');
let message = document.getElementById('message');

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', setNextQuestion);
showResultsBtn.addEventListener('click', showResults);
playAgainBtn.addEventListener('click', startGame);


function startGame(){
    scoreContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    answerBtns.classList.remove('hide');
    question.classList.remove('hide');
    startButton.classList.add('hide');
    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
}

function setNextQuestion(){
    answer1.addEventListener('click', selectAnswer1);
    answer2.addEventListener('click', selectAnswer2);
    answer3.addEventListener('click', selectAnswer3);
    answer4.addEventListener('click', selectAnswer4);
    if(currentQuestionIndex === questions.length){
        showResults();
    } else{
        resetState();
    question.innerHTML = questions[currentQuestionIndex].question;
    answer1.innerHTML = questions[currentQuestionIndex].answers[0].text;
    answer2.innerHTML = questions[currentQuestionIndex].answers[1].text;
    answer3.innerHTML = questions[currentQuestionIndex].answers[2].text;
    answer4.innerHTML = questions[currentQuestionIndex].answers[3].text; 
    } 
}

function resetState(){
    questionContainer.classList.remove('correct');
    questionContainer.classList.remove('incorrect');
    answer1.classList.remove('correct');
    answer1.classList.remove('incorrect');
    answer2.classList.remove('correct');
    answer2.classList.remove('incorrect');
    answer3.classList.remove('correct');
    answer3.classList.remove('incorrect');
    answer4.classList.remove('correct');
    answer4.classList.remove('incorrect');
    nextButton.classList.add('hide');
    showResultsBtn.classList.add('hide');
}

function selectAnswer1(){
    answer1.removeEventListener('click', selectAnswer1);
    answer2.removeEventListener('click', selectAnswer2);
    answer3.removeEventListener('click', selectAnswer3);
    answer4.removeEventListener('click', selectAnswer4);
    if(questions[currentQuestionIndex].answers[0].correct === true){
        answer1.classList.add('correct');
        questionContainer.classList.add('correct');
        score ++;
        currentQuestionIndex ++;
        if (currentQuestionIndex === questions.length){
            showResultsBtn.classList.remove('hide');
        } else {
            nextButton.classList.remove('hide');
        }
    } else {
        answer1.classList.add('incorrect');
        questionContainer.classList.add('incorrect');
        currentQuestionIndex ++;
        if (currentQuestionIndex === questions.length){
            showResultsBtn.classList.remove('hide');
        } else {
            nextButton.classList.remove('hide');
        }
    }
 }

 function selectAnswer2(){
    answer1.removeEventListener('click', selectAnswer1);
    answer2.removeEventListener('click', selectAnswer2);
    answer3.removeEventListener('click', selectAnswer3);
    answer4.removeEventListener('click', selectAnswer4);
    if(questions[currentQuestionIndex].answers[1].correct === true){
        answer2.classList.add('correct');
        questionContainer.classList.add('correct');
        score ++;
        currentQuestionIndex ++;
        if (currentQuestionIndex === questions.length){
            showResultsBtn.classList.remove('hide');
        } else {
            nextButton.classList.remove('hide');
        }
    } else {
        answer2.classList.add('incorrect');
        questionContainer.classList.add('incorrect');
        currentQuestionIndex ++;
        if (currentQuestionIndex === questions.length){
            showResultsBtn.classList.remove('hide');
        } else {
            nextButton.classList.remove('hide');
        }
    }
 }

 function selectAnswer3(){
    answer1.removeEventListener('click', selectAnswer1);
    answer2.removeEventListener('click', selectAnswer2);
    answer3.removeEventListener('click', selectAnswer3);
    answer4.removeEventListener('click', selectAnswer4);
    if(questions[currentQuestionIndex].answers[2].correct === true){
        answer3.classList.add('correct');
        questionContainer.classList.add('correct');
        score ++;
        currentQuestionIndex ++;
        if (currentQuestionIndex === questions.length){
            showResultsBtn.classList.remove('hide');
        } else {
            nextButton.classList.remove('hide');
        }
    } else {
        answer3.classList.add('incorrect');
        questionContainer.classList.add('incorrect');
        currentQuestionIndex ++;
        if (currentQuestionIndex === questions.length){
            showResultsBtn.classList.remove('hide');
        } else {
            nextButton.classList.remove('hide');
        }
    }
 }

 function selectAnswer4(){
    answer1.removeEventListener('click', selectAnswer1);
    answer2.removeEventListener('click', selectAnswer2);
    answer3.removeEventListener('click', selectAnswer3);
    answer4.removeEventListener('click', selectAnswer4);
    if(questions[currentQuestionIndex].answers[3].correct === true){
        answer4.classList.add('correct');
        questionContainer.classList.add('correct');
        score ++;
        currentQuestionIndex ++;
        if (currentQuestionIndex === questions.length){
            showResultsBtn.classList.remove('hide');
        } else {
            nextButton.classList.remove('hide');
        }
    } else {
        answer4.classList.add('incorrect');
        questionContainer.classList.add('incorrect');
        currentQuestionIndex ++;
        if (currentQuestionIndex === questions.length){
            showResultsBtn.classList.remove('hide');
        } else {
            nextButton.classList.remove('hide');
        }
    }
 }

 function showResults(){
    questionContainer.classList.add('hide');
    scoreContainer.classList.remove('hide');
    scoreDisplay.innerHTML = `You scored ${score}/${questions.length}!`;
    if (score <= (questions.length * 0.2)){
        finalPicture.src = "./resources/images/homer-scared.jpeg";
        message.innerHTML = "It's the taking part that counts!";
    } else if (score > (questions.length * 0.2) && score <= (questions.length * 0.4)){
        finalPicture.src = "./resources/images/homer-confused.gif";
        message.innerHTML = "I've seen worse!";
    } else if (score > (questions.length * 0.4) && score < (questions.length * 0.8)){
        finalPicture.src = "./resources/images/average-homer.jpg";
        message.innerHTML = "Not bad!";
    } else if (score >= (questions.length * 0.8) && score < (questions.length)){
        finalPicture.src = "./resources/images/positive-homer.jpg";
        message.innerHTML = "You're a true fan!";
    } else {
        finalPicture.src ="./resources/images/homer-dance.gif";
        message.innerHTML = "Perfect Score!";

    }
    playAgainBtn.classList.remove('hide');

    

 }


questions = [
    {
        question: 'What colour is the skin of the Simpsons family?',
        answers: [
            {text: 'yellow', correct: true},
            {text: 'blue', correct: false},
            {text: 'green', correct: false},
            {text: 'purple', correct: false}
        ]
    }, 
    {
        question: 'What does Bart often tell people to eat?',
        answers: [
            {text: 'His shirt', correct: false},
            {text: 'His hat', correct: false},
            {text: 'His shorts', correct: true},
            {text: 'His shoes', correct: false}
        ]
    }, 
    {
        question: "Who is the owner of 'The Kwick-E-Mart'?",
        answers: [
            {text: 'Milhouse', correct: false},
            {text: 'Nelson', correct: false},
            {text: 'Homer', correct: false},
            {text: 'Apu', correct: true}
        ]
    }, 
    {
        question: 'What is the name of the Principal of Springfield Elementary School?', 
        answers: [
            {text: 'Principal Wiggum', correct: false},
            {text: 'Principal Skinner', correct: true},
            {text: 'Principal Simpson', correct: false},
            {text: 'Principal Milhouse', correct: false}
        ]
    },
    {
        question: 'What is the name of the popular beer in Springfield?',
        answers: [
            {text: 'Duff', correct: true},
            {text: 'Fluff', correct: false},
            {text: 'Fudd', correct: false},
            {text: 'Stella', correct: false}
        ]
    }
]

