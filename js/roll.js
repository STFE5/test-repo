const myScore = 0;
const computerScore = 0;
let currentTurn = "ME";
let accTempScore = 0;

function addScore(current, acc) {
  switch (current) {
    case "ME":
      myScore += acc;
      break;
    case "COMPUTER":
      computerScore += acc;
      break;
    default:
      break;
  }

  return;
}

function changeTurn(current) {
  return current === "ME" ? "COMPUTER" : "ME";
}

function RollDice() {
  return Math.ceil(Math.random() * 6);
}

function checkWinner() {
  if (myScore >= 100) {
    console.log("The Winner is Me!");
  } else if (computerScore >= 100) {
    console.log("The Winner is Computer...");
  }
}

function handleRollClick() {
  const result = RollDice();

  if (result === 1) {
    accTempScore = 0;
    currentTurn = changeTurn(currentTurn);

    return;
  }

  accTempScore += result;
}

function handleStopClick() {
  addScore(currentTurn, accTempScore);

  currentTurn = changeTurn(currentTurn);
  accTempScore = 0;
  checkWinner();
}

document.querySelector("roll").addEventListener("click", handleRollClick);
document.querySelector("stop").addEventListener("click", handleStopClick);
