import Button from 'components/Button';
import * as S from 'components/Header/style';

type Props = {
  className?: string;
};

function Header({ className }: Props) {
  return (
    <S.Wrapper className={className}>
      <S.StyledLogo />
      <S.Group>
        <Button>Menu</Button>
        <S.SecondaryButton secondary>New Game</S.SecondaryButton>
      </S.Group>
    </S.Wrapper>
  );
}

export default Header;
