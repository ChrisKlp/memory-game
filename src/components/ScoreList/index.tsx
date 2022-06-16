import * as S from 'components/ScoreList/style';
import Text from 'components/Text';
import { TScores } from 'models';

type Props = {
  clock: string;
  scores: TScores;
  isMulti: boolean;
};

type SingleScoreListProps = {
  scores: TScores;
  clock: string;
};

function SingleScoreList({ scores, clock }: SingleScoreListProps) {
  return (
    <>
      <S.ScoreItem>
        <Text as="span" size="medium">
          Time Elapsed
        </Text>
        <Text as="span" size="h2" color="dark">
          {clock}
        </Text>
      </S.ScoreItem>
      <S.ScoreItem>
        <Text as="span" size="medium">
          Moves Taken
        </Text>
        <Text as="span" size="h2" color="dark">
          {`${scores[0].moves} Moves`}
        </Text>
      </S.ScoreItem>
    </>
  );
}

function MultiScoreList({ scores }: { scores: TScores }) {
  return (
    <>
      {scores.map(({ isWinner, name, pairs }) => (
        <S.ScoreItem key={name} dark={isWinner}>
          <Text size="medium">
            Player {name[1]} {isWinner && '(Winner!)'}
          </Text>
          <Text size="h2" color="dark">
            {`${pairs} Pairs`}
          </Text>
        </S.ScoreItem>
      ))}
    </>
  );
}

function ScoreList({ scores, clock, isMulti }: Props) {
  return (
    <S.Wrapper>
      {isMulti ? (
        <MultiScoreList scores={scores} />
      ) : (
        <SingleScoreList scores={scores} clock={clock} />
      )}
    </S.Wrapper>
  );
}

export default ScoreList;
