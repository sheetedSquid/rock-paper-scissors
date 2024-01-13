let counterPlayer = 0;
let counterComputer = 0;
let counterRound = 0;

let button = document.querySelector('button');
let playerResult = document.querySelector('#player-result');
let computerResult = document.querySelector('#computer-result');
let roundResult = document.querySelector('#round-result');
let computerChoiceDisplay = document.querySelector('#computer-choice');
let rock1 = document.querySelector('#rock');
let paper2 = document.querySelector('#paper');
let scissors3 = document.querySelector('#scissors');
let getUserChoice;

playerResult.textContent = `Player: ${counterPlayer}`;
computerResult.textContent = `Computer: ${counterComputer}`;
roundResult.textContent = `Round: ${counterRound}`;

rock1.addEventListener('click', () => {
    getUserChoice = 1;
    getComputer = getComputerChoice();
    let gameResult = game(playRound(getUserChoice, getComputer));
    console.log(gameResult);
});

paper2.addEventListener('click', () => {
    getUserChoice = 2;
    getComputer = getComputerChoice();
    let gameResult = game(playRound(getUserChoice, getComputer));
    console.log(gameResult);
});

scissors3.addEventListener('click', () => {
    getUserChoice = 3;
    getComputer = getComputerChoice();
    let gameResult = game(playRound(getUserChoice, getComputer));
    console.log(gameResult);
});

function getRandom() {
    return (Math.floor(Math.random() * 3) + 1);
}

function getComputerChoice() {
    let choice = getRandom();
    
    switch (choice) {
        case 1: //computer choose rock
            computerChoiceDisplay.textContent = "Rock";
            return 1;
        case 2: //computer choose paper 
            computerChoiceDisplay.textContent = "Paper";
            return 2;
        case 3: //computer choose scissors
            computerChoiceDisplay.textContent = "Scissors";
            return 3;
        default:
            throw "RANDOM ERROR: THERE'S NO RANDOM 1 to 3 NUMBER";
    }
}

function playRound(userChoice, computerChoice) {
    switch(userChoice) {
        case computerChoice:
            return "draw";
        case 1:
            if (computerChoice === 3) return "win";
            if (computerChoice === 2) return "lost";
        case 2:
            if (computerChoice === 1) return "win";
            if (computerChoice === 3) return "lost";
        case 3:
            if (computerChoice === 2) return "win";
            if (computerChoice === 1) return "lost";
    };
}

function game(round) {
    switch(round) {
        case "win":
            counterPlayer++;
            playerResult.textContent = `Player: ${counterPlayer}`;
            counterRound++;
            roundResult.textContent = `Round: ${counterRound}`;
            return 1;
        case "lost":
            counterComputer++;
            computerResult.textContent = `Computer: ${counterComputer}`;
            counterRound++;
            roundResult.textContent = `Round: ${counterRound}`;
            return 0;
        case "draw":
            counterRound++;
            roundResult.textContent = `Round: ${counterRound}`;
            return 2;
    }  
}