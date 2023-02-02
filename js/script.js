function createQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        let output = [];

        let answers;

        for(let i=0; i<questions.length; i++){
            answers = [];

            for(letter in questions[i].answers){

                answers.push(
                    `<label>'
                    + <input type = "radio" name="question" value="${letter}">`
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }

            output.push(
                '<div class="questions">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer) {
        //await code..
    }

    showQuestions(questions, quizContainer);

    submitButton.onClick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}

let myQuestions = [
    {
        question: "What is the name of my dog?",

        answers: {
            a: 'Jim',
            b: 'John',
            c: 'Sid'
        },

        correctAnswer: 'a'
    },
    {
        question: "What is the name of my cat?",

        answers: {
            a: 'Ben',
            b: 'Stella',
            c: 'Sid'
        },

        correctAnswer: 'c'
    }
];