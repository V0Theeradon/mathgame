
const answerInput = document.getElementById("answer");
const resultElement = document.getElementById("result")
const scoreElement = document.getElementById('score');
const questionCountElement = document.getElementById('questionCount');

let score = 0;
let questionCount = 0;
let operator = '+';
let num1, num2, correctAnswer;

function generateQuestion() {
  num1 = Math.floor(Math.random() * 100) + 1;
  num2 = Math.floor(Math.random() * 100) + 1;
  correctAnswer = calculateAnswer(num1, num2, operator);
  document.getElementById('question').textContent = num1 + ' ' + operator + ' ' + num2;
  document.getElementById('answer').style.display = 'block';
  document.getElementById('result').textContent = '';
  questionCount++;
  questionCountElement.textContent = `Question: ${questionCount}`;
  userAnswer.value = '';
}

function calculateAnswer(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
}

function changeOperator(newOperator) {
  operator = newOperator;
  generateQuestion();
}


function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('userAnswer').value);
  if (userAnswer === correctAnswer) {
    document.getElementById('result').textContent = 'Correct!';
    resultElement.style.color = "green";
    score++
    scoreElement.textContent = `Score: ${score}`;
   
  } else {
    document.getElementById('result').textContent = 'Incorrect. Try again.';
    resultElement.style.color = "red";
   
  }
  setTimeout(function() {
    generateQuestion();
  }, 2500);
  document.getElementById('userAnswer').value = '';
  userAnswer.value = '';
}

document.addEventListener('DOMContentLoaded', function () {
    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', resetGame);
  
    function resetGame() {
      score = 0;
      questionCount = 0;
      scoreElement.textContent = 'Score: 0';
      questionCountElement.textContent = 'Question: 0';
      question.textContent = 'Press "Start" to begin.';
      userAnswer.value = '';
      resultElement.textContent = '';
      startButton.style.display = 'block';
      document.getElementById('answer').style.display = 'none';
    }
  });
 