import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.columnBased ? "column" : "row")};
  height: 80vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0 2rem;
  text-align: center;

  ${(props) => props.theme.media.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: ${(props) =>
    props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
  font-size: 4rem;
  font-family: "Pacifico", cursive;
  background-color: transparent;
  text-align: center;
  line-height: 1.15;
  word-break: break-word;

  ${(props) => props.theme.media.mobile} {
    font-size: 3.5rem;
  }
`;

export const SubTitle = styled.h2`
  color: ${(props) =>
    props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
  font-size: 1.5rem;
  font-weight: 200;
  background: transparent;
  text-align: center;
  line-height: 1.4;

  ${(props) => props.theme.media.mobile} {
    font-size: 1.7rem;
  }
`;

export const Text = styled.p`
  color: ${(props) =>
    props.primary ? props.theme.colors.secondary : props.theme.colors.Text};
  font-size: 1.2rem;
  background: transparent;
  text-align: center;

  ${(props) => props.theme.media.mobile} {
    font-size: 1rem;
  }
`;
