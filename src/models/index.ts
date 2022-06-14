export enum Themes {
  numbers = 'Numbers',
  icons = 'Icons',
}

export enum Sizes {
  small = '4x4',
  big = '6x6',
}

export enum CardStates {
  active = 'active',
  hidden = 'hidden',
  revealed = 'revealed',
}

export type TGameOptions = {
  name: string;
  label: string;
  options: string[] | Themes[] | Sizes[];
}[];

export type TGameSetup = {
  players: '1' | '2' | '3' | '4';
  size: '6x6' | '4x4';
  theme: 'Numbers' | 'Icons';
};

export type TGameState = {
  players: number;
  points: number[];
  activePlayer: number;
  moves: number;
  isMultiPlayer: boolean;
  isGameOver: boolean;
};

export type TGameCard = {
  id: number;
  value: number;
  icon: string;
  state: CardStates;
};

export type TGameBoardState = {
  cards: TGameCard[];
  activeCards: TGameCard[];
};
