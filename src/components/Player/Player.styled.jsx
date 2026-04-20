import styled from "styled-components";

export const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6rem;

  ${(props) => props.theme.media.mobile} {
    flex-direction: row;
    gap: 1rem;
    margin: 2rem;
  }

  @media (max-width: 500px) {
    margin: 1.5rem;
  }
`;

export const AvatarWrapper = styled.div`
  div {
    display: flex;
    width: 10rem;
    height: 10rem;
    filter: ${(props) => (props.isPlayerActive ? "" : "grayscale(100%)")};

    ${(props) => props.theme.media.mobile} {
      width: 5.8rem;
      height: 5.8rem;
    }

    @media (max-width: 500px) {
      width: 5;
      height: 5;
    }
  }
`;
