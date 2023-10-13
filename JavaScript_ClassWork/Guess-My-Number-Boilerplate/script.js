let secretNumber = Math.trunc(Math.random() * 20)+1;

console.log("secretNumber", secretNumber);

let score = 20;
let highScore = 0;

const displayMessage = function(message){
  const check = document.querySelector('.message').textContent = message;
  // console.log("check", check);
}

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  // console.log("guess", guess);
  // if input box is null ,than show "invalid input"
  if(!guess){
    displayMessage("Invalid Number!");
  }
  else if(guess=== secretNumber){
    // if guess value and input is equal, than show "Correct Guess"
    //Background color change
    //Replace ? with ans
    displayMessage("Correct Guess");
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  else if(guess !== secretNumber){
    //score -1
    //guess > secretNumber (too high)
    //guess < secretNumber(too low)
    //score display
    if(score > 1){
      displayMessage(guess > secretNumber? 'Too High!':'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  else{
    displayMessage('You lost the game!');
    document.querySelector('.score').textContent = 0;
  }

})

// displayMessage("Hello everyone");

// Reset functionality

//1. start guessing..
//2. Score = 20
//3. ? add
//4. background reset
//5.? width reset
//6. user input clean
//7. highScore = 0

document.querySelector('.again').addEventListener('click',function(){
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';


})









































// 'use strict';




// const displayMessage = function (message) {

// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   // When there is no input
//   if (!guess) {
//     // document.querySelector('.message').textContent = '⛔️ No number!';
   
//     // When player wins
//   } else if (guess === secretNumber) {
//     // document.querySelector('.message').textContent = '🎉 Correct Number!';
   

//     // When guess is wrong
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       // document.querySelector('.message').textContent =
//       // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
     
//     } else {
//       // document.querySelector('.message').textContent = '💥 You lost the game!';
     
//     }
//   }

  
// });

// document.querySelector('.again').addEventListener('click', function () {
  
// });

// ///////////////////////////////////////
// // Coding Challenge #1

// /* 
// Implement a game rest functionality, so that the player can make a new guess! Here is how:

// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the score and secretNumber variables
// 3. Restore the initial conditions of the message, number, score and guess input field
// 4. Also restore the original background color (#222) and number width (15rem)

// GOOD LUCK 😀
// */
