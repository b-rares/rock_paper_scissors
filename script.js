let win = 0;
let lose = 0;
const drawn = 0;
const playerRock = document.querySelector(`#rock`);
const playerPaper = document.querySelector("#paper");
const playerScissor = document.querySelector("#scissor");
const playerRestart = document.getElementById(`reset`);
const scoreOutput = document.getElementById('p')
let numberOfGames = 0;
let playerScore = 0;
let computerScore = 0;
let liContent = document.createTextNode(``);
let scoreContainer = document.getElementById('score_container');

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
    console.log(playerSelection.id);
    console.log(computerSelection);
    if(playerSelection.id === computerSelection){
        liContent = `You both chose ${computerSelection},it's a drawn!`;
        matchHistory(liContent);
        return drawn
    }
    if(playerSelection.id === `rock`){
        if(computerSelection === `paper`){
            liContent = `You chose ${playerSelection.id},but ${computerSelection} beats you!`;
            matchHistory(liContent);
            return lose+=1;
        }liContent = `You chose ${playerSelection.id} and beated the ${computerSelection}`
        matchHistory(liContent);
        return win+=1;
    }
    if(playerSelection.id === `paper`){
        if(computerSelection === `rock`){
            liContent = `You chose ${playerSelection.id} and beated the ${computerSelection}`
            matchHistory(liContent);
            return win+=1;
        }liContent = `You chose ${playerSelection.id},but ${computerSelection} beats you!`;
        matchHistory(liContent);
        return lose+=1;
    }
    if(playerSelection.id === `scissor`){
        if(computerSelection === `rock`){
            liContent = `You chose ${playerSelection.id},but ${computerSelection} beats you!`;
            matchHistory(liContent);
            return lose+=1;
        }
        liContent = `You chose ${playerSelection.id} and beated the ${computerSelection}`;
        matchHistory(liContent);
        return win+=1;
    }
}

let matchHistory = (liContent) => {
    if(numberOfGames <= 4){
        let newLi = document.createElement('LI');
        newLi.append(liContent);
        scoreContainer.append(newLi);
    }else if(win>lose){
        scoreContainer.append(`You have won!If you wish to play again,please hit Restart`)
    }else if(win<lose){
        scoreContainer.append(`You have lost.Try your luck again hitting Restart`)
    }else{
        scoreContainer.append(`You both are awsome,it's a drawn!Try again hitting Restart`)
    }
}

let gameRestart = () => location.reload();


let gameStarter = (playerInput) =>{
round(playerInput,computerPlay());
numberOfGames++;
if(numberOfGames > 5){
    playerRock.disabled = true;
    playerScissor.disabled = true;
    playerPaper.disabled = true;
}
}


playerRock.addEventListener(`click`, () =>{
    gameStarter(playerRock);
})
playerPaper.addEventListener(`click`, () =>{
    gameStarter(playerPaper);
})
playerScissor.addEventListener(`click`, () =>{
    gameStarter(playerScissor);
})
playerRestart.addEventListener('click', () => {
   gameRestart();
})
