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

export enum TimerStates {
  start,
  stop,
  reset,
}

export type TGameOptions = {
  name: string;
  label: string;
  options: number[] | Themes[] | Sizes[];
}[];

export type TGameSetup = {
  players: 1 | 2 | 3 | 4;
  size: Sizes;
  theme: Themes;
};

export type TPlayerState = {
  name: string;
  pairs: number;
  moves: number;
  isActive: boolean;
};

export type TPlayersState = TPlayerState[];

export type TGameState = {
  setup: TGameSetup;
  isStarted: boolean;
  isMulti: boolean;
  isEnded: boolean;
  sessionId: number;
  gameTime: string;
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

export type TTimer = {
  clock: string;
  isStarted: boolean;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
};

export type TScores = {
  isWinner: boolean;
  name: string;
  pairs: number;
  moves: number;
}[];
