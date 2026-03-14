import React from "react";
import { ThemeContextProvider } from "./ThemeContext";
import { GameContextProvider } from "./GameContext";
import { ModalContextProvider } from "./ModalContext";
import { SfxContextProvider } from "./SfxContext";

function Provider({ children }) {
  return (
    <ThemeContextProvider>
      <GameContextProvider>
        <SfxContextProvider>{children}</SfxContextProvider>
      </GameContextProvider>
    </ThemeContextProvider>
  );
}

export default Provider;
