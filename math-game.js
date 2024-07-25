const leftPlayer = "L";
const rightPlayer = "R";
const questionText = "Q";
const answerOption = "A";
const leftCross = "X";
const rightCross = "Y";
const menuOption = "M";

// Define sprites
setLegend(
  [leftPlayer, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777`],
  [rightPlayer, bitmap`
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333`],
  [questionText, bitmap`
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................`],
  [answerOption, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777`],
  [leftCross, bitmap`
3377777777777733
3337777777777333
7333777777773337
7733377777733377
7773337777333777
7777333773337777
7777733333377777
7777773333777777
7777773333777777
7777733333377777
7777333773337777
7773337777333777
7733377777733377
7333777777773337
3337777777777333
3377777777777733`],
  [rightCross, bitmap`
7733333333333377
7773333333333777
3777333333337773
3377733333377733
3337773333777333
3333777337773333
3333377777733333
3333337777333333
3333337777333333
3333377777733333
3333777337773333
3337773333777333
3377733333377733
3777333333337773
7773333333333777
7733333333333377`],
  [menuOption, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777`]
);

// Create initial map and menu map
const initialMap = `
LLLLLRRRRR
LLLLLRRRRR
LLLLLRRRRR
LLLLLRRRRR
LLLLLRRRRR
LLLLLRRRRR
LLLLLRRRRR
LLLLLRRRRR`;

const menuMap = `
....................
....................
....................
....................
....................
....................
....................
....................
LLLLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLLLLLL
RRRRRRRRRRRRRRRRRRRR
RRRRRRRRRRRRRRRRRRRR
RRRRRRRRRRRRRRRRRRRR`;

const questions = [
  { question: "2 + 2", answers: [3, 4, 5, 6], correct: 4 },
  { question: "3 + 5", answers: [8, 7, 6, 5], correct: 8 },
  { question: "6 - 1", answers: [5, 4, 3, 2], correct: 5 },
  { question: "9 / 3", answers: [1, 2, 3, 4], correct: 3 },
  { question: "5 * 2", answers: [10, 9, 8, 7], correct: 10 },
  { question: "12 + 15", answers: [25, 26, 27, 28], correct: 27 },
  { question: "7 * 8", answers: [54, 55, 56, 57], correct: 56 },
  { question: "15 / 3", answers: [4, 5, 6, 7], correct: 5 },
  { question: "18 - 9", answers: [7, 8, 9, 10], correct: 9 },
  { question: "45 + 55", answers: [90, 95, 100, 105], correct: 100 }
];

let leftPlayerScore = 0;
let rightPlayerScore = 0;
let currentQuestion = {};
let feedbackMessage = "";
let questionCount = 0;
let inMenu = true; // Track if the game is in the menu state
let maxQuestions = 10; // Default number of questions
let silentMode = false; // Default silent mode off
let timerInterval;
let timeLeft = 10; // Time for each question in seconds

// Define sounds
const correctSound = tune`
120: C5-120,
120: D5-120,
120: A5-120,
120: B5-120,
3360`;
const incorrectSound = tune`
120: B5/120,
120: A5/120,
120: D5/120,
120: C5/120,
3360`;
const startSound = tune`
120: E5-120,
120: D5-120,
120: C5-120,
120: D5-120,
120: A5-120,
3240`;
const gameOverSound = tune`
120: G4-120,
120: F4-120,
120: E4-120,
120: C4/120,
120: C4/120,
3240`;

// Function to get a random question
const getRandomQuestion = () => {
  const index = Math.floor(Math.random() * questions.length);
  return questions[index];
};

// Function to update the question and answers
const updateQuestion = () => {
  if (questionCount >= maxQuestions) {
    endGame();
    return;
  }

  currentQuestion = getRandomQuestion();
  clearText();
  setMap(initialMap);
  displayScores();
  displayQuestionAndAnswers();
  feedbackMessage = "";
  questionCount++;
  startTimer();
};

// Function to display scores
const displayScores = () => {
  addText(`Score:${leftPlayerScore}`, { x: 1, y: 14, color: color`2` });
  addText(`Score:${rightPlayerScore}`, { x: 11, y: 14, color: color`2` });
  addText(`Round:${questionCount + 1}/${maxQuestions}`, { x: 5, y: 1, color: color`2` });
};

// Function to display the question and answers
const displayQuestionAndAnswers = () => {
  addText(currentQuestion.question, { x: 7, y: 3, color: color`2` });

  // Left player answers
  addText(`${currentQuestion.answers[0]}`, { x: 4, y: 5, color: color`6` });
  addText(`${currentQuestion.answers[1]}`, { x: 2, y: 7, color: color`6` });
  addText(`${currentQuestion.answers[2]}`, { x: 4, y: 9, color: color`6` });
  addText(`${currentQuestion.answers[3]}`, { x: 6, y: 7, color: color`6` });

  // Right player answers
  addText(`${currentQuestion.answers[0]}`, { x: 15, y: 5, color: color`6` });
  addText(`${currentQuestion.answers[1]}`, { x: 13, y: 7, color: color`6` });
  addText(`${currentQuestion.answers[2]}`, { x: 15, y: 9, color: color`6` });
  addText(`${currentQuestion.answers[3]}`, { x: 17, y: 7, color: color`6` });

  // Display feedback message
  addText(feedbackMessage, { x: 7, y: 12, color: color`2` });
};

// Function to check the answer
const checkAnswer = (player, answerIndex) => {
  clearInterval(timerInterval); // Stop the timer
  if (currentQuestion.answers[answerIndex] === currentQuestion.correct) {
    if (player === 'left') {
      leftPlayerScore++;
    } else {
      rightPlayerScore++;
    }
    feedbackMessage = "Correct!";
    if (!silentMode) playTune(correctSound);
  } else {
    feedbackMessage = "Wrong!";
    if (player === 'left') {
      leftPlayerScore = Math.max(0, leftPlayerScore - 1); // Decrease score but not below zero
    } else {
      rightPlayerScore = Math.max(0, rightPlayerScore - 1); // Decrease score but not below zero
    }
    if (!silentMode) playTune(incorrectSound);
  }

  displayFeedbackAndNextQuestion();
};

// Function to display feedback and move to the next question
const displayFeedbackAndNextQuestion = () => {
  clearText();
  displayScores();
  addText(feedbackMessage, { x: 7, y: 12, color: color`2` });

  // Add a delay before updating the question
  setTimeout(() => {
    updateQuestion();
  }, 500); // 0.5-second delay
};

// Function to start the timer
const startTimer = () => {
  timeLeft = 10;
  displayTimer();
  timerInterval = setInterval(() => {
    timeLeft--;
    displayTimer();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      feedbackMessage = "Time's up!";
      displayFeedbackAndNextQuestion();
    }
  }, 1000); // Update every second
};

// Function to display the timer
const displayTimer = () => {
  addText(`Time:${timeLeft}`, { x: 7, y: 0, color: color`2` });
};

// Function to end the game
const endGame = () => {
  clearInterval(timerInterval); // Stop the timer
  clearText();
  if (!silentMode) playTune(gameOverSound);
  setMap(initialMap)
  addText("Game Over", { x: 6, y: 6, color: color`2` });
  addText(`Score: ${leftPlayerScore}:${rightPlayerScore}`, { x: 5, y: 8, color: color`2` });

  // Return to menu after a delay
  setTimeout(() => {
    showMenu();
  }, 3000); // 3-second delay
};

// Function to show the game menu
const showMenu = () => {
  inMenu = true;
  clearText();
  setMap(menuMap);
  addText("Math Quiz Game", { x: 3, y: 2, color: color`3` });
  addText("Made by Zigao Wang", { x: 1, y: 5, color: color`7` });
  addText("Use A/D to change rounds", { x: 1, y: 7, color: color`2` });
  addText(`Rounds: <${maxQuestions}>`, { x: 4, y: 9, color: color`2` });
  addText(`Silent: ${silentMode ? "On" : "Off"} (S)`, { x: 3, y: 11, color: color`2` });
  addText("Press 'W' to Start", { x: 1, y: 14, color: color`2` });
};

// Function to start the game
const startGame = () => {
  inMenu = false;
  leftPlayerScore = 0;
  rightPlayerScore = 0;
  questionCount = 0;
  if (!silentMode) playTune(startSound);
  updateQuestion();
};

// Input handler for starting the game from the menu
onInput("w", () => {
  if (inMenu) {
    startGame();
  } else {
    checkAnswer('left', 0);
  }
});

// Input handlers for player answers
onInput("a", () => { if (!inMenu) checkAnswer('left', 1); });
onInput("s", () => { if (!inMenu) checkAnswer('left', 2); });
onInput("d", () => { if (!inMenu) checkAnswer('left', 3); });

onInput("i", () => { if (!inMenu) checkAnswer('right', 0); });
onInput("j", () => { if (!inMenu) checkAnswer('right', 1); });
onInput("k", () => { if (!inMenu) checkAnswer('right', 2); });
onInput("l", () => { if (!inMenu) checkAnswer('right', 3); });

// Input handlers for adjusting rounds and toggling silent mode in the menu
onInput("a", () => {
  if (inMenu) {
    maxQuestions = maxQuestions === 5 ? 50 : maxQuestions === 10 ? 5 : maxQuestions === 15 ? 10 : maxQuestions === 20 ? 15 : maxQuestions === 30 ? 20 : maxQuestions === 50 ? 30 : maxQuestions;
    showMenu();
  }
});

onInput("d", () => {
  if (inMenu) {
    maxQuestions = maxQuestions === 5 ? 10 : maxQuestions === 10 ? 15 : maxQuestions === 15 ? 20 : maxQuestions === 20 ? 30 : maxQuestions === 30 ? 50 : maxQuestions === 50 ? 5 : maxQuestions;
    showMenu();
  }
});

onInput("s", () => {
  if (inMenu) {
    silentMode = !silentMode;
    showMenu();
  }
});

// Show the game menu initially
showMenu();
