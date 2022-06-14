import Button from 'components/Button';
import * as S from 'components/Header/style';
import Modal from 'components/Modal';
import { useState } from 'react';

type Props = {
  className?: string;
  handleNewGame: (cb?: () => void) => void;
  handleRestart: (cb?: () => void) => void;
};

function Header({ className, handleNewGame, handleRestart }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <S.Wrapper className={className}>
        <S.StyledLogo />
        <S.Group>
          <S.MenuButton onClick={handleToggleMenu}>Menu</S.MenuButton>
          <S.RestartButton onClick={() => handleRestart()}>
            Restart
          </S.RestartButton>
          <S.SecondaryButton secondary onClick={() => handleNewGame()}>
            New Game
          </S.SecondaryButton>
        </S.Group>
      </S.Wrapper>
      {isOpen && (
        <Modal mobile>
          <S.MenuWrapper>
            <Button big onClick={() => handleRestart(handleToggleMenu)}>
              Restart
            </Button>
            <Button
              big
              secondary
              onClick={() => handleNewGame(handleToggleMenu)}
            >
              New Game
            </Button>
            <Button big secondary onClick={handleToggleMenu}>
              Resume Game
            </Button>
          </S.MenuWrapper>
        </Modal>
      )}
    </>
  );
}

export default Header;
