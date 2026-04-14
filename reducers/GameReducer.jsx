export const GameReducer = (state, action) => {
  switch (action.type) {
    case "MAKE_MOVE": {
      if (state.board[action.index] || state.roundWinner) return state;

      const newBoard = [...state.board];
      newBoard[action.index] = state.turn;

      return {
        ...state,
        board: newBoard,
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

    default:
      return state;
  }
};
