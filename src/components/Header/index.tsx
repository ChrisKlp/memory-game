import * as S from 'components/Header/style';

type Props = {
  className?: string;
  handleNewGame: () => void;
  handleRestart: () => void;
};

function Header({ className, handleNewGame, handleRestart }: Props) {
  return (
    <S.Wrapper className={className}>
      <S.StyledLogo />
      <S.Group>
        <S.MenuButton>Menu</S.MenuButton>
        <S.RestartButton onClick={handleRestart}>Restart</S.RestartButton>
        <S.SecondaryButton secondary onClick={handleNewGame}>
          New Game
        </S.SecondaryButton>
      </S.Group>
    </S.Wrapper>
  );
}

export default Header;
