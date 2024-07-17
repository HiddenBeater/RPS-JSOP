// Create function that generates computer choice
// of rock, paper, or scissors
function getComputerChoice (){
 // Randomly generate number between 0 to 2
       let x = (Math.floor(Math.random() * 3));
       console.log(x);
// Appoint generated random number to assigned choice
       if (x === 0){
            let compChoice = ('Rock');
            console.log(compChoice);
       } else if (x === 1){
            let compChoice = ('Paper');
            console.log(compChoice);
       } else if (x === 2){
            let compChoice = ('Scissors');
            console.log(compChoice);
       }
// Display assigned choice in string
}

getComputerChoice();



