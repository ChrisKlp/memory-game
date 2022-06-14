import { useCallback, useReducer } from 'react';
import { TGameSetup } from './useStartGame';

export type TGameState = {
  players: number;
  points: number[];
  activePlayer: number;
  moves: number;
  isMultiPlayer: boolean;
  isGameOver: boolean;
};

type TAction =
  | { type: 'INCREASE_MOVES' }
  | { type: 'RESET_MOVES' }
  | { type: 'ADD_POINT' }
  | { type: 'CHANGE_PLAYER' }
  | { type: 'SET_GAME_OVER' };

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
    case 'ADD_POINT': {
      return {
        ...state,
        points: state.points.map((point, i) =>
          state.activePlayer === i + 1 ? point + 1 : point
        ),
      };
    }
    case 'CHANGE_PLAYER': {
      return {
        ...state,
        activePlayer:
          state.activePlayer === state.players ? 1 : state.activePlayer + 1,
      };
    }
    case 'SET_GAME_OVER': {
      return {
        ...state,
        isGameOver: true,
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

  const changePlayer = useCallback(() => {
    dispatch({ type: 'CHANGE_PLAYER' });
  }, [dispatch]);

  const setGameOver = useCallback(() => {
    dispatch({ type: 'SET_GAME_OVER' });
  }, [dispatch]);

  return {
    increaseMoves,
    addPoint,
    resetMoves,
    changePlayer,
    setGameOver,
    gameState,
  };
};

export default useGameState;
