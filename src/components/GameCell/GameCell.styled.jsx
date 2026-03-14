import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) => props.isWinningCell ? props.theme.colors.yellow : props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  border: none;
  border-radius: 2.5rem;
  box-shadow: 5px 10px ${(props) => props.theme.colors.gray};
  width: 10rem;
  height: 10rem;
  cursor: pointer;
  padding: 3rem;

  svg {
    width: 100%;
    height: 100%;
  }

  .markedItem {
    path {
      fill: ${(props) => props.theme.colors.primary};
    }
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
`;
