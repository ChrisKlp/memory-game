import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { TGameSetup, TGameState } from 'models';

const initialState = () => ({
  isStarted: false,
  isMulti: false,
  isEnded: false,
  sessionId: Date.now(),
  gameTime: '',
  setup: {} as TGameSetup,
});

const useGameState = create<TGameState>()(
  devtools((set) => ({
    ...initialState(),

    startGame: (gameSetup: TGameSetup) =>
      set(
        {
          isStarted: true,
          isMulti: gameSetup.players > 1,
          setup: gameSetup,
        },
        false,
        'Start Game'
      ),

    endGame: () => set({ isEnded: true }, false, 'End Game'),

    restartGame: () =>
      set({ isEnded: false, sessionId: Date.now() }, false, 'Restart Game'),

    startNewGame: () => set(initialState(), true, 'Start New Game'),

    setGameTime: (time: string) =>
      set({ gameTime: time }, false, 'Set Game Time'),
  }))
);

export default useGameState;
