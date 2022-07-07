let computerPlay = ()=>{
    let choice = ["Rock", "Paper", "Scissors"]
    let random = choice[Math.floor(Math.random() * choice.length)]
    return random;
}

let playRound = (playerSelection, computerSelection)=>{
    let player = playerSelection.toLowerCase();
   this.computerSelection = computerPlay();
   return "You Lose! Paper beats Rock"
  

   
}

let game = ()=>{
    let gamePlay = playRound();
    for (let i = 0; i < gamePlay.length; i++) {
        const element = gamePlay[i];
        
    }
    console.log(gamePlay);
}
let playerChoice = prompt("Choose your player");
computerPlay();
playRound(playerSelection, computerSelection);
game();