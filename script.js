let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resultDisplay = document.getElementById("result");

const playerImg = document.querySelector(".player img");
const computerImg = document.querySelector(".computer img");

const choices = ['rock', 'paper', 'scissor'];
const choiceToImage = {
    rock: "assets/Fist-Image.png",
    paper: "assets/Paper-Image.png",
    scissor: "assets/Scissor-Image.png"
};

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function handleTurn(playerChoice) {
    const computerChoice = getComputerChoice();

    // Update hand images
    playerImg.src = choiceToImage[playerChoice];
    computerImg.src = choiceToImage[computerChoice];

    // Determine winner
    if (playerChoice === computerChoice) {
        resultDisplay.innerText = "It's a Tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "scissor" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        resultDisplay.innerText = "You Won!";
        playerScore++;
    } else {
        resultDisplay.innerText = "Computer Won!";
        computerScore++;
    }

    // Update scores
    playerScoreDisplay.innerText = playerScore;
    computerScoreDisplay.innerText = computerScore;
}

// Add event listeners to buttons
document.querySelector(".rock").addEventListener("click", () => handleTurn("rock"));
document.querySelector(".paper").addEventListener("click", () => handleTurn("paper"));
document.querySelector(".scissor").addEventListener("click", () => handleTurn("scissor"));
