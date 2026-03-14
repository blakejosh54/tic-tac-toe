import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkForWinner } from "../../utils/GameUtils";
import IconO from "../../assets/icon-o.svg?react";
import IconX from "../../assets/icon-x.svg?react";
import XIconOutline from "../../assets/icon-x-outline.svg?react";
import OIconOutline from "../../assets/icon-o-outline.svg?react";
import { ModalContext } from "../../contexts/ModalContext";
import RoundOverModal from "../Modal/RoundOverModals/RoundOverModal";
import { SfxContext } from "../../contexts/SfxContext";

function GameCell({ cellItem, index }) {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  const { hoverSfx, clickSfx, winSfx, completedSfx } = useContext(SfxContext);

  const cellClickHandler = () => {
    clickSfx();
    const updatedBoard = [...game.board];
    updatedBoard[index] = game.turn;

    updateBoard(index);

    const result = checkForWinner(updatedBoard);
    if (result) {
      roundComplete(result);
      if (result !== "draw") {
        winSfx();
      } else {
        completedSfx();
      }
      handleModal(<RoundOverModal />);
    }
  };

  if (cellItem === "x") {
    return (
      <CellStyle>
        <IconX className="markedItem" />
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle>
        <IconO className="markedItem" />
      </CellStyle>
    );
  }

  return (
    <CellStyle onClick={cellClickHandler} onMouseEnter={() => hoverSfx()}>
      {game.turn === "x" ? (
        <XIconOutline className="outlineIconX" />
      ) : (
        <OIconOutline className="outlineIconO" />
      )}
    </CellStyle>
  );
}

export default GameCell;
