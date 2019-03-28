'use strict';

let questions = [
  'Have I been to Germany?',
  'Do I ride motorcycles?',
  'Do I like Dungeons and Dragons?',
  'Have I ever been divorced?',
  'Do I like avocados?'
];
let totalQuestions = 2 + questions.length;
let answerChoices = ['yes', 'no', 'y', 'n'];

let correctAnswers = [
  ['no', 'n'],
  ['yes', 'y'],
  ['yes', 'y'],
  ['no', 'n'],
  ['no', 'n']
];

let countries = [
  'ireland',
  'spain',
  'mexico',
  'canada',
  'afghanistan',
  'iraq',
  'kuwait',
  'kyrgyzstan'
];
let userName = prompt(`Hello.  Let's play a trivia game.  What is your name?`);
let userAnswers = [];
let correctGuesses = 0;
let countryGuess;

for (let x = 0; x < questions.length; x++) {
  let validationStatement = '';
  while (!userAnswers[x]) {
    userAnswers[x] = prompt(questions[x]);
    console.log('User input was: ' + userAnswers[x]);
    if (!answerChoices.includes(userAnswers[x].toLowerCase())) {
      alert('You must answer with yes/no or y/n.');
      userAnswers[x] = null;
    }
  }

  if (correctAnswers[x].includes(userAnswers[x])) {
    validationStatement = 'correct!';
    correctGuesses++;
  } else {
    validationStatement = 'incorrect.';
  }
  alert('You answered ' + userAnswers[x] + '.  That is ' + validationStatement);
}

//Countries I have been in guessing game.
let countryTries = 0;
while (countryTries < 4) {
  countryGuess = prompt(
    'I have been in several other countries, can you guess one? (You have 4 tries to answer the question.)'
  );
  if (countries.includes(countryGuess.toLowerCase())) {
    alert(
      'Congratulations ' + userName + ' I have been to ' + countryGuess + '.'
    );
    correctGuesses++;
    break;
  } else {
    countryTries++;
    alert(
      'Sorry, ' +
        userName +
        ' I have not been to ' +
        countryGuess +
        '.  You have ' +
        (4 - countryTries) +
        ' more guesses.'
    );
  }
}

//Guess a number
let highLowCorrection;
let numberGuessCount = 0;
let myNumber = Math.floor(Math.random() * 20) + 1;
console.log(myNumber);
alert(
  'I have rolled a 20 sided die.  You must guess the number.  You have 6 tries.'
);
while (numberGuessCount < 6) {
  var userNumberGuess = parseInt(prompt('What is your guess?'));
  numberGuessCount++;
  console.log('Guess count: ' + numberGuessCount);
  console.log('User number guessed: ' + userNumberGuess);
  if (userNumberGuess === myNumber) {
    alert('You did it!! That was the number I rolled.');
    correctGuesses++;
    break;
  } else if (userNumberGuess < myNumber) {
    highLowCorrection = 'low';
  } else if (userNumberGuess > myNumber) {
    highLowCorrection = 'high';
  }
  alert(
    'Sorry, ' +
      userName +
      ' that guess was too ' +
      highLowCorrection +
      ' try again.  You have ' +
      (6 - numberGuessCount) +
      ' tries left.'
  );
}

alert(
  'Well ' +
    userName +
    '.  Lets see how you did.  You have guessed ' +
    correctGuesses +
    ' out of ' +
    totalQuestions +
    ' answers correctly.'
);

console.log('Final user answers to questions - ');
for (let x = 0; x < questions.length; x++) {
  console.log(questions[x] + ': ' + userAnswers[x]);
}
