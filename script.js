const win = "You won!";
const lose = "You lost.";
const drawn = "Darwn!"
let numberOfGames = 0;
let playerScore = 0;
let computerScore = 0;
let playerRock = document.getElementById('rock');
let playerPaper = document.getElementById('paper');
let playerScissor = document.getElementById('scissor');
let scoreHistory = document.getElementById('score_output');
let rounds = 1;


let computerPlay = () =>{
    let computerSelection = Math.floor(Math.random() * 3);
    switch(computerSelection){
        case 0:
            return `rock`;
        case 1:
            return `scissor`;
        case 2:
            return `paper`;
    }
}



let round = (playerSelection,computerSelection) =>{
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);
    if(playerSelection === computerSelection){
        console.log(`${playerScore} : ${computerScore}`);
        gameMatch(rounds+=1);
        return drawn;
    }
    if(playerSelection === `rock`){
        if(computerSelection === `paper`){
            console.log(`${playerScore} : ${computerScore+=1}`);
            gameMatch(rounds+=1);
            return lose;
        }console.log(`${playerScore+=1} : ${computerScore}`);
        gameMatch(rounds+=1);
        return win;
    }
    if(playerSelection === `paper`){
        if(computerSelection === `rock`){
            console.log(`${playerScore+=1} : ${computerScore}`);
            gameMatch(rounds+=1);
            return win;
        }console.log(`${playerScore} : ${computerScore+=1}`);
        gameMatch(rounds+=1);
        return lose;
    }
    if(playerSelection === `scissor`){
        if(computerSelection === `rock`){
            console.log(`${playerScore} : ${computerScore+=1}`);
            gameMatch(rounds+=1);
            return lose;
        }console.log(`${playerScore+=1} : ${computerScore}`);
        gameMatch(rounds+=1);
        return win;
    }
}

let startGame


let gameMatch = (rounds = 1) => {
   if(rounds == 6){
      finalScore(playerScore,computerScore)
   }
}

let finalScore = (playerScore,computerScore) => {
    if(playerScore === computerScore){
        return gameStop();
        
    }else if(playerScore > computerScore){
        return gameStop();
        
    }return gameStop();
    
}


let gameRestart = () => location.reload();


let gameStarter = (playerInput) =>{
round(playerInput,computerPlay());
}

let gameStop = () => {};

playerRock.addEventListener(`click`, () =>{
    gameStarter(playerRock.id);
})
playerPaper.addEventListener(`click`, () =>{
    gameStarter(playerPaper.id);
})
playerScissor.addEventListener(`click`, () =>{
    gameStarter(playerScissor.id);
})
console.log(playerRock);