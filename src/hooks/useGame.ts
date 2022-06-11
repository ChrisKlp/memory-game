import { Sizes } from 'gameOptions';
import { useState } from 'react';
import { TGameSetup } from './useStartGame';

export enum GameCardStatuses {
  active = 'active',
  hidden = 'hidden',
  revealed = 'revealed',
}

export type TGameBoard = {
  id: number;
  value: number;
  status: GameCardStatuses;
}[];

export type TGameStats = {
  points: number[] | null;
  activePlayer: number;
  moves: number;
};

const createGameBoard = (amount: number): TGameBoard => {
  return new Array(amount).fill(null).map((_, i) => ({
    id: i,
    value: i,
    status: GameCardStatuses.hidden,
  }));
};

const useGame = (gameSetup: TGameSetup) => {
  const players = parseInt(gameSetup.players, 10);

  const [gameBoard, setGameBoard] = useState<TGameBoard>(
    createGameBoard(gameSetup.size === Sizes.big ? 36 : 16)
  );
  const [gameStats, setGameStats] = useState<TGameStats>({
    points: players > 1 ? new Array(players).fill(0) : null,
    activePlayer: 2,
    moves: 10,
  });

  const isMultiPlayer = players > 1;

  const handleCardClick = (id: number): void => {
    setGameBoard(
      gameBoard.map((item) =>
        item.id === id
          ? {
              ...item,
              status:
                item.status === GameCardStatuses.active
                  ? GameCardStatuses.hidden
                  : GameCardStatuses.active,
            }
          : item
      )
    );
  };

  return { gameBoard, handleCardClick, isMultiPlayer, gameStats };
};

export default useGame;
