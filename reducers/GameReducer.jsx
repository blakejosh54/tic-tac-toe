export const GameReducer = (state, action) => {
  switch (action.type) {
    case "MAKE_MOVE": {
      if (state.board[action.index] || state.roundWinner) return state;

      const newBoard = [...state.board];

      return {
        ...state,
        history: [...state.history, state.board],
        board: newBoard.map((cell, i) =>
          i === action.index ? state.turn : cell,
        ),
        turn: state.turn === "x" ? "o" : "x",
      };
    }
    case "RESET_BOARD":
      return {
        ...state,
        board: Array(9).fill(null),
        turn: "x",
        roundWinner: "",
        winningCombo: [],
        history: [],
      };

    case "UPDATE_SCORE":
      if (action.payload === "draw") {
        return {
          ...state,
          player1: {
            ...state.player1,
            score: state.player1.score + 0.5,
          },
          player2: {
            ...state.player2,
            score: state.player2.score + 0.5,
          },
          roundWinner: "Draw",
          winningCombo: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        };
      }

      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          score: state[action.payload].score + 1,
        },
        roundWinner: state[action.payload].name,
        winningCombo: action.combo,
      };

    case "RESTART_GAME":
      return {
        ...state,
        board: Array(9).fill(null),
        player1: {
          ...state.player1,
          score: 0,
        },
        player2: {
          ...state.player2,
          score: 0,
        },
        turn: "x",
        roundWinner: "",
        winningCombo: [],
        history: [],
      };

    case "SWITCH_PLAYERS":
      return {
        ...state,
        player1: {
          ...state.player1,
          choice: state.player1.choice === "x" ? "o" : "x",
        },
        player2: {
          ...state.player2,
          choice: state.player2.choice === "x" ? "o" : "x",
        },
        turn: "x",
      };

    // my undo move feature
    case "UNDO_MOVE": {
      if (state.history.length === 0 || state.roundWinner) return state;

      const previousBoard = state.history[state.history.length - 1];

      return {
        ...state,
        board: previousBoard,
        history: state.history.slice(0, -1),
        turn: state.turn === "x" ? "o" : "x", // switches back the turn
        roundWinner: "", // resets the winner if undoing after you already won
        winningCombo: [],
      };
    }

    default:
      return state;
  }
};
