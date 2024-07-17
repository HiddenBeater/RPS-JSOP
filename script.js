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
// Declare winner based on computer and human answer
      if (computerChoice == 'rock' && humanChoice == 'paper'){
            console.log('You win! Paper beats rock.')
            humanScore++;
      } else if (computerChoice == 'paper' && humanChoice == 'scissors'){
            console.log('You win! Scissors beats paper.')
            humanScore++;
      } else if (computerChoice == 'scissors' && humanChoice == 'rock'){
            console.log('You win! Rock beats scissors.')
            humanScore++;
      } else if (computerChoice == 'rock' && humanChoice == 'scissors'){
            console.log('You lose. Rock beats scissors.')
            computerScore++;
      } else if (computerChoice == 'paper' && humanChoice == 'rock'){
            console.log('You lose. Paper beats rock.')
            computerScore++;
      } else if (computerChoice == 'scissors' && humanChoice == 'paper'){
            console.log('You lose. Scissors beat paper.')
            computerScore++;
      } else {
            console.log("It's a draw. Nobody wins.");
      
      }
}

let humanScore = 0;
let computerScore = 0;
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);



