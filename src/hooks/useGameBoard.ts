import { Sizes } from 'gameOptions';
import { useCallback, useReducer } from 'react';

export enum CardStates {
  active = 'active',
  hidden = 'hidden',
  revealed = 'revealed',
}

export type TGameCard = {
  id: number;
  value: number;
  state: CardStates;
};

export type TGameBoardState = {
  cards: TGameCard[];
  activeCards: TGameCard[];
};

type TAction =
  | { type: 'SET_ACTIVE'; payload: number }
  | { type: 'SET_REVEALED' }
  | { type: 'SET_HIDDEN' }
  | { type: 'RESET_ACTIVE_CARDS' };

const setValue = (index: number) => {
  if (index % 2 === 1) {
    if (index > 1) {
      return index - 1 - Math.floor(index / 2);
    }
    return index - 1;
  }

  if (index > 1) {
    return index - Math.floor(index / 2);
  }

  return index;
};

const createGameBoard = (amount: number): TGameCard[] => {
  return Array(amount)
    .fill(null)
    .map((_, i) => ({
      id: i,
      value: setValue(i),
      state: CardStates.hidden,
    }))
    .sort(() => (Math.random() > 0.5 ? 1 : -1));
};

const reducer = (state: TGameBoardState, action: TAction): TGameBoardState => {
  switch (action.type) {
    case 'SET_ACTIVE': {
      const activeCard = state.cards.find((card) => card.id === action.payload);
      return {
        cards: state.cards.map((card) =>
          card.id === action.payload
            ? { ...card, state: CardStates.active }
            : card
        ),
        activeCards: activeCard
          ? [...state.activeCards, activeCard]
          : [...state.activeCards],
      };
    }
    case 'SET_REVEALED': {
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.state === CardStates.active
            ? { ...card, state: CardStates.revealed }
            : card
        ),
      };
    }
    case 'SET_HIDDEN': {
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.state === CardStates.active
            ? { ...card, state: CardStates.hidden }
            : card
        ),
      };
    }
    case 'RESET_ACTIVE_CARDS': {
      return {
        ...state,
        activeCards: [],
      };
    }
    default:
      return state;
  }
};

const useGameBoard = (size: string) => {
  const [gameBoard, dispatch] = useReducer(reducer, {
    cards: createGameBoard(size === Sizes.big ? 36 : 16),
    activeCards: [],
  });

  const setCardActive = useCallback(
    (id: number) => {
      dispatch({ type: 'SET_ACTIVE', payload: id });
    },
    [dispatch]
  );

  const setCardsRevealed = useCallback(() => {
    dispatch({ type: 'SET_REVEALED' });
  }, [dispatch]);

  const setCardsHidden = useCallback(() => {
    dispatch({ type: 'SET_HIDDEN' });
  }, [dispatch]);

  const resetActiveCards = useCallback(() => {
    dispatch({ type: 'RESET_ACTIVE_CARDS' });
  }, [dispatch]);

  return {
    setCardActive,
    setCardsRevealed,
    setCardsHidden,
    resetActiveCards,
    gameBoard,
  };
};

export default useGameBoard;
