import { useCallback, useReducer } from 'react';
import { TGameState, TGameSetup } from 'models';

type TAction =
  | { type: 'INCREASE_MOVES' }
  | { type: 'RESET_MOVES' }
  | { type: 'RESET_POINTS' }
  | { type: 'ADD_POINT' }
  | { type: 'CHANGE_PLAYER'; payload: boolean }
  | { type: 'SET_GAME_OVER'; payload: boolean };

const reducer = (state: TGameState, action: TAction) => {
  switch (action.type) {
    case 'INCREASE_MOVES': {
      return {
        ...state,
        moves: state.moves + 1,
      };
    }
    case 'RESET_MOVES': {
      return {
        ...state,
        moves: 0,
      };
    }
    case 'RESET_POINTS': {
      return {
        ...state,
        points: Array(state.players).fill(0),
      };
    }
    case 'ADD_POINT': {
      return {
        ...state,
        points: state.points.map((point, i) =>
          state.activePlayer === i + 1 ? point + 1 : point
        ),
      };
    }
    case 'CHANGE_PLAYER': {
      const activePlayer = () => {
        if (action.payload === true) {
          return 1;
        }
        return state.activePlayer === state.players
          ? 1
          : state.activePlayer + 1;
      };

      return {
        ...state,
        activePlayer: activePlayer(),
      };
    }
    case 'SET_GAME_OVER': {
      return {
        ...state,
        isGameOver: action.payload,
      };
    }
    default:
      return state;
  }
};

const useGameState = (gameSetup: TGameSetup) => {
  const players = parseInt(gameSetup.players, 10);

  const [gameState, dispatch] = useReducer(reducer, {
    players,
    isMultiPlayer: players > 1,
    points: Array(players).fill(0),
    activePlayer: 1,
    moves: 0,
    isGameOver: false,
  });

  const increaseMoves = useCallback(() => {
    dispatch({ type: 'INCREASE_MOVES' });
  }, [dispatch]);

  const addPoint = useCallback(() => {
    dispatch({ type: 'ADD_POINT' });
  }, [dispatch]);

  const resetMoves = useCallback(() => {
    dispatch({ type: 'RESET_MOVES' });
  }, [dispatch]);

  const resetPoints = useCallback(() => {
    dispatch({ type: 'RESET_POINTS' });
  }, [dispatch]);

  const changePlayer = useCallback(
    (isGameReset = false) => {
      dispatch({ type: 'CHANGE_PLAYER', payload: isGameReset });
    },
    [dispatch]
  );

  const setGameOver = useCallback(
    (isGameOver: boolean) => {
      dispatch({ type: 'SET_GAME_OVER', payload: isGameOver });
    },
    [dispatch]
  );

  return {
    increaseMoves,
    addPoint,
    resetMoves,
    resetPoints,
    changePlayer,
    setGameOver,
    gameState,
  };
};

export default useGameState;
