const leftPlayer = "L";
const rightPlayer = "R";
const questionText = "Q";
const answerOption = "A";
const leftCross = "X";
const rightCross = "Y";

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
7733333333333377`]
);

// Create initial map
const initialMap = `
LLLLLLRRRRRR
LLLLLLRRRRRR
LLLLLLRRRRRR
LLLLLLRRRRRR
LLLLLLRRRRRR
LLLLLLRRRRRR
LLLLLLRRRRRR
LLLLLLRRRRRR
LLLLLLRRRRRR
LLLLLLRRRRRR`;

setMap(map`
LLLLLLRRRRRR
LLLLLLRRRRRR
LLLLLLRRRRRR
LLLLLLRRRRRR
LLLLLLRRRRRR
LLLLLLRRRRRR
LLLLLLRRRRRR
LLLLLLRRRRRR
LLLLLLRRRRRR
LLLLLLRRRRRR`);

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
  { question: "45 + 55", answers: [90, 95, 100, 105], correct: 100 },
  { question: "14 * 3", answers: [40, 42, 44, 46], correct: 42 },
  { question: "81 / 9", answers: [7, 8, 9, 10], correct: 9 },
  { question: "99 - 33", answers: [65, 66, 67, 68], correct: 66 },
  { question: "123 + 321", answers: [444, 445, 446, 447], correct: 444 },
  { question: "64 / 8", answers: [6, 7, 8, 9], correct: 8 },
  { question: "16 * 2", answers: [30, 31, 32, 33], correct: 32 },
  { question: "72 / 6", answers: [10, 11, 12, 13], correct: 12 },
  { question: "144 - 44", answers: [98, 99, 100, 101], correct: 100 },
  { question: "256 / 4", answers: [62, 63, 64, 65], correct: 64 },
  { question: "15 * 15", answers: [220, 225, 230, 235], correct: 225 },
  { question: "200 + 150", answers: [340, 350, 360, 370], correct: 350 },
  { question: "25 * 4", answers: [100, 105, 110, 115], correct: 100 },
  { question: "144 / 12", answers: [10, 11, 12, 13], correct: 12 },
  { question: "500 - 250", answers: [240, 250, 260, 270], correct: 250 },
  { question: "300 / 3", answers: [90, 95, 100, 105], correct: 100 },
  { question: "22 * 3", answers: [64, 65, 66, 67], correct: 66 },
  { question: "198 - 99", answers: [96, 97, 98, 99], correct: 99 },
  { question: "75 + 125", answers: [190, 195, 200, 205], correct: 200 },
  { question: "64 / 4", answers: [14, 15, 16, 17], correct: 16 },
  { question: "180 / 6", answers: [28, 29, 30, 31], correct: 30 },
  { question: "250 + 250", answers: [490, 500, 510, 520], correct: 500 }
];

let leftPlayerScore = 0;
let rightPlayerScore = 0;
let currentQuestion = {};
let feedbackMessage = "";
const maxQuestions = 30;
let questionCount = 0;

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
};

// Function to display scores
const displayScores = () => {
  addText(`Score: ${leftPlayerScore}`, { x: 1, y: 14, color: color`2` });
  addText(`Score: ${rightPlayerScore}`, { x: 11, y: 14, color: color`2` });
};

// Function to display the question and answers
const displayQuestionAndAnswers = () => {
  addText(currentQuestion.question, { x: 8, y: 2, color: color`2` });

  // Left player answers
  addText(`${currentQuestion.answers[0]}`, { x: 4, y: 5, color: color`3` });
  addText(`${currentQuestion.answers[1]}`, { x: 2, y: 7, color: color`3` });
  addText(`${currentQuestion.answers[2]}`, { x: 4, y: 9, color: color`3` });
  addText(`${currentQuestion.answers[3]}`, { x: 6, y: 7, color: color`3` });

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
  if (currentQuestion.answers[answerIndex] === currentQuestion.correct) {
    if (player === 'left') {
      leftPlayerScore++;
      setMap(map`
LLLLLLLLLLLL
LLLLLLLLLLLL
LLLLLLLLLLLL
LLLLLLLLLLLL
LLLLLLLLLLLL
LLLLLLLLLLLL
LLLLLLLLLLLL
LLLLLLLLLLLL
LLLLLLLLLLLL
LLLLLLLLLLLL`);
    } else {
      rightPlayerScore++;
      setMap(map`
RRRRRRRRRRRR
RRRRRRRRRRRR
RRRRRRRRRRRR
RRRRRRRRRRRR
RRRRRRRRRRRR
RRRRRRRRRRRR
RRRRRRRRRRRR
RRRRRRRRRRRR
RRRRRRRRRRRR
RRRRRRRRRRRR`);
    }
    feedbackMessage = "Correct!";
  } else {
    feedbackMessage = "Wrong!";
    if (player === 'left') {
      setMap(map`
XXXXXXRRRRRR
XXXXXXRRRRRR
XXXXXXRRRRRR
XXXXXXRRRRRR
XXXXXXRRRRRR
XXXXXXRRRRRR
XXXXXXRRRRRR
XXXXXXRRRRRR
XXXXXXRRRRRR
XXXXXXRRRRRR`);
    } else {
      setMap(map`
LLLLLLYYYYYY
LLLLLLYYYYYY
LLLLLLYYYYYY
LLLLLLYYYYYY
LLLLLLYYYYYY
LLLLLLYYYYYY
LLLLLLYYYYYY
LLLLLLYYYYYY
LLLLLLYYYYYY
LLLLLLYYYYYY`);
    }
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

// Function to end the game
const endGame = () => {
  clearText();
  addText("Game Over", { x: 6, y: 6, color: color`2` });
  addText(`Score:${leftPlayerScore}-${rightPlayerScore}`, { x: 5, y: 8, color: color`2` });
};

// Input handlers for player answers
onInput("w", () => checkAnswer('left', 0));
onInput("a", () => checkAnswer('left', 1));
onInput("s", () => checkAnswer('left', 2));
onInput("d", () => checkAnswer('left', 3));

onInput("i", () => checkAnswer('right', 0));
onInput("j", () => checkAnswer('right', 1));
onInput("k", () => checkAnswer('right', 2));
onInput("l", () => checkAnswer('right', 3));

// Initialize the question
updateQuestion();
