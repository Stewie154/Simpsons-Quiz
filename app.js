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

const upTo20P = "./resources/images/homer-scared.jpeg";
const twentyTo40P = "./resources/images/homer-confused.gif";
const fortyTo80P = "./resources/images/average-homer.jpg";
const eightyTo99P = "./resources/images/positive-homer.jpg";
const perfectScore = "./resources/images/homer-dance.gif";


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
    scorePercentage = ((score / questions.length) * 100).toFixed(0);
    for(let i = 0; i < picturesAndMessages.length; i++){
        if (scorePercentage >= picturesAndMessages[i].percentageLowerLimit && scorePercentage <= picturesAndMessages[i].percentageUpperLimit){
            finalPicture.src = picturesAndMessages[i].picture;
            message.innerHTML = picturesAndMessages[i].message;
        }
    }
    playAgainBtn.classList.remove('hide');
 }

 picturesAndMessages = [
    {
        percentageLowerLimit: 0,
        percentageUpperLimit: 20,
        picture: upTo20P,
        message: 'It\'s the taking part that counts!'
    },
    {
        percentageLowerLimit: 21,
        percentageUpperLimit: 40,
        picture: twentyTo40P,
        message: 'I\'ve seen worse!'
    },
    {
        percentageLowerLimit: 41,
        percentageUpperLimit: 80,
        picture: fortyTo80P,
        message: 'Not bad!'
    },
    {
        percentageLowerLimit: 81,
        percentageUpperLimit: 99,
        picture: eightyTo99P,
        message: 'You\'re a true fan!'
    },
    {
        percentageLowerLimit: 100,
        percentageUpperLimit: 100,
        picture: perfectScore,
        message: 'Perfect Score!'
    }
]
 

questions = [
    {
        question: 'What colour is the skin of the Simpsons family?',
        answers: [
            {text: 'yellow', correct: true},
            {text: 'blue'},
            {text: 'green'},
            {text: 'purple'}
        ]
    }, 
    {
        question: 'What does Bart often tell people to eat?',
        answers: [
            {text: 'His shirt'},
            {text: 'His hat'},
            {text: 'His shorts', correct: true},
            {text: 'His shoes'}
        ]
    }, 
    {
        question: "Who is the owner of 'The Kwick-E-Mart'?",
        answers: [
            {text: 'Milhouse'},
            {text: 'Nelson'},
            {text: 'Homer'},
            {text: 'Apu', correct: true}
        ]
    }, 
    {
        question: 'What is the name of the Principal of Springfield Elementary School?', 
        answers: [
            {text: 'Principal Wiggum'},
            {text: 'Principal Skinner', correct: true},
            {text: 'Principal Simpson'},
            {text: 'Principal Milhouse'}
        ]
    },
    {
        question: 'What is the name of the popular beer in Springfield?',
        answers: [
            {text: 'Duff', correct: true},
            {text: 'Fluff'},
            {text: 'Fudd'},
            {text: 'Stella'}
        ]
    },
    {
        question: 'What is Milhouse\'s last name?',
        answers: [
            {text: 'Van Houten', correct: true},
            {text: 'Muntz'},
            {text: 'Hutz'},
            {text: 'Simpson'}
        ]
    },
    {
        question: 'Who owns the Nuclear Power Plant?',
        answers: [
            {text: 'Homer'},
            {text: 'Mr. Burns', correct: true},
            {text: 'Snake'},
            {text: 'Lionel Hutz'}
        ]
    },
    {
        question: 'What is Homer\'s middle name?',
        answers: [
            {text: 'James'},
            {text: 'Jeremey'},
            {text: 'Jay', correct: true},
            {text: 'Jack'}
        ]
    },
    {
        question: 'What was the name of the rival truck to Homer\'s \'Mr.Plow\'?',
        answers: [
            {text: 'The Plow King', correct: true},
            {text: 'Sir Plow'},
            {text: 'Big Plow'},
            {text: "Barney's Plow"}
        ]
    },
    {
        question: 'Complete this phrase. \'Hi Everybody!...\'',
        answers: [
            {text: '...Hello there!'},
            {text: 'Hi Dr. Stick!'},
            {text: 'Hi'},
            {text: 'Hi Dr. Nick!', correct: true}
        ]
    },
    {
        question: 'Who is there a statue of in Springfield?',
        answers: [
            {text: 'Jebediah Springfield', correct: true},
            {text: 'Jerusalem Springfield'},
            {text: 'Jeffery-Fire Springfield'},
            {text: 'Milhouse Springfield'}
        ]
    },
    {
        question: 'In the episode \'Simpson and Delilah\', how old does Mr. Burns say he is?',
        answers: [
            {text: '91'},
            {text: '89'},
            {text: '101'},
            {text: '81', correct: true}
        ]
    },
    {
        question: 'Who was replaced by Barney Gumble in \'The B Sharps\'?',
        answers: [
            {text: 'Apu'},
            {text: 'Principal Skinner'},
            {text: 'Chief Wiggum', correct: true},
            {text: 'Barney Gumble'}
        ]
    },
    {
        question: 'Who was the first character to speak in the first episode of season 1?',
        answers: [
            {text: 'Homer'},
            {text: 'Bart'},
            {text: 'Lisa'},
            {text: 'Marge', correct: true}
        ]
    },
    {
        question: 'What is the first name of Sideshow Bob\'s younger brother?',
        answers: [
            {text: 'Jamie'},
            {text: 'Robert'},
            {text: 'Cecil', correct: true},
            {text: 'Frank'}
        ]
    }
    
];



