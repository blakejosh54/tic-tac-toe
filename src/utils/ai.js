import { checkForWinner } from "./GameUtils";

// ===== AI FEATURE START =====

// difficulty (0 = random, 1 = perfect)
const AI_DIFFICULTY = 0.7;

// 🧠 MINIMAX FUNCTION
const minimax = (board, isMaximizing, aiPlayer, humanPlayer) => {
  const result = checkForWinner(board);

  if (result) {
    if (result === "draw") return 0;

    const winnerChoice = board[result[0]];
    if (winnerChoice === aiPlayer) return 10;
    if (winnerChoice === humanPlayer) return -10;
  }

  if (isMaximizing) {
    let bestScore = -Infinity;

    for (let i = 0; i < board.length; i++) {
      if (board[i] == null) {
        board[i] = aiPlayer;
        const score = minimax(board, false, aiPlayer, humanPlayer);
        board[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    }

    return bestScore;
  } else {
    let bestScore = Infinity;

    for (let i = 0; i < board.length; i++) {
      if (board[i] == null) {
        board[i] = humanPlayer;
        const score = minimax(board, true, aiPlayer, humanPlayer);
        board[i] = null;
        bestScore = Math.min(score, bestScore);
      }
    }

    return bestScore;
  }
};

// 🎯 GET BEST MOVE (WITH IMPERFECTION)
export const getBestMove = (board, aiPlayer, humanPlayer) => {
  const availableMoves = board
    .map((val, idx) => (val === null ? idx : null))
    .filter((val) => val !== null);

  // 🎲 RANDOM MOVE CHANCE (makes AI beatable)
  if (Math.random() > AI_DIFFICULTY) {
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  }

  // 🤖 PERFECT MOVE (minimax)
  let bestScore = -Infinity;
  let bestMove = -1;

  for (let i = 0; i < board.length; i++) {
    if (board[i] == null) {
      board[i] = aiPlayer;
      const score = minimax(board, false, aiPlayer, humanPlayer);
      board[i] = null;

      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }

  return bestMove;
};

// ===== AI FEATURE END =====
