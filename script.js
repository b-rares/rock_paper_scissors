const win = "You won!";
const lose = "You lost.";
const drawn = "Darwn!"
let rounds = 0;
let numberOfGames = 0;

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
        return drawn;
    }
    if(playerSelection === `rock`){
        if(computerSelection === `paper`){
            return lose;
        }return win;
    }
    if(playerSelection === `paper`){
        if(computerSelection === `rock`){
            return lose;
        }return win;
    }
    if(playerSelection === `scissor`){
        if(computerSelection === `rock`){
            return lose;
        }return win;
    }
}

let gameMatch = (rounds) => {
    while(rounds < 5){
        round(prompt(`Alege`),computerPlay());
        console.log(rounds);
        rounds++;
    }
}

console.log(gameMatch(0))