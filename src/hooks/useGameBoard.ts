import { useCallback, useReducer } from 'react';
import {
  CardStates,
  Sizes,
  TGameBoardState,
  TGameCard,
  TGameSetup,
} from 'models';
import { gameIcons } from 'gameOptions';

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

const getRandomIndex = (items: any[]) => {
  return Math.floor(Math.random() * items.length);
};

const generateIcons = (amount: number) => {
  const newGameIcons = [...gameIcons];

  return Array(amount / 2)
    .fill(null)
    .map(() => newGameIcons.splice(getRandomIndex(newGameIcons), 1)[0])
    .flatMap((item) => [item, item]);
};

const createGameBoard = (amount: number): TGameCard[] => {
  const icons = generateIcons(amount);
  return Array(amount)
    .fill(null)
    .map((_, i) => ({
      id: i,
      value: setValue(i),
      icon: icons[i],
      state: CardStates.hidden,
    }))
    .sort(() => (Math.random() > 0.5 ? 1 : -1));
};

type TAction =
  | { type: 'SET_ACTIVE'; payload: number }
  | { type: 'SET_REVEALED' }
  | { type: 'SET_HIDDEN' }
  | { type: 'RESET_ACTIVE_CARDS' }
  | { type: 'RESET_CARDS'; payload: string };

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
    case 'RESET_CARDS': {
      return {
        cards: createGameBoard(action.payload === Sizes.big ? 36 : 16),
        activeCards: [],
      };
    }
    default:
      return state;
  }
};

const useGameBoard = (gameSetup: TGameSetup) => {
  const gameSize = gameSetup.size === Sizes.big ? 36 : 16;

  const [gameBoard, dispatch] = useReducer(reducer, {
    cards: createGameBoard(gameSize),
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

  const resetCards = useCallback(() => {
    dispatch({
      type: 'RESET_CARDS',
      payload: gameSetup.size,
    });
  }, [gameSetup.size]);

  return {
    setCardActive,
    setCardsRevealed,
    setCardsHidden,
    resetActiveCards,
    resetCards,
    gameBoard,
  };
};

export default useGameBoard;
