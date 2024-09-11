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
            return compChoice;
// Display assigned choice in string
       } else if (x === 1){
            let compChoice = ('paper');
            const compAnswer = document.createElement("div");
            compAnswer.classList.add("compAnswer");
            compAnswer.textContent = (`Computer chose ${compChoice}`)
            container.appendChild(compAnswer);
            return compChoice;
       } else if (x === 2){
            let compChoice = ('scissors');
            const compAnswer = document.createElement("div");
            compAnswer.classList.add("compAnswer");
            compAnswer.textContent = (`Computer chose ${compChoice}`)
            container.appendChild(compAnswer);
            return compChoice;
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
}}

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
            //Display human answer in DOM
            let humanRoundAnswer = getHumanChoice(finalAnswer);
            // Display computer answer in DOM
            let computerRoundAnswer = getComputerChoice();
            playRound(computerRoundAnswer, humanRoundAnswer);
            console.log(finalAnswer);
            console.log(computerRoundAnswer);
      })
}))

//playRound(getComputerChoice(), chosenAnswer)

