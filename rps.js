const choices = ["rock", "paper", "scissors"]
function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}
function playRound(playerSelection, computerSelection) {
    playerIdx = choices.indexOf(playerSelection);
    let win = (computerSelection + 1) % 3;
    let lose = computerSelection ? computerSelection - 1 : 2;
    if (playerIdx === win) {
        result.textContent = `You Win! ${playerSelection} beats ${choices[computerSelection]}`;
        playerScore.textContent = (parseInt(playerScore.textContent) + 1).toString();
    } else if (playerIdx === lose) {
        result.textContent = `You Lose! ${choices[computerSelection]} beats ${playerSelection}`;
        computerScore.textContent = (parseInt(computerScore.textContent) + 1).toString();
    } else {
        result.textContent = `It's a tie! You both chose ${playerSelection}`;
    }
    if (playerScore.textContent === '5' && computerScore.textContent < '5') {
        winner.textContent = 'You beat the computer!';
    } else if (computerScore.textContent === '5' && playerScore.textContent < '5') {
        winner.textContent = 'The computer beat you!';
    }

}

const rockbtn = document.getElementById('rockbtn');
const paperbtn = document.getElementById('paperbtn');
const scissorsbtn = document.getElementById('scissorsbtn');

rockbtn.addEventListener("click", () => playRound('rock', getComputerChoice()));
paperbtn.addEventListener("click", () => playRound('paper', getComputerChoice()));
scissorsbtn.addEventListener("click", () => playRound('scissors', getComputerChoice()));

const result = document.querySelector('.result');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const winner = document.querySelector('.winner');
