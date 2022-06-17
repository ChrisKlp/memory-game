import { useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import useGameBoard from 'hooks/useGameBoard';
import usePlayers from 'hooks/usePlayers';
import { CardStates, TGameState } from 'models';
import MainGameView from 'views/MainGameView';
import Modal from 'components/Modal';
import EndGameView from 'views/EndGameView';

type Props = {
  gameState: TGameState;
  handleNewGame: () => void;
  handleRestart: () => void;
  handleEndGame: () => void;
  timer: {
    clock: string;
    startTimer: () => void;
    stopTimer: () => void;
  };
};

function Game({
  gameState,
  handleNewGame,
  handleRestart,
  handleEndGame,
  timer,
}: Props) {
  const { players, addMove, addPoint, changePlayer } = usePlayers(
    gameState.setup.players
  );
  const {
    gameBoard: { activeCards, cards },
    setCardActive,
    setCardsHidden,
    setCardsRevealed,
    resetActiveCards,
  } = useGameBoard(gameState.setup.size);

  const handleCardClick = (id: number) => {
    setCardActive(id);
    if (!gameState.isMulti) addMove();
  };

  const handleEndOfTurn = useCallback(() => {
    const [firstCard, secondCard] = activeCards;

    if (firstCard.value === secondCard.value) {
      if (gameState.isMulti) addPoint();
      setCardsRevealed();
    } else {
      if (gameState.isMulti) changePlayer();
      setCardsHidden();
    }

    resetActiveCards();
  }, [
    activeCards,
    addPoint,
    changePlayer,
    gameState.isMulti,
    resetActiveCards,
    setCardsHidden,
    setCardsRevealed,
  ]);

  useEffect(() => {
    if (
      cards.every((card) => card.state === CardStates.revealed) &&
      !gameState.isEnded
    ) {
      handleEndGame();
    }
    if (activeCards.length < 2) return undefined;

    const endOfTurnTimer = setTimeout(() => {
      handleEndOfTurn();
    }, 1000);
    return () => {
      clearInterval(endOfTurnTimer);
    };
  }, [
    activeCards.length,
    cards,
    gameState.isEnded,
    handleEndGame,
    handleEndOfTurn,
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainGameView
        boardDisabled={activeCards.length === 2}
        cards={cards}
        players={players}
        timer={timer}
        gameState={gameState}
        handleCardClick={handleCardClick}
        handleNewGame={handleNewGame}
        handleRestart={handleRestart}
      />
      {gameState.isEnded && (
        <Modal>
          <EndGameView
            clock={timer.clock}
            players={players}
            gameState={gameState}
            handleNewGame={handleNewGame}
            handleRestart={handleRestart}
          />
        </Modal>
      )}
    </motion.div>
  );
}

export default Game;
