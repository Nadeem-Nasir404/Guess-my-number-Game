'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//A function to diaplay message.
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//When player clicks 'CHECK' button.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When player enters no Input.
  if (!guess) {
    displayMessage('⛔No Number!');
    //When player enters correct Number
  } else if (secretNumber === guess) {
    displayMessage('🎉Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When player wrong Number.
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? '.⬇Too Low!' : '↗Too High!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥You lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//when player clicks 'AGAIN' button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
