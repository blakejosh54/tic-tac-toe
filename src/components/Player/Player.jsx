import React from "react";
import { PlayerWrapper, AvatarWrapper } from "./Player.styled";
import Avatar, { genConfig } from "react-nice-avatar";
import { SubTitle } from "../../styles/General.styled";

function Player({ player, isPlayerActive }) {
  
  return (
    <PlayerWrapper>
      <AvatarWrapper isPlayerActive={isPlayerActive ?? false}>
        <Avatar {...player.avatarConfig} />
      </AvatarWrapper>
      <SubTitle>
        {player.name} ({player.choice.toUpperCase()})
      </SubTitle>
      <SubTitle>{player.score}</SubTitle>
    </PlayerWrapper>
  );
}

export default Player;
