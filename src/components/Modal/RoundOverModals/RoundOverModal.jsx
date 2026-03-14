import React, { useContext } from "react";
import { Title, SubTitle } from "../../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal.styled";
import Button from "../../Button/Button";
import { GameContext } from "../../../contexts/GameContext";
import { ModalContext } from "../../../contexts/ModalContext";
import { SfxContext } from "../../../contexts/SfxContext";
import { useNavigate } from "react-router-dom";

function RoundOverModal() {
  const { resetBoard, game, restartGame } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  const { hoverSfx, clickSfx, completedSfx } = useContext(SfxContext);
  const navigate = useNavigate();

  return (
    <>
      <ModalHeader>
        <Title primary>
          {game.roundWinner && game.roundWinner !== "Draw"
            ? `${game.roundWinner} Wins Round`
            : "Round Drawn"}
        </Title>
      </ModalHeader>

      <ModalBody>
        <SubTitle primary>Choices will be switched now.</SubTitle>
        <SubTitle primary>
          {game.player1.name}: {game.player1.score}
        </SubTitle>
        <SubTitle primary>
          {game.player2.name}: {game.player2.score}
        </SubTitle>
      </ModalBody>

      <ModalFooter>
        <Button
          color="#f9c811"
          onClick={() => {
            clickSfx();
            handleModal();
            resetBoard();
          }}
          onMouseEnter={() => hoverSfx()}
        >
          Continue
        </Button>
        <Button
          color="#8437f9"
          onClick={() => {
            completedSfx();
            restartGame();
            handleModal();
            navigate("/");
          }}
          onMouseEnter={() => hoverSfx()}
        >
          Restart
        </Button>
      </ModalFooter>
    </>
  );
}

export default RoundOverModal;
