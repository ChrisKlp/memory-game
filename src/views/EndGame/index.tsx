/* eslint-disable no-debugger */
import ScoreList from 'components/ScoreList';
import Text from 'components/Text';
import { TGameState } from 'hooks/useGameState';
import { useMemo } from 'react';
import * as S from 'views/EndGame/style';

export type TScores = {
  isWinner: boolean;
  player: number;
  points: number;
}[];

export type TSingleScore = {
  time: string;
  moves: number;
};

type Props = {
  gameState: TGameState;
  handleNewGame: () => void;
  handleRestart: () => void;
};

function EndGame({ gameState, handleNewGame, handleRestart }: Props) {
  const { isMultiPlayer, points, moves } = gameState;

  const singleScore: TSingleScore = {
    time: '1:52',
    moves,
  };

  const scores = useMemo<TScores>(() => {
    const topScore = Math.max(...points);

    return [...points]
      .map((point, i) => {
        const isWinner = point === topScore;
        return {
          player: i + 1,
          points: point,
          isWinner,
        };
      })
      .sort((a, b) => b.points - a.points);
  }, [points]);

  const getMultiPlayerHeading = () => {
    const winners = scores.filter((i) => i.isWinner);
    if (winners.length > 1) return 'It’s a tie!';
    return `Player ${winners[0].player} Wins!`;
  };

  const getHeading = () => {
    if (isMultiPlayer) return getMultiPlayerHeading();
    return 'You did it!';
  };

  const infoText = isMultiPlayer
    ? 'Game over! Here are the results…'
    : 'Game over! Here’s how you got on…';

  return (
    <S.Wrapper>
      <S.Header>
        <Text as="h1" size="h1" color="dark">
          {getHeading()}
        </Text>
        <Text>{infoText}</Text>
      </S.Header>
      <ScoreList
        scores={scores}
        singleScore={singleScore}
        isMultiPlayer={isMultiPlayer}
      />
      <S.ButtonsGroup>
        <S.StyledBigButton onClick={handleRestart} big>
          Restart
        </S.StyledBigButton>
        <S.StyledBigButton onClick={handleNewGame} big secondary>
          Setup New Game
        </S.StyledBigButton>
      </S.ButtonsGroup>
    </S.Wrapper>
  );
}

export default EndGame;
