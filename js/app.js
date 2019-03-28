'use strict';

let questions = [
  'Have I been to Germany?',
  'Do I ride motorcycles?',
  'Do I like Dungeons and Dragons?',
  'Have I ever been divorced?',
  'Do I like avocados?'
];

let countries = [
  'Ireland',
  'Spain',
  'Mexico',
  'Canada',
  'Afghanistan',
  'Iraq',
  'Kuwait',
  'Kyrgyzstan'
];
let answerChoices = ['yes', 'no', 'y', 'n'];
let correctAnswers = [
  ['no', 'n'],
  ['yes', 'y'],
  ['yes', 'y'],
  ['no', 'n'],
  ['no', 'n']
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
let countryTrue;
let countryTries = 0;
while (!countryTrue && countryTries < 4) {
  countryGuess = prompt(
    'I have been in several other countries, can you guess one? (You have 4 tries to answer the question.)'
  );
  if (countries.includes(countryGuess)) {
    countryTrue = true;
    alert(
      'Congratulations ' + userName + ' I have been to ' + countryGuess + '.'
    );
    correctGuesses++;
  } else {
    countryTries++;
    alert(
      'Sorry, ' +
        userName +
        'I have not been to ' +
        countryGuess +
        '.  You have ' +
        (4 - countryTries) +
        ' more guesses.'
    );
  }
}

alert(
  'Well ' +
    userName +
    '.  Lets see how you did.  You have guessed ' +
    correctGuesses +
    ' out of ' +
    questions.length +
    ' answers correctly.'
);

console.log('Final user answers to questions - ');
for (let x = 0; x < questions.length; x++) {
  console.log(questions[x] + ': ' + userAnswers[x]);
}
