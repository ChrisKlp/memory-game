import { useCallback, useReducer } from 'react';
import { TGameState, TGameSetup, TGameOptions, Sizes, Themes } from 'models';
import useTimer from './useTimer';

const initialSetup = (gameOptions: TGameOptions) =>
  gameOptions.reduce(
    (result, { name, options }) => ({
      ...result,
      [name]: options[0],
    }),
    {} as TGameSetup
  );

const initialState = (gameOptions: TGameOptions) => ({
  isStarted: false,
  isMulti: false,
  isEnded: false,
  sessionId: Date.now(),
  setup: initialSetup(gameOptions),
});

type TAction =
  | { type: 'SET_IS_STARTED'; payload: boolean }
  | { type: 'SET_IS_MULTI' }
  | { type: 'SET_IS_ENDED'; payload: boolean }
  | { type: 'RESET_SETUP'; payload: TGameOptions }
  | { type: 'RESET_SESSION' }
  | {
      type: 'UPDATE_SETUP';
      payload: { name: string; option: number | Themes | Sizes };
    };

const reducer = (state: TGameState, action: TAction) => {
  switch (action.type) {
    case 'SET_IS_STARTED': {
      return {
        ...state,
        isStarted: action.payload,
      };
    }
    case 'SET_IS_ENDED': {
      return {
        ...state,
        isEnded: action.payload,
      };
    }
    case 'SET_IS_MULTI': {
      return {
        ...state,
        isMulti: state.setup.players > 1,
      };
    }
    case 'RESET_SETUP': {
      return initialState(action.payload);
    }
    case 'RESET_SESSION': {
      return { ...state, sessionId: Date.now() };
    }
    case 'UPDATE_SETUP': {
      return {
        ...state,
        setup: {
          ...state.setup,
          [action.payload.name]: action.payload.option,
        },
      };
    }
    default:
      return state;
  }
};

const useGameState = (gameOptions: TGameOptions) => {
  const [gameState, dispatch] = useReducer(reducer, initialState(gameOptions));
  const { clock, startTimer, stopTimer, resetTimer } = useTimer();

  const startGame = useCallback(() => {
    const { players } = gameState.setup;
    dispatch({ type: 'SET_IS_STARTED', payload: true });
    dispatch({ type: 'SET_IS_MULTI' });
    if (players === 1) startTimer();
  }, [dispatch, gameState.setup, startTimer]);

  const endGame = useCallback(() => {
    dispatch({ type: 'SET_IS_ENDED', payload: true });
    if (!gameState.isMulti) stopTimer();
  }, [dispatch, gameState.isMulti, stopTimer]);

  const restartGame = useCallback(() => {
    dispatch({ type: 'SET_IS_ENDED', payload: false });
    dispatch({ type: 'RESET_SESSION' });
    if (!gameState.isMulti) {
      resetTimer();
    }
  }, [dispatch, gameState.isMulti, resetTimer]);

  const startNewSetup = useCallback(() => {
    dispatch({ type: 'RESET_SETUP', payload: gameOptions });
    resetTimer();
    stopTimer();
  }, [dispatch, gameOptions, resetTimer, stopTimer]);

  const updateSetup = useCallback(
    (name: string, option: number | Themes | Sizes) => {
      dispatch({ type: 'UPDATE_SETUP', payload: { name, option } });
    },
    [dispatch]
  );

  return {
    timer: {
      clock,
      startTimer,
      stopTimer,
    },
    endGame,
    gameState,
    restartGame,
    startGame,
    startNewSetup,
    updateSetup,
  };
};

export default useGameState;
