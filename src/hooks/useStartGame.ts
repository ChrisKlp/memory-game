import { TGameOptions } from 'gameOptions';
import { useState } from 'react';

export type TGameConfig = {
  players: '1' | '2' | '3' | '4';
  size: '6x6' | '4x4';
  theme: 'Numbers' | 'Icons';
};

const useGame = (gameOptions: TGameOptions) => {
  const [gameConfig, setGameConfig] = useState(
    gameOptions.reduce(
      (result, { name, options }) => ({
        ...result,
        [name]: options[0],
      }),
      {} as TGameConfig
    )
  );
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleStartGameSelect = (name: string, option: string) => {
    setGameConfig({
      ...gameConfig,
      [name]: option,
    });
  };

  const handleStartGameClick = () => {
    setIsGameStarted(true);
  };

  return {
    gameConfig,
    handleStartGameSelect,
    isGameStarted,
    handleStartGameClick,
  };
};

export default useGame;
