import { TGameOptions } from 'gameOptions';
import { useState } from 'react';

export type TGameSetup = {
  players: '1' | '2' | '3' | '4';
  size: '6x6' | '4x4';
  theme: 'Numbers' | 'Icons';
};

const useGame = (gameOptions: TGameOptions) => {
  const [gameSetup, setGameSetup] = useState(
    gameOptions.reduce(
      (result, { name, options }) => ({
        ...result,
        [name]: options[0],
      }),
      {} as TGameSetup
    )
  );
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

  return {
    gameSetup,
    handleStartGameSelect,
    isGameStarted,
    handleStartGameClick,
  };
};

export default useGame;
