import styled from "styled-components";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 2rem;

  .logo {
    height: 4rem;
    fill: ${(props) => props.theme.colors.Text};
    cursor: pointer;
  }

  .header-center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  .mobile-undo {
    padding: 10px 16px;
    font-size: 1rem;
    width: auto;
    max-width: 140px;
    border-radius: 8px;
  }

  ${(props) => props.theme.media.mobile} {
    padding: 1rem;

    .header-center {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
    }

    .mobile-undo {
      display: block;
      padding: 8px 14px;
      font-size: 0.9rem;
      width: auto;
      max-width: 120px;
      border-radius: 8px;
    }
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
