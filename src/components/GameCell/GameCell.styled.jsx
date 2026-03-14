import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) =>
    props.isWinningCell
      ? props.theme.colors.yellow
      : props.theme.colors.secondary};

  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  border: none;
  border-radius: 2.5rem;
  box-shadow: 5px 10px ${(props) => props.theme.colors.gray};

  width: 10rem;
  height: 10rem;
  padding: 3rem;

  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }

  .markedItem path {
    fill: ${(props) => props.theme.colors.primary};
  }

  .outlineIconX path,
  .outlineIconO path {
    fill: transparent;
    stroke: transparent;
    stroke-width: 0;
  }

  &:hover .outlineIconX path {
    stroke: ${(props) => props.theme.colors.primary};
    stroke-width: 12;
  }

  &:hover .outlineIconO path {
    fill: ${(props) => props.theme.colors.primary};
  }

  @media (max-width: 500px) {
    width: 9.8rem;
    height: 9.8rem;
    padding: 2.3rem;
    border-radius: 2rem;
  }

  @media (max-width: 400px) {
    width: 8.9rem;
    height: 8.9rem;
    padding: 2rem;
    border-radius: 1.8rem;
    box-shadow: 3px 7px ${(props) => props.theme.colors.gray};
  }

  @media (max-width: 360px) {
    width: 7.9rem;
    height: 7.9rem;
    padding: 1.6rem;
    border-radius: 1.5rem;
  }
`;
