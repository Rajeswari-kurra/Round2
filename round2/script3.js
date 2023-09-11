const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game(playerSelection) {
    const computerSelection = computerPlay();
    const resultText = document.getElementById("result-text");

    const roundResult = playRound(playerSelection, computerSelection);
    resultText.textContent = roundResult;
}

const choiceButtons = document.querySelectorAll(".choice");

choiceButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const playerSelection = button.id;
        game(playerSelection);
    });
});
