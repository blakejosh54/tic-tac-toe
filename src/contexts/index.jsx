import React from "react";
import { ThemeContextProvider } from "./ThemeContext";
import { GameContextProvider } from "./GameContext";
import { ModalContextProvider } from "./ModalContext";

function Provider({ children }) {
  return (
    <ThemeContextProvider>
      <GameContextProvider>{children}</GameContextProvider>
    </ThemeContextProvider>
  );
}

export default Provider;
