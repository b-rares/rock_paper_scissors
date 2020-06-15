let computerPlay = () => {
    let random = Math.floor(Math.random() * 4);
    switch(random){
        case 0:
            return `rock`;
        case 1:
             return `paper`;
        case 2:
            return `scissor`;
    }
}

let roundPlay = (playerSelection,computerSelection) => {
   if(playerSelection.toLowerCase() == `rock`){
       if(computerSelection == `rock`){
           return `It's a draw!`
       }else if(computerSelection == `paper`){
           return `Computer beated you :(!`;
       }return `You're awsome.You win!`
   }
   if(playerSelection.toLowerCase() == `paper`){
       if(computerSelection == `rock`){
           return `You're awsome.You win!`;
       }else if (computerSelection == `paper`){
           return `It's a draw!`;
       }return `Computer beated you :(!`;
   }
   if(playerSelection.toLowerCase() == `scissor`){
       if(computerSelection == `rock`){
           return `Computer beated you :(!`;
       }else if (computerSelection == `paper`){
           return `You're awsome.You win!`;
       }return `It's a draw!`;
   }
}

let game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let i = 0;
    while(i < 5){
   if(roundPlay().value == `You're awsome.You win!`){
       playerScore++;
   }else if(roundPlay().value == `Computer beated you :(!`){
       computerScore++;
    }
    i++;
}
   return `${playerScore} : ${computerScore}`;
}

let playerSelection = `rock`;
let computerSelection = computerPlay();
console.log(roundPlay(playerSelection,computerSelection));
console.log(game());