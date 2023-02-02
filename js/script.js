const quizContainer = document.getElementById('quizquestions');
const resultsContainer = document.getElementById('results')
const submitButton - document.getElementById('submit');


function constructQuiz() {

    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            const answers = [];

            for(letter in currentQuestion.answers){

                //add a html radio button
                answers.push(
                    <label>
                        <input type ="radio" name ="question${questionNumber}" value="${letter}">
                            ${letter} :
                            ${currentQuestion.answers[letter]}
                    </label>
                );
            }

            output.push(
                <div class="question"> ${currentQuestion.question}</div>
                <div class="answers"> ${answers.join('')} </div>
            );

        }
    );

    quizContainer.innerHTML = output.join('');



}

function displayResults() {}

//display quiz immediately to user
constructQuiz();

//display results to user upon submitting
submitButton.addEventListener('click', showResults);


const myQuestions = [
    {
        question: "My name is what?",
        answers: {
            a: "James",
            b: "John",
            c: "Deb"

        },
        correctAnswer : "a"
    },
    //next question and so on....
]