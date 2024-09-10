// Universal container for score and results
const container = document.querySelector("#score_container");
// Create function that generates computer choice
// of rock, paper, or scissors
function getComputerChoice (){
 // Randomly generate number between 0 to 2
       let x = (Math.floor(Math.random() * 3));
// Appoint generated random number to assigned choice
       if (x === 0){
            let compChoice = ('rock');
            const compAnswer = document.createElement("div");
            compAnswer.classList.add("compAnswer");
            compAnswer.textContent = (`Computer chose ${compChoice}`)
            container.appendChild(compAnswer);
// Display assigned choice in string
       } else if (x === 1){
            let compChoice = ('paper');
            const compAnswer = document.createElement("div");
            compAnswer.classList.add("compAnswer");
            compAnswer.textContent = (`Computer chose ${compChoice}`)
            container.appendChild(compAnswer);
       } else if (x === 2){
            let compChoice = ('scissors');
            const compAnswer = document.createElement("div");
            compAnswer.classList.add("compAnswer");
            compAnswer.textContent = (`Computer chose ${compChoice}`)
            container.appendChild(compAnswer);
       }
}

function getHumanChoice(chosenAnswer){

// Display human answer
      const humanAnswer = document.createElement("div");
      humanAnswer.classList.add("humanAnswer");
      humanAnswer.textContent = (`You chose ${chosenAnswer}`)
      container.appendChild(humanAnswer);
}
//Receive computer answer and human answer to play a game
function playRound(computerChoice, chosenAnswer){
// Declare human winner based on computer answer. Add score to human.
      if (computerChoice == 'rock' && chosenAnswer == 'paper'){
            humanScore++;
            return humanScore;
      } else if (computerChoice == 'paper' && chosenAnswer == 'scissors'){
            humanScore++;
            return humanScore;
      } else if (computerChoice == 'scissors' && chosenAnswer == 'rock'){
            humanScore++;
            return humanScore;
// Declare computer winner based on human answer. Add score to computer
      } else if (computerChoice == 'rock' && chosenAnswer == 'scissors'){
            computerScore++;
            return computerScore;
      } else if (computerChoice == 'paper' && chosenAnswer == 'rock'){
            computerScore++;
            return computerScore;
      } else if (computerChoice == 'scissors' && chosenAnswer == 'paper'){
            computerScore++;
            return computerScore;
      } else {
// Declare no winner. No score added.
            console.log();
      }            console.log(computerChoice);
      console.log (chosenAnswer);
}
// Assign number of round
//       round = 1;
//       while (true){
//              // Round starts. Score gets added to human or computer.
//             console.log(`Round ${round}`);
//             playRound(getComputerChoice(), chosenAnswer);  
//             console.log('Computer score: ' + computerScore); 
//             console.log('Human score: ' + humanScore);
//             round++;
//       }
//       // Stop game at 5th round.
//       console.log('The final scores are: ' )
//       // Display final score for human.
//       console.log('Human score: ' + humanScore);
//       // Display final score for computer.
//       console.log('Computer score: ' + computerScore); 
          
// }

let humanScore = 0;
let computerScore = 0;

//Make choice of button
const all_btns = document.querySelectorAll('.btn');


//Register button click event
let choice = all_btns.forEach((button => {
      let chosenAnswer = '';
      button.addEventListener('click', (e) =>{
            chosenAnswer =(e.target.innerHTML);
            let finalAnswer = chosenAnswer.toLowerCase();
            console.log(finalAnswer);
            getHumanChoice(finalAnswer);
            getComputerChoice();
      })
}))

//playRound(getComputerChoice(), chosenAnswer)

