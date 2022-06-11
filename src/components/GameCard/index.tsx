import { Status } from 'App';
import * as S from 'components/GameCard/style';

type Props = {
  value: string;
  status: Status;
  big?: boolean;
};

function GameCard({ value, status, big }: Props) {
  return (
    <S.Wrapper status={status} big={big}>
      <S.Value>{value}</S.Value>
    </S.Wrapper>
  );
}

export default GameCard;
