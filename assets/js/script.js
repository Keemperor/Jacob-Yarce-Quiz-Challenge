const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerEl = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerButtonEl = document.getElementById('answer-btns');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
})

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
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonEl.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  }
  else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
  
};

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
};

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

const questions = [
  {
    question: 'Commonly used Data types DO Not include:',
    answers: [
      { text: 'Strings', correct: false},
      { text: 'Booleans', correct: false},
      { text: 'Alerts', correct: true},
      { text: 'Numbers', correct: false}
    ]
  },
  {
    question: 'String values must be enclosed within',
    answers: [
      { text: '4', correct: true},
      { text: '6', correct: false},
      { text: '6', correct: false},
      { text: '6', correct: false}
    ]
  },
  {
    question: 'What is 2 + 2',
    answers: [
      { text: '4', correct: true},
      { text: '6', correct: false},
      { text: '6', correct: false},
      { text: '6', correct: false}
    ]
  },
  {
    question: 'What is 2 + 2',
    answers: [
      { text: '4', correct: true},
      { text: '6', correct: false},
      { text: '6', correct: false},
      { text: '6', correct: false}
    ]
  },
  {
    question: 'What is 2 + 2',
    answers: [
      { text: '4', correct: true},
      { text: '6', correct: false},
      { text: '6', correct: false},
      { text: '6', correct: false}
    ]
  }
];