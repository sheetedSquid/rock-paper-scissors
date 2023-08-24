const getRandom = () => Math.floor(Math.random() * 3) + 1;

const getComputerChoice = () => {
    let choice = getRandom();
    
    switch (choice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            throw "RANDOM ERROR THERE NO RANDOM 1 to 3 NUMBER"
    }
}