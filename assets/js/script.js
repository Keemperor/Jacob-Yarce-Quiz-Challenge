const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerEl = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerButtonEl = document.getElementById('answer-btns');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);

function startGame () {
  console.log('started');
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainerEl.classList.remove('hide');
  setNextQuestion();
};

function setNextQuestion () {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
};

function showQuestion (question) {
  questionEl.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct
    };
    button.addEventListener('click', selectAnswer); 
    answerButtonEl.appendChild(button);
  });
};

function resetState () {
  nextButton.classList.add('hide');
  while (answerButtonEl.firstChild) {
    answerButtonEl.removeChild(answerButtonEl.firstChild);
  };
};

function selectAnswer (e) {

};

const questions = [
  {
    question: 'What is 2 + 2',
    answers: [
      { text: '4', correct: true},
      { text: '6', correct: false}
    ]
  }
];