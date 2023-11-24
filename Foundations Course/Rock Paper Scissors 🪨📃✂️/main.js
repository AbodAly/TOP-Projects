const choice = ["Rock", "Paper", "Scissors"];
function random(range = 1) {
  return Math.floor(Math.random() * range);
}
const getComputerChoice = () => choice[random(choice.length - 1)];
const getPlayerSelection = () =>
  prompt(`type your choice [paper, rock, scissors]`).trim();
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors")
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  if (playerSelection === "scissors" && computerSelection === "rock")
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  if (playerSelection === "paper" && computerSelection === "rock")
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  if (playerSelection === "rock" && computerSelection === "paper")
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  if (playerSelection === "scissors" && computerSelection === "paper")
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  if (playerSelection === "paper" && computerSelection === "scissors")
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  else return `Draw`;
}
function game() {
  let computerRecord = 0;
  let playerRecord = 0;
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice().toLowerCase();
    const playerSelection = getPlayerSelection().toLowerCase();
    const res = playRound(playerSelection, computerSelection);
    console.log(res);
    if (res.includes("Win")) playerRecord++;
    else if (res.includes("Lose")) computerRecord++;
  }
  return computerRecord > playerRecord
    ? `Computer is the winner by ${computerRecord}`
    : `You win by ${playerRecord}`;
}
console.log(game());
