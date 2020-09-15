var quiz = {

    // Contains the question and answer data.
    questions: [],

    // Contains the users answers to the questions
    answers: [],

    // Contains the messages we can display for various percentage scores
    scoreMessages: [{
            percent: 100,
            message: 'Perfect score, good work!'
        },
        {
            percent: 90,
            message: 'Awesome score, well done.'
        },
        {
            percent: 75,
            message: 'Great score, well done.'
        },
        {
            percent: 60,
            message: 'Good score.'
        },
        {
            percent: 40,
            message: 'You can do better.'
        },
        {
            percent: 25,
            message: 'Uh-oh, keep practicing.'
        },
        {
            percent: 0,
            message: 'Perhaps do some research!'
        }
    ],

    // This is the current question being answered
    currentQuestion: 0,

    // This controls whether a question can be answered or not (for transitioning purposes).
    disableAnswering: false,

    // This is the main quiz element on the page.
    quizElement: document.getElementById("quiz"),

    // This is the container for the scores
    scoreContainer: document.getElementById("score-container"),

    // This is the element where we will display the score.
    scoreElement: document.getElementById("score"),

    // This is the element which contains the maximum score (i.e. total number of questions)
    maxScoreElement: document.getElementById("max-score"),

    // This is the element that contains the message we will display when the user has finished the quiz (i.e. well done or better luck next time)
    scoreMessageElement: document.getElementById("score-message"),

    // This is the element that contains the question
    questionElement: document.getElementById("question"),

    // This is the container for the question options
    questionOptions: document.getElementById("question-options"),

    init: function (data) {
        // Store the question data within the quiz object.
        this.questions = data;

        // Start the quiz!
        this.start();
    },

    start: function () {
        // Reset the default values (they are set here so we can call this function again to restart the quiz).
        this.disableAnswering = false;
        this.answers = [];
        this.currentQuestion = 0;
        this.scoreContainer.style.display = 'none';

        // Display the first question.
        this.displayQuestion();
    },

    displayQuestion: function () {
        // Check that there is another question.
        if (typeof questions[this.currentQuestion] !== 'undefined') {
            // This will be used to store the HTML we are about to display on the page.
            let html = '';

            // This is a copy of the current question from the questions array
            let question = questions[this.currentQuestion];

            // Loop over the options to add them to the HTML
            question.options.forEach(function (option, index) {
                html += "<div class='button question-button' onclick='quiz.answer(this, " + index + ")'>" + option + "</div>";
            });

            // Set the new question
            this.questionElement.textContent = question.question;

            // Add the options to the page.
            this.questionOptions.innerHTML = html;

            // Remove the class from the quiz as we no longer need to fade out the other options.
            this.quizElement.classList.remove("question-answered");

            // Set this back to false so we are able to answer questions again.
            this.disableAnswering = false;
        } else {
            // There are no more questions, finish & score the quiz.
            this.scoreQuiz();
        }
    },

    answer: function (element, answer) {
        // This ensures that they don't click any other answers while transitioning.
        if (!this.disableAnswering) {
            // Add a class to the quiz so we can fade out the other answers.
            this.quizElement.classList.add("question-answered");

            // Add a class to the selected answer so we know which one to keep displaying.
            element.classList.add("selected-answer");

            // Set disableAnswering so a user can't select the other answers before showing the next question.
            this.disableAnswering = true;

            // Keep track of the answer we have selected
            this.answers[this.currentQuestion] = answer;

            // We're using a timeout here so that the selected answer is made more prominent for a short time before loading the next question.
            setTimeout(function () {
                // Increment the current question counter so we can move onto the next question.
                quiz.currentQuestion += 1;

                // Display the next question.
                quiz.displayQuestion();
            }, 750);
        }
    },

    scoreQuiz: function () {
        // Variables we'll use for calculating the score.
        let score = 0;
        let totalQuestions = this.questions.length;

        // Count up how many questions were answered correctly.
        for(var i = 0; i < totalQuestions; i ++) {
            let question = this.questions[i];

            if (question.answer === quiz.answers[i]) {
                score++;
            }
        }

        // Figure out which message to display for this answer.
        var percentageScore = ((score / totalQuestions) * 100).toFixed(0);
        for(var i = 0; i < this.scoreMessages.length; i ++) {
            let item = this.scoreMessages[i];

            if(percentageScore >= item.percent) {
                this.scoreMessageElement.textContent = item.message;
                break;
            }
        }

        // Display the highest possible score for the quiz on the page.
        this.maxScoreElement.textContent = totalQuestions;

        // Display the users score on the page.
        this.scoreElement.textContent = score;

        // Display the score container.
        this.scoreContainer.style.display = 'flex';

        // On a laptop, the score container is always in view, but on smaller devices it may not be.
        // Below is some code to make the page scroll down to ensure it's in view (but only scroll if it's not in view).

        // This is the position on the page of the top of the score container.
        let scoreContainerTop = this.scoreContainer.offsetTop;

        // This is the position on the page of the bottom of the score container.
        let scoreContainerBottom = this.scoreContainer.offsetHeight + scoreContainerTop;

        // This is the height of the page, needed to figure out whether or not the container is in view or not.
        let pageHeight = window.outerHeight;

        // This is how far we are scrolled down the page, we need to know that to figure out whether the container is in view or not.
        let scrollPosition = window.scrollY;

        // Calculate how far away from the bottom of the page the bottom of the score container is.
        let difference = scoreContainerBottom - (pageHeight + scrollPosition);

        // If the bottom of the score container is below the bottom of the page, scroll down.
        if(difference > 0) {
            window.scroll(0, scrollPosition + difference);
        } else {
            // If the top of the score container is above the top of the page, scroll up.
            if(scoreContainerTop < scrollPosition) {
                window.scroll(0, scrollPosition - (scrollPosition - scoreContainerTop));
            }
        }
    }


}