import Button from 'components/Button';
import * as S from 'components/Header/style';
import Modal from 'components/Modal';
import { useState } from 'react';

type Props = {
  className?: string;
  handleNewGame: () => void;
  handleRestart: () => void;
  startTimer: () => void;
  stopTimer: () => void;
};

function Header({
  className,
  handleNewGame,
  handleRestart,
  startTimer,
  stopTimer,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    stopTimer();
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    startTimer();
    setIsOpen(false);
  };

  const handleRestartGame = () => {
    handleCloseMenu();
    handleRestart();
  };

  const handleStartNewGame = () => {
    handleCloseMenu();
    handleNewGame();
  };

  return (
    <>
      <S.Wrapper className={className}>
        <S.StyledLogo />
        <S.Group>
          <S.MenuButton onClick={handleOpenMenu}>Menu</S.MenuButton>
          <S.RestartButton onClick={handleRestart}>Restart</S.RestartButton>
          <S.SecondaryButton secondary onClick={() => handleNewGame()}>
            New Game
          </S.SecondaryButton>
        </S.Group>
      </S.Wrapper>
      {isOpen && (
        <Modal mobile>
          <S.MenuWrapper>
            <Button big onClick={handleRestartGame}>
              Restart
            </Button>
            <Button big secondary onClick={handleStartNewGame}>
              New Game
            </Button>
            <Button big secondary onClick={handleCloseMenu}>
              Resume Game
            </Button>
          </S.MenuWrapper>
        </Modal>
      )}
    </>
  );
}

export default Header;
