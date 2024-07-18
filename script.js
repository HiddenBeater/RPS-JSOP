// Create function that generates computer choice
// of rock, paper, or scissors
function getComputerChoice (){
 // Randomly generate number between 0 to 2
       let x = (Math.floor(Math.random() * 3));
// Appoint generated random number to assigned choice
       if (x === 0){
            let compChoice = ('rock');
            console.log(compChoice);
            return compChoice;
// Display assigned choice in string
       } else if (x === 1){
            let compChoice = ('paper');
            console.log(compChoice);
            return compChoice;
       } else if (x === 2){
            let compChoice = ('scissors');
            console.log(compChoice);
            return compChoice;
       }
}

function getHumanChoice(){
// Request prompt from human and assign human response to a variable
      let humanChoice = prompt('Please enter your choice of weapon.');
// Convert string to uppercase first letter
      humanChoice.toLowerCase();
      let answer = humanChoice.toLowerCase();
      return answer;
}
//Receive computer answer and human answer to play a game
function playRound(computerChoice, humanChoice){
// Declare human winner based on computer answer. Add score to human.
      if (computerChoice == 'rock' && humanChoice == 'paper'){
            console.log('You win! Paper beats rock.')
            humanScore++;
            return humanScore;
      } else if (computerChoice == 'paper' && humanChoice == 'scissors'){
            console.log('You win! Scissors beats paper.')
            humanScore++;
            return humanScore;
      } else if (computerChoice == 'scissors' && humanChoice == 'rock'){
            console.log('You win! Rock beats scissors.')
            humanScore++;
            return humanScore;
// Declare computer winner based on human answer. Add score to computer
      } else if (computerChoice == 'rock' && humanChoice == 'scissors'){
            console.log('You lose. Rock beats scissors.')
            computerScore++;
            return computerScore;
      } else if (computerChoice == 'paper' && humanChoice == 'rock'){
            console.log('You lose. Paper beats rock.')
            computerScore++;
            return computerScore;
      } else if (computerChoice == 'scissors' && humanChoice == 'paper'){
            console.log('You lose. Scissors beat paper.')
            computerScore++;
            return computerScore;
      } else {
// Declare no winner. No score added.
            console.log("It's a draw. Nobody wins.");
      }
}
// Start round
function playGame(){
// Assign round function to a variable
      // playRound(computerSelection, humanSelection);
// Create round variable
      let round
// Start round loop. Check if round reached round 5
// If not the 5th round, start round.
// Add score to human or computer score.
// Stop game at 5th round.
// Display final score for human
// Display final score for computer.
// Display winner.
      if (round != 5){
            playRound(computerSelection, humanSelection);
      }
}



let humanScore = 0;
let computerScore = 0;
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

// playRound(computerSelection, humanSelection);
playGame();



