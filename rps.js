const choices = ["rock", "paper", "scissors"]
function getComputerChoice() {
    let idx = Math.floor(Math.random() * 3) + 1
    return choices[idx]
}
