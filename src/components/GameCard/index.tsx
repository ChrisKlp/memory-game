import * as S from 'components/GameCard/style';
import { CardStates, Themes } from 'models';

type Props = {
  value: string;
  icon: string;
  theme: string;
  state: CardStates;
  big?: boolean;
  onClick: () => void;
};

function GameCard({ value, theme, icon, state, big, onClick }: Props) {
  return (
    <S.Wrapper state={state} big={big} onClick={onClick}>
      {theme === Themes.icons ? (
        <S.Value as="i" className={`fa-solid ${icon}`} />
      ) : (
        <S.Value>{value}</S.Value>
      )}
    </S.Wrapper>
  );
}

export default GameCard;
