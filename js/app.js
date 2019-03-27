'use strict';

let questions = [
  'Do I drive a truck?',
  'Do I like Dungeons and Dragons?',
  'Have I been out of the country?',
  'Have I ever been divorced?',
  'Do I like grapefruit?'
];
let answerChoices = ['yes', 'no', 'y', 'n'];
let userAnswers = [];
for (let x = 0; x < questions.length; x++) {
  while (!userAnswers[x]) {
    userAnswers[x] = prompt(questions[x]);
    if (!answerChoices.includes(userAnswers[x].toLowerCase())) {
      alert('You must answer with yes/no or y/n.');
      userAnswers[x] = null;
    }
  }
}
for (let x = 0; x < questions.length; x++) {
  console.log(questions[x] + ': ' + userAnswers[x]);
}
