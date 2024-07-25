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
  { question: "250 + 250", answers: [490, 500, 510, 520], correct: 500 },
  { question: "300 - 150", answers: [140, 150, 160, 170], correct: 150 },
  { question: "48 / 6", answers: [6, 7, 8, 9], correct: 8 },
  { question: "27 + 13", answers: [39, 40, 41, 42], correct: 40 },
  { question: "18 * 2", answers: [34, 35, 36, 37], correct: 36 },
  { question: "100 / 4", answers: [24, 25, 26, 27], correct: 25 },
  { question: "45 - 15", answers: [25, 28, 30, 32], correct: 30 },
  { question: "50 + 25", answers: [74, 75, 76, 77], correct: 75 },
  { question: "72 / 8", answers: [8, 9, 10, 11], correct: 9 },
  { question: "36 + 14", answers: [49, 50, 51, 52], correct: 50 },
  { question: "99 / 3", answers: [32, 33, 34, 35], correct: 33 },
  { question: "55 - 20", answers: [34, 35, 36, 37], correct: 35 },
  { question: "88 / 4", answers: [21, 22, 23, 24], correct: 22 },
  { question: "60 + 40", answers: [90, 95, 100, 105], correct: 100 },
  { question: "72 - 36", answers: [34, 35, 36, 37], correct: 36 },
  { question: "150 / 5", answers: [28, 29, 30, 31], correct: 30 },
  { question: "45 * 2", answers: [88, 89, 90, 91], correct: 90 },
  { question: "81 + 19", answers: [99, 100, 101, 102], correct: 100 },
  { question: "64 * 2", answers: [126, 127, 128, 129], correct: 128 },
  { question: "144 / 8", answers: [17, 18, 19, 20], correct: 18 },
  { question: "200 - 100", answers: [95, 98, 100, 102], correct: 100 },
  { question: "250 / 10", answers: [24, 25, 26, 27], correct: 25 },
  { question: "18 + 22", answers: [39, 40, 41, 42], correct: 40 },
  { question: "45 / 5", answers: [8, 9, 10, 11], correct: 9 },
  { question: "27 - 13", answers: [12, 13, 14, 15], correct: 14 },
  { question: "18 * 3", answers: [52, 53, 54, 55], correct: 54 },
  { question: "100 / 5", answers: [19, 20, 21, 22], correct: 20 },
  { question: "45 - 25", answers: [19, 20, 21, 22], correct: 20 },
  { question: "50 + 20", answers: [69, 70, 71, 72], correct: 70 },
  { question: "72 / 9", answers: [7, 8, 9, 10], correct: 8 },
  { question: "36 + 13", answers: [48, 49, 50, 51], correct: 49 },
  { question: "99 / 9", answers: [10, 11, 12, 13], correct: 11 },
  { question: "55 - 25", answers: [29, 30, 31, 32], correct: 30 },
  { question: "88 / 8", answers: [10, 11, 12, 13], correct: 11 },
  { question: "60 + 30", answers: [88, 89, 90, 91], correct: 90 },
  { question: "72 - 35", answers: [36, 37, 38, 39], correct: 37 },
  { question: "150 / 3", answers: [48, 49, 50, 51], correct: 50 },
  { question: "45 * 3", answers: [134, 135, 136, 137], correct: 135 },
  { question: "81 + 18", answers: [98, 99, 100, 101], correct: 99 },
  { question: "64 * 3", answers: [190, 191, 192, 193], correct: 192 },
  { question: "144 / 9", answers: [15, 16, 17, 18], correct: 16 },
  { question: "200 - 150", answers: [45, 48, 50, 52], correct: 50 },
  { question: "250 / 5", answers: [48, 49, 50, 51], correct: 50 },
  { question: "18 + 23", answers: [40, 41, 42, 43], correct: 41 },
  { question: "45 / 3", answers: [14, 15, 16, 17], correct: 15 },
  { question: "27 - 14", answers: [12, 13, 14, 15], correct: 13 },
  { question: "18 * 4", answers: [70, 71, 72, 73], correct: 72 },
  { question: "100 / 6", answers: [15, 16, 17, 18], correct: 16 },
  { question: "45 - 26", answers: [18, 19, 20, 21], correct: 19 },
  { question: "50 + 21", answers: [70, 71, 72, 73], correct: 71 },
  { question: "72 / 7", answers: [9, 10, 11, 12], correct: 10 },
  { question: "36 + 12", answers: [47, 48, 49, 50], correct: 48 },
  { question: "99 / 8", answers: [11, 12, 13, 14], correct: 12 },
  { question: "55 - 26", answers: [28, 29, 30, 31], correct: 29 },
  { question: "88 / 7", answers: [11, 12, 13, 14], correct: 12 },
  { question: "60 + 28", answers: [88, 89, 90, 91], correct: 88 },
  { question: "72 - 34", answers: [36, 37, 38, 39], correct: 38 },
  { question: "150 / 4", answers: [37, 38, 39, 40], correct: 37 },
  { question: "45 * 4", answers: [179, 180, 181, 182], correct: 180 },
  { question: "81 + 17", answers: [97, 98, 99, 100], correct: 98 },
  { question: "64 * 4", answers: [254, 255, 256, 257], correct: 256 },
  { question: "144 / 7", answers: [19, 20, 21, 22], correct: 20 },
  { question: "200 - 140", answers: [58, 59, 60, 61], correct: 60 },
  { question: "250 / 4", answers: [62, 63, 64, 65], correct: 62 },
  { question: "18 + 24", answers: [41, 42, 43, 44], correct: 42 },
  { question: "45 / 7", answers: [5, 6, 7, 8], correct: 6 },
  { question: "27 - 15", answers: [11, 12, 13, 14], correct: 12 },
  { question: "18 * 5", answers: [88, 89, 90, 91], correct: 90 },
  { question: "100 / 7", answers: [13, 14, 15, 16], correct: 14 },
  { question: "45 - 27", answers: [17, 18, 19, 20], correct: 18 },
  { question: "50 + 22", answers: [71, 72, 73, 74], correct: 72 },
  { question: "72 / 5", answers: [13, 14, 15, 16], correct: 14 },
  { question: "36 + 11", answers: [46, 47, 48, 49], correct: 47 },
  { question: "99 / 7", answers: [13, 14, 15, 16], correct: 14 },
  { question: "55 - 27", answers: [27, 28, 29, 30], correct: 28 },
  { question: "88 / 6", answers: [14, 15, 16, 17], correct: 15 },
  { question: "60 + 27", answers: [86, 87, 88, 89], correct: 87 },
  { question: "72 - 33", answers: [37, 38, 39, 40], correct: 39 },
  { question: "150 / 6", answers: [24, 25, 26, 27], correct: 25 },
  { question: "45 * 5", answers: [224, 225, 226, 227], correct: 225 },
  { question: "81 + 16", answers: [95, 96, 97, 98], correct: 97 },
  { question: "64 * 5", answers: [319, 320, 321, 322], correct: 320 },
  { question: "144 / 6", answers: [23, 24, 25, 26], correct: 24 },
  { question: "200 - 130", answers: [68, 69, 70, 71], correct: 70 },
  { question: "250 / 3", answers: [81, 82, 83, 84], correct: 83 },
  { question: "18 + 25", answers: [42, 43, 44, 45], correct: 43 },
  { question: "45 / 6", answers: [7, 8, 9, 10], correct: 8 },
  { question: "27 - 16", answers: [10, 11, 12, 13], correct: 11 },
  { question: "18 * 6", answers: [106, 107, 108, 109], correct: 108 },
  { question: "100 / 8", answers: [11, 12, 13, 14], correct: 12 },
  { question: "45 - 28", answers: [16, 17, 18, 19], correct: 17 },
  { question: "50 + 23", answers: [72, 73, 74, 75], correct: 73 },
  { question: "72 / 4", answers: [17, 18, 19, 20], correct: 18 },
  { question: "36 + 10", answers: [45, 46, 47, 48], correct: 46 },
  { question: "99 / 6", answers: [15, 16, 17, 18], correct: 16 },
  { question: "55 - 28", answers: [26, 27, 28, 29], correct: 27 },
  { question: "88 / 5", answers: [16, 17, 18, 19], correct: 17 },
  { question: "60 + 26", answers: [85, 86, 87, 88], correct: 86 },
  { question: "72 - 32", answers: [38, 39, 40, 41], correct: 40 },
  { question: "150 / 8", answers: [18, 19, 20, 21], correct: 19 },
  { question: "45 * 6", answers: [269, 270, 271, 272], correct: 270 },
  { question: "81 + 15", answers: [94, 95, 96, 97], correct: 96 },
  { question: "64 * 6", answers: [382, 383, 384, 385], correct: 384 },
  { question: "144 / 5", answers: [28, 29, 30, 31], correct: 29 },
  { question: "200 - 120", answers: [78, 79, 80, 81], correct: 80 },
  { question: "250 / 2", answers: [124, 125, 126, 127], correct: 125 },
  { question: "18 + 26", answers: [43, 44, 45, 46], correct: 44 },
  { question: "45 / 8", answers: [5, 6, 7, 8], correct: 6 },
  { question: "27 - 17", answers: [9, 10, 11, 12], correct: 10 },
  { question: "18 * 7", answers: [124, 125, 126, 127], correct: 126 },
  { question: "100 / 9", answers: [10, 11, 12, 13], correct: 11 },
  { question: "45 - 29", answers: [15, 16, 17, 18], correct: 16 },
  { question: "50 + 24", answers: [73, 74, 75, 76], correct: 74 },
  { question: "72 / 3", answers: [23, 24, 25, 26], correct: 24 },
  { question: "36 + 9", answers: [44, 45, 46, 47], correct: 45 },
  { question: "99 / 5", answers: [19, 20, 21, 22], correct: 20 },
  { question: "55 - 29", answers: [25, 26, 27, 28], correct: 26 },
  { question: "88 / 4", answers: [21, 22, 23, 24], correct: 22 },
  { question: "60 + 25", answers: [84, 85, 86, 87], correct: 85 },
  { question: "72 - 31", answers: [39, 40, 41, 42], correct: 41 },
  { question: "150 / 9", answers: [16, 17, 18, 19], correct: 17 },
  { question: "45 * 7", answers: [314, 315, 316, 317], correct: 315 },
  { question: "81 + 14", answers: [93, 94, 95, 96], correct: 95 },
  { question: "64 * 7", answers: [445, 446, 447, 448], correct: 448 },
  { question: "144 / 4", answers: [35, 36, 37, 38], correct: 36 },
  { question: "200 - 110", answers: [86, 87, 88, 89], correct: 90 },
  { question: "250 / 1", answers: [249, 250, 251, 252], correct: 250 },
  { question: "18 + 27", answers: [44, 45, 46, 47], correct: 45 },
  { question: "45 / 9", answers: [4, 5, 6, 7], correct: 5 },
  { question: "27 - 18", answers: [8, 9, 10, 11], correct: 9 },
  { question: "18 * 8", answers: [142, 143, 144, 145], correct: 144 },
  { question: "100 / 10", answers: [9, 10, 11, 12], correct: 10 },
  { question: "45 - 30", answers: [14, 15, 16, 17], correct: 15 },
  { question: "50 + 25", answers: [74, 75, 76, 77], correct: 75 },
  { question: "72 / 2", answers: [35, 36, 37, 38], correct: 36 },
  { question: "36 + 8", answers: [43, 44, 45, 46], correct: 44 },
  { question: "99 / 4", answers: [24, 25, 26, 27], correct: 25 },
  { question: "55 - 30", answers: [24, 25, 26, 27], correct: 25 },
  { question: "88 / 3", answers: [29, 30, 31, 32], correct: 29 },
  { question: "60 + 24", answers: [83, 84, 85, 86], correct: 84 },
  { question: "72 - 30", answers: [40, 41, 42, 43], correct: 42 },
  { question: "150 / 10", answers: [14, 15, 16, 17], correct: 15 },
  { question: "45 * 8", answers: [359, 360, 361, 362], correct: 360 },
  { question: "81 + 13", answers: [92, 93, 94, 95], correct: 94 },
  { question: "64 * 8", answers: [508, 509, 510, 511], correct: 512 },
  { question: "144 / 3", answers: [47, 48, 49, 50], correct: 48 },
  { question: "200 - 100", answers: [95, 98, 100, 102], correct: 100 },
  { question: "250 + 250", answers: [490, 500, 510, 520], correct: 500 },
  { question: "18 + 28", answers: [45, 46, 47, 48], correct: 46 },
  { question: "45 / 10", answers: [4, 5, 6, 7], correct: 4 },
  { question: "27 - 19", answers: [7, 8, 9, 10], correct: 8 },
  { question: "18 * 9", answers: [160, 161, 162, 163], correct: 162 },
  { question: "100 / 11", answers: [8, 9, 10, 11], correct: 9 },
  { question: "45 - 31", answers: [13, 14, 15, 16], correct: 14 },
  { question: "50 + 26", answers: [75, 76, 77, 78], correct: 76 },
  { question: "72 / 1", answers: [71, 72, 73, 74], correct: 72 },
  { question: "36 + 7", answers: [42, 43, 44, 45], correct: 43 },
  { question: "99 / 3", answers: [32, 33, 34, 35], correct: 33 },
  { question: "55 - 31", answers: [23, 24, 25, 26], correct: 24 },
  { question: "88 / 2", answers: [43, 44, 45, 46], correct: 44 },
  { question: "60 + 23", answers: [82, 83, 84, 85], correct: 83 },
  { question: "72 - 29", answers: [41, 42, 43, 44], correct: 43 },
  { question: "150 / 11", answers: [12, 13, 14, 15], correct: 13 },
  { question: "45 * 9", answers: [404, 405, 406, 407], correct: 405 },
  { question: "81 + 12", answers: [91, 92, 93, 94], correct: 93 },
  { question: "64 * 9", answers: [572, 573, 574, 575], correct: 576 },
  { question: "144 / 2", answers: [70, 71, 72, 73], correct: 72 },
  { question: "200 - 90", answers: [108, 109, 110, 111], correct: 110 },
  { question: "250 + 150", answers: [390, 400, 410, 420], correct: 400 },
  { question: "18 + 29", answers: [46, 47, 48, 49], correct: 47 },
  { question: "45 / 11", answers: [3, 4, 5, 6], correct: 4 },
  { question: "27 - 20", answers: [6, 7, 8, 9], correct: 7 },
  { question: "18 * 10", answers: [178, 179, 180, 181], correct: 180 },
  { question: "100 / 12", answers: [7, 8, 9, 10], correct: 8 },
  { question: "45 - 32", answers: [12, 13, 14, 15], correct: 13 },
  { question: "50 + 27", answers: [76, 77, 78, 79], correct: 77 },
  { question: "72 / 0", answers: [0, 1, 2, 3], correct: 0 },
  { question: "36 + 6", answers: [41, 42, 43, 44], correct: 42 },
  { question: "99 / 2", answers: [48, 49, 50, 51], correct: 49 },
  { question: "55 - 32", answers: [22, 23, 24, 25], correct: 23 },
  { question: "88 / 1", answers: [87, 88, 89, 90], correct: 88 },
  { question: "60 + 22", answers: [81, 82, 83, 84], correct: 82 },
  { question: "72 - 28", answers: [42, 43, 44, 45], correct: 44 },
  { question: "150 / 12", answers: [11, 12, 13, 14], correct: 12 },
  { question: "45 * 10", answers: [449, 450, 451, 452], correct: 450 },
  { question: "81 + 11", answers: [90, 91, 92, 93], correct: 92 },
  { question: "64 * 10", answers: [635, 636, 637, 638], correct: 640 },
  { question: "144 / 1", answers: [143, 144, 145, 146], correct: 144 },
  { question: "200 - 80", answers: [118, 119, 120, 121], correct: 120 },
  { question: "250 + 100", answers: [340, 350, 360, 370], correct: 350 },
  { question: "18 + 30", answers: [47, 48, 49, 50], correct: 48 },
  { question: "45 / 12", answers: [2, 3, 4, 5], correct: 3 },
  { question: "27 - 21", answers: [5, 6, 7, 8], correct: 6 },
  { question: "18 * 11", answers: [196, 197, 198, 199], correct: 198 },
  { question: "100 / 13", answers: [6, 7, 8, 9], correct: 7 },
  { question: "45 - 33", answers: [11, 12, 13, 14], correct: 12 },
  { question: "50 + 28", answers: [77, 78, 79, 80], correct: 78 },
  { question: "36 + 5", answers: [40, 41, 42, 43], correct: 41 },
  { question: "99 / 1", answers: [97, 98, 99, 100], correct: 99 },
  { question: "55 - 33", answers: [21, 22, 23, 24], correct: 22 },
  { question: "60 + 21", answers: [80, 81, 82, 83], correct: 81 },
  { question: "72 - 27", answers: [43, 44, 45, 46], correct: 45 },
  { question: "150 / 13", answers: [10, 11, 12, 13], correct: 11 },
  { question: "45 * 11", answers: [494, 495, 496, 497], correct: 495 },
  { question: "81 + 10", answers: [89, 90, 91, 92], correct: 91 },
  { question: "64 * 11", answers: [698, 699, 700, 701], correct: 704 },
  { question: "144 / 0", answers: [0, 1, 2, 3], correct: 0 },
  { question: "200 - 70", answers: [128, 129, 130, 131], correct: 130 },
  { question: "250 + 50", answers: [290, 300, 310, 320], correct: 300 },
  { question: "18 + 31", answers: [48, 49, 50, 51], correct: 49 },
  { question: "45 / 13", answers: [1, 2, 3, 4], correct: 3 },
  { question: "27 - 22", answers: [4, 5, 6, 7], correct: 5 },
  { question: "18 * 12", answers: [214, 215, 216, 217], correct: 216 },
  { question: "100 / 14", answers: [5, 6, 7, 8], correct: 7 },
  { question: "45 - 34", answers: [10, 11, 12, 13], correct: 11 },
  { question: "50 + 29", answers: [78, 79, 80, 81], correct: 79 },
  { question: "36 + 4", answers: [39, 40, 41, 42], correct: 40 },
  { question: "99 + 1", answers: [99, 100, 101, 102], correct: 100 },
  { question: "55 - 34", answers: [20, 21, 22, 23], correct: 21 },
  { question: "60 + 20", answers: [79, 80, 81, 82], correct: 80 },
  { question: "72 - 26", answers: [44, 45, 46, 47], correct: 46 },
  { question: "150 / 14", answers: [9, 10, 11, 12], correct: 10 },
  { question: "45 * 12", answers: [539, 540, 541, 542], correct: 540 },
  { question: "81 + 9", answers: [88, 89, 90, 91], correct: 90 },
  { question: "64 * 12", answers: [761, 762, 763, 764], correct: 768 },
  { question: "144 + 1", answers: [144, 145, 146, 147], correct: 145 },
  { question: "200 - 60", answers: [138, 139, 140, 141], correct: 140 },
  { question: "250 + 25", answers: [274, 275, 276, 277], correct: 275 },
  { question: "18 + 32", answers: [49, 50, 51, 52], correct: 50 },
  { question: "45 / 14", answers: [1, 2, 3, 4], correct: 3 },
  { question: "27 - 23", answers: [3, 4, 5, 6], correct: 4 },
  { question: "18 * 13", answers: [232, 233, 234, 235], correct: 234 },
  { question: "100 / 15", answers: [4, 5, 6, 7], correct: 6 },
  { question: "45 - 35", answers: [9, 10, 11, 12], correct: 10 },
  { question: "50 + 30", answers: [79, 80, 81, 82], correct: 80 },
  { question: "36 + 3", answers: [38, 39, 40, 41], correct: 39 },
  { question: "99 + 2", answers: [100, 101, 102, 103], correct: 101 },
  { question: "55 - 35", answers: [19, 20, 21, 22], correct: 20 },
  { question: "60 + 19", answers: [78, 79, 80, 81], correct: 79 },
  { question: "72 - 25", answers: [45, 46, 47, 48], correct: 47 },
  { question: "150 / 15", answers: [8, 9, 10, 11], correct: 10 },
  { question: "45 * 13", answers: [584, 585, 586, 587], correct: 585 },
  { question: "81 + 8", answers: [87, 88, 89, 90], correct: 89 },
  { question: "64 * 13", answers: [824, 825, 826, 827], correct: 832 },
  { question: "144 + 2", answers: [145, 146, 147, 148], correct: 146 },
  { question: "200 - 50", answers: [148, 149, 150, 151], correct: 150 },
  { question: "250 + 20", answers: [269, 270, 271, 272], correct: 270 },
  { question: "18 + 33", answers: [50, 51, 52, 53], correct: 51 },
  { question: "45 / 15", answers: [1, 2, 3, 4], correct: 3 },
  { question: "27 - 24", answers: [2, 3, 4, 5], correct: 3 },
  { question: "18 * 14", answers: [250, 251, 252, 253], correct: 252 },
  { question: "100 / 16", answers: [4, 5, 6, 7], correct: 6 },
  { question: "45 - 36", answers: [8, 9, 10, 11], correct: 9 },
  { question: "50 + 31", answers: [80, 81, 82, 83], correct: 81 },
  { question: "36 + 2", answers: [37, 38, 39, 40], correct: 38 },
  { question: "99 + 3", answers: [101, 102, 103, 104], correct: 102 },
  { question: "55 - 36", answers: [18, 19, 20, 21], correct: 19 },
  { question: "60 + 18", answers: [77, 78, 79, 80], correct: 78 },
  { question: "72 - 24", answers: [46, 47, 48, 49], correct: 48 },
  { question: "150 / 16", answers: [7, 8, 9, 10], correct: 9 },
  { question: "45 * 14", answers: [629, 630, 631, 632], correct: 630 },
  { question: "81 + 7", answers: [86, 87, 88, 89], correct: 88 },
  { question: "64 * 14", answers: [887, 888, 889, 890], correct: 896 },
  { question: "144 + 3", answers: [146, 147, 148, 149], correct: 147 },
  { question: "200 - 40", answers: [158, 159, 160, 161], correct: 160 },
  { question: "250 + 15", answers: [264, 265, 266, 267], correct: 265 },
  { question: "18 + 34", answers: [51, 52, 53, 54], correct: 52 },
  { question: "45 / 16", answers: [2, 3, 4, 5], correct: 3 },
  { question: "27 - 25", answers: [1, 2, 3, 4], correct: 2 },
  { question: "18 * 15", answers: [268, 269, 270, 271], correct: 270 },
  { question: "100 / 17", answers: [4, 5, 6, 7], correct: 5 },
  { question: "45 - 37", answers: [7, 8, 9, 10], correct: 8 },
  { question: "50 + 32", answers: [81, 82, 83, 84], correct: 82 },
  { question: "36 + 1", answers: [36, 37, 38, 39], correct: 37 },
  { question: "99 + 4", answers: [102, 103, 104, 105], correct: 103 },
  { question: "55 - 37", answers: [17, 18, 19, 20], correct: 18 },
  { question: "60 + 17", answers: [76, 77, 78, 79], correct: 77 },
  { question: "72 - 23", answers: [47, 48, 49, 50], correct: 49 },
  { question: "150 / 17", answers: [6, 7, 8, 9], correct: 8 },
  { question: "45 * 15", answers: [674, 675, 676, 677], correct: 675 },
  { question: "81 + 6", answers: [85, 86, 87, 88], correct: 87 },
  { question: "64 * 15", answers: [950, 951, 952, 953], correct: 960 },
  { question: "144 + 4", answers: [147, 148, 149, 150], correct: 148 },
  { question: "200 - 30", answers: [168, 169, 170, 171], correct: 170 },
  { question: "250 + 10", answers: [259, 260, 261, 262], correct: 260 }
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
