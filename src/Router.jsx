import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import GameAI from "./pages/GameAI/GameAI";
import Header from "./components/Header/Header";
import { ModalContextProvider } from "./contexts/ModalContext";
import { GameContext } from "./contexts/GameContext";
import Button from "./components/Button/Button";

function AppRoutes() {
  const { undoMove, game } = useContext(GameContext);
  const location = useLocation();

  const isGamePage =
    location.pathname === "/game-on" || location.pathname === "/game-ai";

  return (
    <>
      <Header>
        {isGamePage && (
          <Button
            className="mobile-undo"
            onClick={undoMove}
            disabled={game.history.length === 0}
          >
            Undo
          </Button>
        )}
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game-on" element={<Game />} />
        <Route path="/game-ai" element={<GameAI />} />
      </Routes>
    </>
  );
}

function Router() {
  return (
    <BrowserRouter>
      <ModalContextProvider>
        <AppRoutes />
      </ModalContextProvider>
    </BrowserRouter>
  );
}

export default Router;
