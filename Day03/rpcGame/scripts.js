console.log("Hello World")

let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    const randomChoice = Math.random();

    if (randomChoice < 1/3){
        return("rock")
    } else if (randomChoice <2/3){
        return("paper")
    }else {
        return("scissors")
    }
}


function getHumanChoice(){
    const humanChoice = prompt("Choose from rock,paper & Scissor: ");
    return humanChoice.toLowerCase()
}

function playRound(humanChoice, computerChoice){
   
    if (humanChoice === computerChoice){
        console.log("Its a tie")
    } else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You Win!!! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }else{
        console.log(`You lost!!! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);

    
}
function playGame(){
    playRound()

    for (let i =1; i<=5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection)
    }

    console.log("GAME OVER");
    if (humanScore > computerScore){
        console.log("You win the game!");
    }else if(computerScore > humanScore){
        console.log("Computer win the game!");
    }else{
        console.log("ITS A TIE!!!! Final score");
    }
}
playGame()