/* eslint-disable no-debugger */
import { useMemo } from 'react';
import ScoreList from 'components/ScoreList';
import Text from 'components/Text';
import { TGameState, TPlayersState, TScores } from 'models';
import * as S from 'views/EndGameView/style';

type Props = {
  clock: string;
  players: TPlayersState;
  gameState: TGameState;
  handleNewGame: () => void;
  handleRestart: () => void;
};

function EndGameView({
  clock,
  players,
  gameState: { isMulti },
  handleNewGame,
  handleRestart,
}: Props) {
  const scores = useMemo<TScores>(() => {
    const topScore = [...players].sort((a, b) => b.pairs - a.pairs)[0].pairs;

    return [...players]
      .map(({ name, moves, pairs }) => {
        const isWinner = pairs === topScore;
        return {
          name,
          pairs,
          moves,
          isWinner,
        };
      })
      .sort((a, b) => b.pairs - a.pairs);
  }, [players]);

  const getMultiPlayerHeading = () => {
    const winners = scores.filter((i) => i.isWinner);
    if (winners.length > 1) return 'It’s a tie!';
    return `Player ${winners[0].name[1]} Wins!`;
  };

  const getHeading = () => {
    if (isMulti) return getMultiPlayerHeading();
    return 'You did it!';
  };

  const infoText = isMulti
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
      <ScoreList scores={scores} isMulti={isMulti} clock={clock} />
      <S.ButtonsGroup>
        <S.StyledBigButton onClick={() => handleRestart()} big>
          Restart
        </S.StyledBigButton>
        <S.StyledBigButton onClick={() => handleNewGame()} big secondary>
          Setup New Game
        </S.StyledBigButton>
      </S.ButtonsGroup>
    </S.Wrapper>
  );
}

export default EndGameView;
