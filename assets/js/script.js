const startButton = document.getElementById('start-btn');
const questionContainerEl = document.getElementById('question-container');
const shuffledQuestions, currentQuestionIndex
const questionEl = document.getElementById('question');
const answerButtonEl = document.getElementById('answer-button');

startButton.addEventListener("click", startGame);

function startGame () {
console.log('started');
startButton.classList.add('hide');
shuffledQuestions = questions.sort(() => Math.random() - .5);
currentQuestionIndex = 0;
questionContainerEl.classList.remove('hide')
setNextQuestion();
};

function setNextQuestion () {
  showQuestion(shuffledQuestions[currentQuestionIndex]);
};

function showQuestion (question) {

};

function selectAnswer () {

};

const questions = [
  {
    question: 'What is 2 + 2',
    answers: [
      { text: '4', correct: true},
      { text: '6', correct = false}
    ]
  }
];