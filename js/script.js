function createQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        //await code...
    }

    function showResults(questions, quizContainer, resultsContainer) {
        //await code..
    }

    showQuestions(questions, quizContainer);

    submitButton.onClick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}