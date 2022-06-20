/* eslint-disable no-param-reassign */
import { gameIcons } from 'gameOptions';
import { CardStates, TGameBoardStore, TGameCard } from 'models';
import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

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

const createGameCards = (amount: number): TGameCard[] => {
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

const useGameBoard = create<TGameBoardStore>()(
  devtools(
    immer((set, get) => ({
      cards: [] as TGameCard[],
      activeCards: [] as TGameCard[],

      createGameCards: (amount: number) =>
        set(
          { cards: createGameCards(amount), activeCards: [] },
          false,
          'Create Game Cards'
        ),

      setCardActive: (id: number) => {
        const cardIdx = get().cards.findIndex((card) => card.id === id);
        return set((state) => {
          state.cards[cardIdx].state = CardStates.active;
          state.activeCards.push(state.cards[cardIdx]);
        });
      },

      setCardsRevealed: () => {
        set((state) => ({
          cards: state.cards.map((card) =>
            card.state === CardStates.active
              ? { ...card, state: CardStates.revealed }
              : card
          ),
          activeCards: [],
        }));
      },

      setCardsHidden: () => {
        set((state) => ({
          cards: state.cards.map((card) =>
            card.state === CardStates.active
              ? { ...card, state: CardStates.hidden }
              : card
          ),
          activeCards: [],
        }));
      },
    }))
  )
);
export default useGameBoard;
