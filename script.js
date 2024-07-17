// Create function that generates computer choice
// of rock, paper, or scissors
function getComputerChoice (){
 // Randomly generate number between 0 to 2
       let x = (Math.floor(Math.random() * 3));
// Appoint generated random number to assigned choice
       if (x === 0){
            let compChoice = ('Rock');
// Display assigned choice in string
            console.log(compChoice);
       } else if (x === 1){
            let compChoice = ('Paper');
            console.log(compChoice);
       } else if (x === 2){
            let compChoice = ('Scissors');
            console.log(compChoice);
       }
}

function getHumanChoice(){
// Request prompt from human and assign human response to a variable
      let humanChoice = prompt('Please enter your choice of weapon.');
      console.log(humanChoice.toLowerCase());
      console.log(humanChoice[0].toUpperCase());
// Verify that human response is a valid answer
      // if (humanChoice != )
// If not valid answer, request correct answer

}

getComputerChoice();
getHumanChoice();



