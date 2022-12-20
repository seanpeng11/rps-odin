const choices = ["rock", "paper", "scissors"]
function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}
function playRound(playerSelection, computerSelection) {
    playerIdx = choices.indexOf(playerSelection);
    let win = (computerSelection + 1) % 3;
    let lose = computerSelection ? computerSelection - 1 : 2;
    if (playerIdx === win) {
        return `You Win! ${playerSelection} beats ${choices[computerSelection]}`;
    } else if (playerIdx === lose) {
        return `You Lose! ${choices[computerSelection]} beats ${playerSelection}`;
    } else {
        return "It's a tie!"
    }
}
function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Enter your choice:").toLowerCase();
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        await(sleep(1))
    }
}

game();