let counterPlayer = 0;
let counterComputer = 0;

const getRandom = () => Math.floor(Math.random() * 3) + 1;

const getComputerChoice = () => {
    let choice = getRandom();
    
    switch (choice) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
        default:
            throw "RANDOM ERROR: THERE'S NO RANDOM 1 to 3 NUMBER";
    }
};

const getUserChoice = () => {
    let choice = prompt(`Enter your weapon! Score is:\n You: ${counterPlayer} vs Computer: ${counterComputer}`);

    return choice.toUpperCase();
};

const playRound = (userChoice, computerChoice) => {
    const playerSelection = userChoice();
    const computerSelection = computerChoice();

    switch (playerSelection) {
        case computerSelection:
            alert("It's a draw!");
            return "DRAW";
        case "ROCK":
            if (computerSelection === "SCISSORS") { 
                alert("You WIN! Rock beats Paper");
                return "WIN";
            };
            if (computerSelection === "PAPER") {
                alert("You Lose! Paper beats Rock");
                return "LOST";
            };
        case "PAPER":
            if (computerSelection === "ROCK") {
                alert("You WIN! Paper beats Rock");
                return "WIN";
            };
            if (computerSelection === "SCISSORS") {
                alert ("You Lose! Scissors beats Paper");
                return "LOST";
            };
        case "SCISSORS":
            if (computerSelection === "PAPER") {
                alert("You WIN! Scissors beats Paper");
                return "WIN";
            };
            if(computerSelection === "ROCK") {
                alert("You Lose! Rock beats Scissors");
                return "LOST";
            };
    };
};

const game = () => {
    for (let i = 0; i <= 5; i++) {
        switch (playRound(getUserChoice, getComputerChoice)) {
            case "WIN":
                counterPlayer++;
                break;
            case "LOST":
                counterComputer++;
                break;
            case "DRAW":
                break;
        };
    };

    alert(`GAME OVER. FINAL SCORE:\nYOU: ${counterPlayer} COMPUTER: ${counterComputer}`);
};

game();