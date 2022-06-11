import { useState } from 'react';
import * as S from 'views/MainGame/style';

export type TGameStats = {
  players: number;
  points: number[] | null;
  activePlayer: number;
  moves: number;
};

type Props = {
  players: number;
};

function MainGame({ players }: Props) {
  const [gameStats, setGameStats] = useState<TGameStats>({
    players,
    points: players > 1 ? new Array(players).fill(0) : null,
    activePlayer: 2,
    moves: 10,
  });
  return (
    <S.Container>
      <S.StyledHeader />
      <S.StyledFooter gameStats={gameStats} />
    </S.Container>
  );
}

export default MainGame;
