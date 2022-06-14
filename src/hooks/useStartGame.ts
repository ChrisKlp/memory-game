import { TGameOptions } from 'gameOptions';
import { useState } from 'react';

export type TGameSetup = {
  players: '1' | '2' | '3' | '4';
  size: '6x6' | '4x4';
  theme: 'Numbers' | 'Icons';
};

const useStartGame = (gameOptions: TGameOptions) => {
  const initialState = gameOptions.reduce(
    (result, { name, options }) => ({
      ...result,
      [name]: options[0],
    }),
    {} as TGameSetup
  );

  const [gameSetup, setGameSetup] = useState(initialState);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleStartGameSelect = (name: string, option: string) => {
    setGameSetup({
      ...gameSetup,
      [name]: option,
    });
  };

  const handleStartGameClick = () => {
    setIsGameStarted(true);
  };

  const handleNewGame = (callback?: () => void) => {
    setIsGameStarted(false);
    setGameSetup(initialState);
    return callback && callback();
  };

  return {
    gameSetup,
    handleStartGameSelect,
    isGameStarted,
    handleStartGameClick,
    handleNewGame,
  };
};

export default useStartGame;
