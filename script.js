// Create function that generates computer choice
// of rock, paper, or scissors
function getComputerChoice (){
 // Randomly generate number between 0 to 2
       let x = (Math.floor(Math.random() * 3));
// Appoint generated random number to assigned choice
       if (x === 0){
            let compChoice = ('rock');
            console.log ('Computer chose rock.');
            return compChoice;
// Display assigned choice in string
       } else if (x === 1){
            let compChoice = ('paper');
            console.log('Computer chose paper.');
            return compChoice;
       } else if (x === 2){
            let compChoice = ('scissors');
            console.log('Computer chose scissors.')
            return compChoice;
       }
}

function getHumanChoice(){
// Request prompt from human and assign human response to a variable
      let humanChoice = prompt('Please enter your choice of weapon.');
// Convert string to uppercase first letter
      humanChoice.toLowerCase();
      let answer = humanChoice.toLowerCase();
      console.log(`You chose ${answer}. `)
      return answer;
}
//Receive computer answer and human answer to play a game
function playRound(computerChoice, humanChoice){
// Declare human winner based on computer answer. Add score to human.
      if (computerChoice == 'rock' && humanChoice == 'paper'){
            humanScore++;
            return humanScore;
      } else if (computerChoice == 'paper' && humanChoice == 'scissors'){
            humanScore++;
            return humanScore;
      } else if (computerChoice == 'scissors' && humanChoice == 'rock'){
            humanScore++;
            return humanScore;
// Declare computer winner based on human answer. Add score to computer
      } else if (computerChoice == 'rock' && humanChoice == 'scissors'){
            computerScore++;
            return computerScore;
      } else if (computerChoice == 'paper' && humanChoice == 'rock'){
            computerScore++;
            return computerScore;
      } else if (computerChoice == 'scissors' && humanChoice == 'paper'){
            computerScore++;
            return computerScore;
      } else {
// Declare no winner. No score added.
            console.log();
      }
}
// Start game
function playGame(){
// Assign number of round
      round = 1;
      while (true){
             // Round starts. Score gets added to human or computer.
            console.log(`Round ${round}`);
            playRound(getComputerChoice(), humanChoice);  
            console.log('Computer score: ' + computerScore); 
            console.log('Human score: ' + humanScore);
            round++;
      }
      // Stop game at 5th round.
      console.log('The final scores are: ' )
      // Display final score for human.
      console.log('Human score: ' + humanScore);
      // Display final score for computer.
      console.log('Computer score: ' + computerScore); 
          
}

let humanScore = 0;
let computerScore = 0;

const rkBtn = document.querySelector('#rockButton');
rkBtn.addEventListener('click', testFunction);

function testFunction(){
      alert('Rock');
}



