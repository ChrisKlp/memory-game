/* eslint-disable no-debugger */
import ScoreList from 'components/ScoreList';
import Text from 'components/Text';
import { TScores } from 'models';
import * as S from 'views/EndGameView/style';

type Props = {
  heading: string;
  infoText: string;
  scores: TScores;
  isMulti: boolean;
  gameTime: string;
  handleRestart: () => void;
  handleNewGame: () => void;
};

function EndGameView({
  heading,
  infoText,
  scores,
  isMulti,
  gameTime,
  handleRestart,
  handleNewGame,
}: Props) {
  return (
    <S.Wrapper>
      <S.Header>
        <Text as="h1" size="h1" color="dark">
          {heading}
        </Text>
        <Text>{infoText}</Text>
      </S.Header>
      <ScoreList scores={scores} isMulti={isMulti} clock={gameTime} />
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

export default EndGameView;
