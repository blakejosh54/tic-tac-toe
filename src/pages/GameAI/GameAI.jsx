import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { Container } from "../../styles/General.styled";
import { GameBoardStyle, UndoContainer } from "../Game/Game.styled";
import { CellStyle } from "../../components/GameCell/GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import Player from "../../components/Player/Player";
import Button from "../../components/Button/Button";
import { checkForWinner } from "../../utils/GameUtils";
import { ModalContext } from "../../contexts/ModalContext";
import RoundOverModal from "../../components/Modal/RoundOverModals/RoundOverModal";
import IconO from "../../assets/icon-o.svg?react";
import IconX from "../../assets/icon-x.svg?react";
import XIconOutline from "../../assets/icon-x-outline.svg?react";
import OIconOutline from "../../assets/icon-o-outline.svg?react";
import { getBestMove } from "../../utils/ai";

const GameAICellStyle = styled(CellStyle)`
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};

  ${(props) =>
    props.disableHover &&
    `
    &:hover .outlineIconX path,
    &:hover .outlineIconO path {
      fill: transparent;
      stroke: transparent;
      stroke-width: 0;
    }
  `}

  &:disabled {
    pointer-events: none;
  }
`;

function GameAI() {
  const { game, updateBoard, roundComplete, undoMove } =
    useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  const [isAIThinking, setIsAIThinking] = useState(false);

  const aiTimeoutRef = useRef(null);
  const modalTimeoutRef = useRef(null);
  const thinkingDelayRef = useRef(null);

  // ===== AI FEATURE START =====

  const humanPlayer = "x";
  const aiPlayer = "o";

  const canHumanPlay = useMemo(() => {
    return game.turn === humanPlayer && !game.roundWinner && !isAIThinking;
  }, [game.turn, game.roundWinner, isAIThinking, humanPlayer]);

  const finishRound = (result, currentPlayer) => {
    if (!result) return;

    roundComplete(result, currentPlayer);
    setIsAIThinking(false);

    modalTimeoutRef.current = setTimeout(() => {
      handleModal(<RoundOverModal />);
    }, 2000);
  };

  const onHumanMove = (index) => {
    if (!canHumanPlay || game.board[index]) return;

    const newBoard = [...game.board];
    newBoard[index] = humanPlayer;

    updateBoard(index);

    const result = checkForWinner(newBoard);
    if (result) {
      finishRound(result, humanPlayer);
      return;
    }

    setIsAIThinking(true);
  };

  // 🤖 AI MOVE EXECUTION
  useEffect(() => {
    if (game.roundWinner || game.turn !== aiPlayer || !isAIThinking) return;

    aiTimeoutRef.current = setTimeout(() => {
      const boardCopy = [...game.board];
      const bestMove = getBestMove(boardCopy, aiPlayer, humanPlayer);

      if (bestMove === -1) {
        setIsAIThinking(false);
        return;
      }

      const aiBoard = [...game.board];
      aiBoard[bestMove] = aiPlayer;

      updateBoard(bestMove);

      const result = checkForWinner(aiBoard);

      if (result) {
        finishRound(result, aiPlayer);
      } else {
        setIsAIThinking(false);
      }
    }, 500);

    return () => {
      if (aiTimeoutRef.current) clearTimeout(aiTimeoutRef.current);
    };
  }, [game.board, game.turn, game.roundWinner, isAIThinking]);

  // 🔥 FIX: delay AI after undo so user can keep undoing
  useEffect(() => {
    if (game.roundWinner) return;

    if (game.turn === aiPlayer) {
      if (thinkingDelayRef.current) {
        clearTimeout(thinkingDelayRef.current);
      }

      thinkingDelayRef.current = setTimeout(() => {
        setIsAIThinking(true);
      }, 1500); // ⏳ delay (you can tweak this)
    }

    return () => {
      if (thinkingDelayRef.current) {
        clearTimeout(thinkingDelayRef.current);
      }
    };
  }, [game.board]);

  // cleanup
  useEffect(() => {
    return () => {
      if (aiTimeoutRef.current) clearTimeout(aiTimeoutRef.current);
      if (modalTimeoutRef.current) clearTimeout(modalTimeoutRef.current);
      if (thinkingDelayRef.current) clearTimeout(thinkingDelayRef.current);
    };
  }, []);

  // ===== AI FEATURE END =====

  return (
    <Container>
      <Player
        player={game.player1}
        isPlayerActive={game.player1.choice === game.turn}
      />

      <GameBoardStyle>
        {game.board.map((cellItem, index) => {
          if (cellItem === "x") {
            return (
              <GameAICellStyle
                key={index}
                isWinningCell={game.winningCombo?.includes(index) || false}
              >
                <IconX className="markedItem" />
              </GameAICellStyle>
            );
          }

          if (cellItem === "o") {
            return (
              <GameAICellStyle
                key={index}
                isWinningCell={game.winningCombo?.includes(index) || false}
              >
                <IconO className="markedItem" />
              </GameAICellStyle>
            );
          }

          return (
            <GameAICellStyle
              key={index}
              onClick={() => onHumanMove(index)}
              disableHover={!canHumanPlay}
              isDisabled={!canHumanPlay}
              disabled={!canHumanPlay}
            >
              {game.turn === "x" ? (
                <XIconOutline className="outlineIconX" />
              ) : (
                <OIconOutline className="outlineIconO" />
              )}
            </GameAICellStyle>
          );
        })}
      </GameBoardStyle>

      <Player
        player={game.player2}
        isPlayerActive={game.player2.choice === game.turn}
      />
    </Container>
  );
}

export default GameAI;
