import * as S from 'components/GameCard/style';
import { CardStates } from 'hooks/useGameBoard';

type Props = {
  value: string;
  state: CardStates;
  big?: boolean;
  onClick: () => void;
};

function GameCard({ value, state, big, onClick }: Props) {
  return (
    <S.Wrapper state={state} big={big} onClick={onClick}>
      <S.Value>{value}</S.Value>
    </S.Wrapper>
  );
}

export default GameCard;
