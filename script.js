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
            console.log('You win! Computed picked rock.')
            humanScore++;
            return humanScore;
      } else if (computerChoice == 'paper' && humanChoice == 'scissors'){
            console.log('You win! Computer picked paper.')
            humanScore++;
            return humanScore;
      } else if (computerChoice == 'scissors' && humanChoice == 'rock'){
            console.log('You win! Computer picked scissors.')
            humanScore++;
            return humanScore;
// Declare computer winner based on human answer. Add score to computer
      } else if (computerChoice == 'rock' && humanChoice == 'scissors'){
            console.log('Computer picked rock.')
            computerScore++;
            return computerScore;
      } else if (computerChoice == 'paper' && humanChoice == 'rock'){
            console.log('Computer picked paper.')
            computerScore++;
            return computerScore;
      } else if (computerChoice == 'scissors' && humanChoice == 'paper'){
            console.log('Computer picked scissors.')
            computerScore++;
            return computerScore;
      } else {
// Declare no winner. No score added.
            console.log("It's a draw. Nobody wins.");
      }
}
// Start game
function playGame(){
// Assign number of round
      round = 1;
// Start round.
      while (round < 5){
// If not the 5th round, start round.
            // Round starts. Score gets added to human or computer.
            // Ask for human answer
            getHumanChoice();
            // Generate computer answer
            getComputerChoice();
            playRound(computerSelection, humanSelection);
            round++;
      }
      // Stop game at 5th round.
            console.log('The game is over! Here are the final scores.');
      // Display final score for human
      // Display final score for computer.

            console.log('Human score: ' + humanScore);
            console.log('Computer score: ' + computerScore);              
}


let humanScore = 0;
let computerScore = 0;
let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();


playGame();



