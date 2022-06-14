import * as S from 'components/ScoreList/style';
import Text from 'components/Text';
import { TScores, TSingleScore } from 'views/EndGame';

type Props = {
  scores?: TScores;
  singleScore?: TSingleScore;
  isMultiPlayer: boolean;
};

function SingleScoreList({ singleScore }: { singleScore: TSingleScore }) {
  return (
    <>
      {Object.entries(singleScore).map(([key, value]) => (
        <S.ScoreItem key={key}>
          <Text as="span" size="medium">
            {key === 'time' ? 'Time Elapsed' : 'Moves Taken'}
          </Text>
          <Text as="span" size="h2" color="dark">
            {key === 'moves' ? `${value} Moves` : value}
          </Text>
        </S.ScoreItem>
      ))}
    </>
  );
}

function MultiScoreList({ scores }: { scores: TScores }) {
  return (
    <>
      {scores.map(({ isWinner, player, points }) => (
        <S.ScoreItem key={player} dark={isWinner}>
          <Text size="medium">
            Player {isWinner ? `${player} (Winner!)` : player}
          </Text>
          <Text size="h2" color="dark">
            {`${points} Pairs`}
          </Text>
        </S.ScoreItem>
      ))}
    </>
  );
}

function ScoreList({ scores, singleScore, isMultiPlayer }: Props) {
  return (
    <S.Wrapper>
      {isMultiPlayer && scores ? (
        <MultiScoreList scores={scores} />
      ) : (
        singleScore && <SingleScoreList singleScore={singleScore} />
      )}
    </S.Wrapper>
  );
}

export default ScoreList;
