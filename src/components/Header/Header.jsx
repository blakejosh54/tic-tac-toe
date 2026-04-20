import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from "./Header.styled";
import Logo from "../../assets/tic-tac-toe.svg?react";
import { useNavigate } from "react-router-dom";

function Header({ children }) {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <Logo
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      />

      <div className="header-center">{children}</div>

      <span
        onClick={() => {
          toggleTheme();
        }}
      >
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </span>
    </HeaderWrapper>
  );
}

export default Header;
