import React, { useContext } from "react";
import { Container, Title, SubTitle } from "../../styles/General.styled";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <Container columnBased>
      <Title>TicTacToe</Title>
      <SubTitle>Play with your friends, higher score wins!</SubTitle>

      <Button
        onClick={() => {
          navigate("/game-on");
        }}
      >
        Play Now
      </Button>
    </Container>
  );
}

export default Home;
