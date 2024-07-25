const leftPlayer = "L";
const rightPlayer = "R";
const questionText = "Q";
const answerOption = "A";

// 定义精灵
setLegend(
  [ leftPlayer, bitmap`
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
  [ rightPlayer, bitmap`
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
  [ questionText, bitmap`
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
  [ answerOption, bitmap`
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

// 创建初始地图
const initialMap = `
................
...............
................
................
................
................
................
................
`;

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
];

let leftPlayerScore = 0;
let rightPlayerScore = 0;
let currentQuestion = {};
let feedbackMessage = "";

// Function to get a random question
const getRandomQuestion = () => {
  const index = Math.floor(Math.random() * questions.length);
  return questions[index];
};

// Function to update the question and answers
const updateQuestion = () => {
  currentQuestion = getRandomQuestion();
  clearText();
  displayScores();

  addText(currentQuestion.question, { x: 8, y: 2, color: color`2` });

  // 左边玩家答案
  addText(`${currentQuestion.answers[0]}`, { x: 4, y: 5, color: color`2` });
  addText(`${currentQuestion.answers[1]}`, { x: 2, y: 7, color: color`2` });
  addText(`${currentQuestion.answers[2]}`, { x: 4, y: 9, color: color`2` });
  addText(`${currentQuestion.answers[3]}`, { x: 6, y: 7, color: color`2` });

  // 右边玩家答案
  addText(`${currentQuestion.answers[0]}`, { x: 15, y: 5, color: color`2` });
  addText(`${currentQuestion.answers[1]}`, { x: 13, y: 7, color: color`2` });
  addText(`${currentQuestion.answers[2]}`, { x: 15, y: 9, color: color`2` });
  addText(`${currentQuestion.answers[3]}`, { x: 17, y: 7, color: color`2` });

  // 显示反馈信息
  addText(feedbackMessage, { x: 7, y: 12, color: color`2` });
};

// Function to display scores
const displayScores = () => {
  addText(`Score:${leftPlayerScore}`, { x: 1, y: 14, color: color`2` });
  addText(`Score:${rightPlayerScore}`, { x: 11, y: 14, color: color`2` });
};

// Function to check the answer
const checkAnswer = (player, answerIndex) => {
  if (currentQuestion.answers[answerIndex] === currentQuestion.correct) {
    if (player === 'left') {
      leftPlayerScore++;
      setMap(map`
LLLLLLAAAAAA
LLLLLLAAAAAA
LLLLLLAAAAAA
LLLLLLAAAAAA
LLLLLLAAAAAA
LLLLLLAAAAAA
LLLLLLAAAAAA
LLLLLLAAAAAA
LLLLLLAAAAAA
LLLLLLAAAAAA`);
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
    if (player === 'left') {
      leftPlayerScore--;
    } else {
      rightPlayerScore--;
    }
    feedbackMessage = "Wrong!";
  }

  // Add a delay before updating the question
  setTimeout(() => {
    updateQuestion();
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
  }, 2000); // 2-second delay
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