import gameOptions from 'gameOptions';
import { Sizes, TGameSetup, TGameState, Themes } from 'models';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

const initialSetup = () =>
  gameOptions.reduce(
    (result, { name, options }) => ({
      ...result,
      [name]: options[0],
    }),
    {} as TGameSetup
  );

const initialState = () => ({
  isStarted: false,
  isMulti: false,
  isEnded: false,
  sessionId: Date.now(),
  gameTime: '',
  setup: initialSetup(),
});

const useGameState = create<TGameState>()(
  devtools((set) => ({
    ...initialState(),

    startGame: () =>
      set((state) => ({ isStarted: true, isMulti: state.setup.players > 1 })),

    endGame: () => set({ isEnded: true }),

    restartGame: () => set({ isEnded: false, sessionId: Date.now() }),

    startNewSetup: () => set(initialState(), true),

    updateSetup: (name: keyof TGameSetup, option: number | Sizes | Themes) =>
      set((state) => ({ setup: { ...state.setup, [name]: option } })),

    setGameTime: (time: string) => set({ gameTime: time }),
  }))
);

export default useGameState;
