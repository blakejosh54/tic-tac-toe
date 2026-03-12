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

function GameCell({ cellItem, index }) {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const {handleModal} = useContext(ModalContext)

  const cellClickHandler = () => {
    updateBoard(index);
    const result = checkForWinner(game.board) 
    if(result) {
      roundComplete()
      handleModal(<RoundOverModal />)
    }
  };

  if (cellItem === "x") {
    return (
      <CellStyle>
        <IconX className="markedItem"/>
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle>
        <IconO className="markedItem"/>
      </CellStyle>
    );
  }

  return (
    <CellStyle onClick={cellClickHandler}>
      {game.turn === "x" ? 
      <XIconOutline className="outlineIconX"/> :
      <OIconOutline className="outlineIconO"/>}
    </CellStyle>
  );
}

export default GameCell;
