import { Status } from 'App';
import GameCard from 'components/GameCard';
import { TGameConfig } from 'hooks/useStartGame';
import { useState } from 'react';
import * as S from 'views/MainGame/style';

export type TGameStats = {
  players: number;
  points: number[] | null;
  activePlayer: number;
  moves: number;
};

type Props = {
  gameConfig: TGameConfig;
};

type TGameBoard = {
  id: number;
  value: number;
  status: Status;
}[];

const createGameBoard = (amount: number): TGameBoard => {
  return new Array(amount).fill(null).map((_, i) => ({
    id: i,
    value: i,
    status: Status.hidden,
  }));
};

function MainGame({ gameConfig }: Props) {
  const players = parseInt(gameConfig.players, 10);
  const [gameStats, setGameStats] = useState<TGameStats>({
    players,
    points: players > 1 ? new Array(players).fill(0) : null,
    activePlayer: 2,
    moves: 10,
  });
  const { size } = gameConfig;

  const [gameBoard, setGameBoard] = useState(
    createGameBoard(size === '6x6' ? 36 : 16)
  );

  const handleCardClick = (id: number): void => {
    setGameBoard(
      gameBoard.map((item) =>
        item.id === id
          ? {
              ...item,
              status:
                item.status === Status.active ? Status.hidden : Status.active,
            }
          : item
      )
    );
  };

  return (
    <S.Container>
      <S.StyledHeader />
      <S.Board small={size === '4x4'}>
        {gameBoard.map(({ id, status, value }) => (
          <GameCard
            key={id}
            value={value.toString()}
            status={status}
            big={size === '4x4'}
            onClick={() => handleCardClick(id)}
          />
        ))}
      </S.Board>
      <S.StyledFooter gameStats={gameStats} />
    </S.Container>
  );
}

export default MainGame;
