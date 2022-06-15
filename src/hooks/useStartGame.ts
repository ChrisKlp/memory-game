import { TGameOptions, TGameSetup, TimerStates } from 'models';
import { useState } from 'react';
import useTimer from './useTimer';

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
  const { clock, setTimerState } = useTimer();

  const handleStartGameSelect = (name: string, option: string) => {
    setGameSetup({
      ...gameSetup,
      [name]: option,
    });
  };

  const handleStartGameClick = () => {
    setIsGameStarted(true);
    setTimerState(TimerStates.reset);
    if (gameSetup.players === '1') setTimerState(TimerStates.start);
  };

  const handleNewGame = () => {
    setIsGameStarted(false);
    setGameSetup(initialState);
    setTimerState(TimerStates.stop);
    setTimerState(TimerStates.reset);
  };

  return {
    clock,
    setTimerState,
    gameSetup,
    handleStartGameSelect,
    isGameStarted,
    handleStartGameClick,
    handleNewGame,
  };
};

export default useStartGame;
