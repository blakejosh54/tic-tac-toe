import { createContext, useReducer } from "react";
import { genConfig } from "react-nice-avatar";
import { GameReducer } from "../../reducers/GameReducer";

export const GameContext = createContext({});

// initial state
const initialState = {
  board: Array(9).fill(null),
  player1: {
    choice: "x",
    name: "Player 1",
    score: 0,
    color: "#8437f9",
    avatarConfig: genConfig(),
  },
  player2: {
    choice: "o",
    name: "Player 2",
    score: 0,
    color: "#f9c811",
    avatarConfig: genConfig(),
  },
  turn: "x",
  roundWinner: "",
  winningCombo: [],
};

// provider
export const GameContextProvider = ({ children }) => {
  const [game, dispatch] = useReducer(GameReducer, initialState);

  const updateBoard = (index) => {
    dispatch({ type: "MAKE_MOVE", index });
  };

  const resetBoard = () => {
    dispatch({ type: "RESET_BOARD" });
  };

  const restartGame = () => {
    dispatch({ type: "RESTART_GAME" });
  };

  const updateScore = (winner, combo) => {
    dispatch({
      type: "UPDATE_SCORE",
      payload: winner,
      combo,
    });
  };

  const switchTurn = () => {
    dispatch({ type: "SWITCH_PLAYERS" });
  };

  const roundComplete = (result, playerTurn) => {
    if (result === "draw") {
      updateScore("draw", result);
    } else if (playerTurn === game.player1.choice) {
      updateScore("player1", result);
    } else {
      updateScore("player2", result);
    }

    switchTurn();
  };

  return (
    <GameContext.Provider
      value={{
        game,
        updateBoard,
        resetBoard,
        restartGame,
        roundComplete,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
