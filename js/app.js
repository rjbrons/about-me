'use strict';

let questions = [
  'Do I drive a truck?',
  'Do I like Dungeons and Dragons?',
  'Have I been out of the country?',
  'Have I ever been divorced?',
  'Do I like grapefruit?'
];

let answerChoices = ['yes', 'no', 'y', 'n'];
let correctAnswers = [
  ['no', 'n'],
  ['yes', 'y'],
  ['yes', 'y'],
  ['no', 'n'],
  ['yes', 'y']
];
let userName = prompt("Hello.  Let's play a trivia game.  What is your name?");
let userAnswers = [];
let correctGuesses = 0;

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
