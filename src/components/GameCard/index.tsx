import * as S from 'components/GameCard/style';
import { GameCardStatuses } from 'hooks/useGame';

type Props = {
  value: string;
  status: GameCardStatuses;
  big?: boolean;
  onClick: () => void;
};

function GameCard({ value, status, big, onClick }: Props) {
  return (
    <S.Wrapper status={status} big={big} onClick={onClick}>
      <S.Value>{value}</S.Value>
    </S.Wrapper>
  );
}

export default GameCard;
