import { useCallback, useReducer } from 'react';
import { Sizes, TGameOptions, TGameSetup, TGameState, Themes } from 'models';

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
  gameTime: '',
  setup: initialSetup(gameOptions),
});

type TAction =
  | { type: 'SET_IS_STARTED'; payload: boolean }
  | { type: 'SET_IS_MULTI' }
  | { type: 'SET_IS_ENDED'; payload: boolean }
  | { type: 'SET_GAME_TIME'; payload: string }
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
    case 'SET_GAME_TIME': {
      return {
        ...state,
        gameTime: action.payload,
      };
    }
    case 'RESET_SETUP': {
      return initialState(action.payload);
    }
    case 'RESET_SESSION': {
      return { ...state, sessionId: Date.now(), gameTime: '' };
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

  const startGame = useCallback(() => {
    dispatch({ type: 'SET_IS_STARTED', payload: true });
    dispatch({ type: 'SET_IS_MULTI' });
  }, [dispatch]);

  const endGame = useCallback(() => {
    dispatch({ type: 'SET_IS_ENDED', payload: true });
  }, [dispatch]);

  const restartGame = useCallback(() => {
    dispatch({ type: 'SET_IS_ENDED', payload: false });
    dispatch({ type: 'RESET_SESSION' });
  }, [dispatch]);

  const startNewSetup = useCallback(() => {
    dispatch({ type: 'RESET_SETUP', payload: gameOptions });
  }, [dispatch, gameOptions]);

  const updateSetup = useCallback(
    (name: string, option: number | Themes | Sizes) => {
      dispatch({ type: 'UPDATE_SETUP', payload: { name, option } });
    },
    [dispatch]
  );

  const setGameTime = useCallback(
    (time: string) => {
      dispatch({ type: 'SET_GAME_TIME', payload: time });
    },
    [dispatch]
  );

  return {
    endGame,
    gameState,
    restartGame,
    startGame,
    startNewSetup,
    updateSetup,
    setGameTime,
  };
};

export default useGameState;
