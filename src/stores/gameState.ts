import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { TGameSetup, TGameState } from 'models';

const useGameState = create<TGameState>()(
  devtools((set) => ({
    isStarted: false,
    isMulti: false,
    isEnded: false,
    sessionId: 0,
    gameTime: '',
    setup: {} as TGameSetup,

    startGame: (gameSetup: TGameSetup) =>
      set(
        {
          isStarted: true,
          isMulti: gameSetup.players > 1,
          setup: gameSetup,
          sessionId: Date.now(),
          gameTime: '',
          isEnded: false,
        },
        false,
        'Start Game'
      ),

    endGame: () => set({ isEnded: true }, false, 'End Game'),

    restartGame: () =>
      set({ isEnded: false, sessionId: Date.now() }, false, 'Restart Game'),

    startNewGame: () => set({ isStarted: false }, false, 'Start New Game'),

    setGameTime: (time: string) =>
      set({ gameTime: time }, false, 'Set Game Time'),
  }))
);

export default useGameState;
