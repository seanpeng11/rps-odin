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
        return "It's a tie!";
    }
}

const rockbtn = document.getElementById('rockbtn');
const paperbtn = document.getElementById('paperbtn');
const scissorsbtn = document.getElementById('scissorsbtn');

rockbtn.addEventListener("click", () => playRound('rock', getComputerChoice()));
paperbtn.addEventListener("click", () => playRound('paper', getComputerChoice()));
scissorsbtn.addEventListener("click", () => playRound('scissor', getComputerChoice()));