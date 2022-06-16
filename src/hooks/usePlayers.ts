import { TPlayersState } from 'models';
import { useCallback, useReducer } from 'react';

type TAction =
  | { type: 'CHANGE_PLAYER' }
  | { type: 'ADD_MOVE' }
  | { type: 'ADD_POINT' }
  | { type: 'RESET'; payload: number };

const createInitialState = (length: number) =>
  new Array(length).fill(null).map((_, i) => ({
    name: `P${i + 1}`,
    pairs: 0,
    moves: 0,
    isActive: i === 0,
  }));

const reducer = (state: TPlayersState, action: TAction) => {
  switch (action.type) {
    case 'ADD_MOVE': {
      return state.map((player) =>
        player.isActive
          ? {
              ...player,
              moves: player.moves + 1,
            }
          : player
      );
    }
    case 'ADD_POINT': {
      return state.map((player) =>
        player.isActive
          ? {
              ...player,
              pairs: player.pairs + 1,
            }
          : player
      );
    }
    case 'CHANGE_PLAYER': {
      const lastActiveIdx = state.findIndex((player) => player.isActive);
      return state.map((player, i) => ({
        ...player,
        isActive:
          i === (lastActiveIdx === state.length - 1 ? 0 : lastActiveIdx + 1),
      }));
    }
    case 'RESET': {
      return createInitialState(action.payload);
    }
    default:
      return state;
  }
};

const usePlayers = (playersNumber: number) => {
  const [players, dispatch] = useReducer(
    reducer,
    createInitialState(playersNumber)
  );

  const addMove = useCallback(() => {
    dispatch({ type: 'ADD_MOVE' });
  }, [dispatch]);

  const addPoint = useCallback(() => {
    dispatch({ type: 'ADD_POINT' });
  }, [dispatch]);

  const resetPlayers = useCallback(() => {
    dispatch({ type: 'RESET', payload: playersNumber });
  }, [dispatch, playersNumber]);

  const changePlayer = useCallback(() => {
    dispatch({ type: 'CHANGE_PLAYER' });
  }, [dispatch]);

  return {
    players,
    addMove,
    addPoint,
    changePlayer,
    resetPlayers,
  };
};

export default usePlayers;
