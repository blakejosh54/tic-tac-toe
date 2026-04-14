import styled from "styled-components";

export const ButtonWrapper = styled.button`
  color: ${(p) => p.theme.colors.primary};
  background-color: ${(p) => (p.color ? p.color : p.theme.colors.secondary)};

  padding: 18px 26px;
  width: 90%;
  max-width: 340px;

  font-size: 1.3rem;

  margin: 10px auto;

  border: none;
  border-radius: 12px;
  font-weight: 500;
  transition: 0.2s;

  &:hover {
    box-shadow: 0px 0px 10px ${(p) => p.theme.colors.purple};
    cursor: pointer;
  }

  @media (max-width: 392px) {
    width: 92%;
    max-width: 300px;
    font-size: 1.25rem;
  }

  @media (max-width: 360px) {
    width: 94%;
    font-size: 1.2rem;
  }
`;
