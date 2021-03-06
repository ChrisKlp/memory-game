import Button from 'components/Button';
import * as S from 'components/Header/style';
import Modal from 'components/Modal';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type Props = {
  className?: string;
  handleNewGame: () => void;
  handleRestart: () => void;
};

function Header({ className, handleNewGame, handleRestart }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTriggerMenu = () => setIsOpen(!isOpen);

  const handleRestartGame = () => {
    handleTriggerMenu();
    handleRestart();
  };

  const handleStartNewGame = () => {
    handleTriggerMenu();
    handleNewGame();
  };

  return (
    <>
      <S.Wrapper className={className}>
        <S.StyledLogo />
        <S.Group>
          <S.MenuButton onClick={handleTriggerMenu}>Menu</S.MenuButton>
          <S.RestartButton onClick={handleRestart}>Restart</S.RestartButton>
          <S.SecondaryButton secondary onClick={() => handleNewGame()}>
            New Game
          </S.SecondaryButton>
        </S.Group>
      </S.Wrapper>
      <AnimatePresence exitBeforeEnter>
        {isOpen && (
          <Modal mobile>
            <S.MenuWrapper
              as={motion.div}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              <Button big onClick={handleRestartGame}>
                Restart
              </Button>
              <Button big secondary onClick={handleStartNewGame}>
                New Game
              </Button>
              <Button big secondary onClick={handleTriggerMenu}>
                Resume Game
              </Button>
            </S.MenuWrapper>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
