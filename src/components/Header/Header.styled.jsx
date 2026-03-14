import styled from "styled-components";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  padding: 2rem;
  align-items: center;

  .logo {
    height: 4rem;
    fill: ${(props) => props.theme.colors.Text};
    cursor: pointer;
  }
`;

export const LightModeIcon = styled(MdOutlineLightMode)`
  color: ${(props) => props.theme.colors.Text};
  font-size: 2rem;
  cursor: pointer;
`;

export const DarkModeIcon = styled(MdOutlineDarkMode)`
  color: ${(props) => props.theme.colors.Text};
  font-size: 2rem;
  cursor: pointer;
`;
