//выбор случайного слова
var words = [
    "programm",
    "monkey",
    "greate",
    "sweety",
    "fame"
];
var word = words[Math.floor(Math.random() * words.length)];

//создание итогового массива
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var attempt = word.length + 2;

//игровой цикл
while ((attempt > 0) && (answerArray.indexOf("_") > -1)) {
    //показывает состояние игры
    alert(answerArray.join(" "));
    //запрос варианта ответа
    var guess = prompt("Guess a letter or push Cancel to exit");
    var lowGuess = guess[0].toLowerCase();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please, type only one letter!");
    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === lowGuess) {
                answerArray[j] = lowGuess;
            }
        }
    }
    attempt--;
}
alert(answerArray.join(" "));
if (answerArray.indexOf("_") === -1) {
    alert("Excellent! The word was '" + word + "'");
} else {
    alert("You have take all attemps. Game over!");
}

//=========================================================================
// Создайте здесь свои функции
// var pickWord = function () {
//     var words = ["sweety", "fame"];
//     var randomWord = words[Math.floor(Math.random() * words.length)];
//     return randomWord;
//     //возвращает случайно выбранное число
// };
// var setupAnswerArray = function (word) {
//     var answerArray = [];
//     for (var i = 0; i < word.length; i++) {
//         answerArray[i] = "_";
//     }
//     return answerArray;
//     // Возвращает итоговый массив для заданного слова word
// };
// var showPlayerProgress = function (answerArray) {
//     return alert(answerArray.join(" "));
//     // С помощью alert отображает текущее состояние игры
// };
// var getGuess = function () {
//     var guess = prompt("Guess a letter or push Cancel to exit");
//     return guess;
//     // Запрашивает ответ игрока с помощью prompt
// };
// var updateGameState = function (guess, word, answerArray) {
//     var times = 0;
//     for (var j = 0; j < word.length; j++) {
//         if (word[j] === guess) {
//             answerArray[j] = guess;
//             times++;
//         }
//     }
//     return times;
//     // Обновляет answerArray согласно ответу игрока (guess)
//     // возвращает число, обозначающее, сколько раз буква guess встречается в слове, чтобы можно было обновить значение remainingLetters
// };
// var showAnswerAndCongratulatePlayer = function (answerArray) {
//     alert(answerArray.join(" "));
//     if (answerArray.indexOf("_") === -1) {
//         return alert("Excellent! The word was '" + word + "'");
//     }
//     if (remainingLetters === 0) {
//         return alert("You have take all attemps. Game over!");
//     }
//     if (guess === null) {
//         return alert("See you later!");
//     }
//     // С помощью alert показывает игроку отгаданное слово и поздравляет его с победой
// };


// // word: загаданное слово
// var word = pickWord();
// // answerArray: итоговый массив
// var answerArray = setupAnswerArray(word);
// // remainingLetters: сколько букв осталось угадать
// var remainingLetters = word.length;
// while (remainingLetters > 0) {
// showPlayerProgress(answerArray);
// // guess: ответ игрока
// var guess = getGuess();
//     if (guess === null) {
//         break;
//     } else if (guess.length !== 1) {
//         alert("Пожалуйста, введите одиночную букву.");
//     } else {
//     // correctGuesses: количество открытых букв
//     var correctGuesses = updateGameState(guess, word,
//     answerArray);
//     remainingLetters -= correctGuesses;
//     }
// }
// showAnswerAndCongratulatePlayer(answerArray);