import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from "./Header.styled";
import Logo from "../../assets/tic-tac-toe.svg?react";
import { useNavigate } from "react-router-dom";

function Header() {
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
      <span
        onClick={() => {
          toggleTheme();
        }}
      >
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </span>
      {/* <button onClick={() => toggleTheme()}>Toggle Theme</button> */}
    </HeaderWrapper>
  );
}

export default Header;
