const win = "You won!";
const lose = "You lost.";
const drawn = "Darwn!"
let numberOfGames = 0;
let playerScore = 0;
let computerScore = 0;

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
        console.log(`${playerScore} : ${computerScore}`)
        return drawn;
    }
    if(playerSelection === `rock`){
        if(computerSelection === `paper`){
            console.log(`${playerScore} : ${computerScore+=1}`);
            return lose;
        }console.log(`${playerScore+=1} : ${computerScore}`);
        return win;
    }
    if(playerSelection === `paper`){
        if(computerSelection === `rock`){
            console.log(`${playerScore} : ${computerScore+=1}`);
            return win;
        }console.log(`${playerScore} : ${computerScore+=1}`);
        return lose;
    }
    if(playerSelection === `scissor`){
        if(computerSelection === `rock`){
            console.log(`${playerScore} : ${computerScore+=1}`);
            return lose;
        }console.log(`${playerScore+=1} : ${computerScore}`);
        return win;
    }
}



let gameMatch = (rounds = 1) => {
    while(rounds < 6){
        console.log(`Round ${rounds} out of 5`);
        round(prompt(`Choose`),computerPlay());
        rounds++;
    }
    if(playerScore>computerScore){
        return `You won!`;
    }else if(playerScore<computerScore){
        return `You lost`;
    }else{return `It's a drawn!`}
}

console.log(gameMatch())