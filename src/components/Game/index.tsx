import { motion } from 'framer-motion';
import useRestartGame from 'hooks/useRestartGame';
import { CardStates } from 'models';
import { useCallback, useEffect } from 'react';
import useGameBoard from 'stores/gameBoard';
import usePlayers from 'stores/gamePlayers';
import useGameState from 'stores/gameState';
import MainGameView from 'views/MainGameView';
import shallow from 'zustand/shallow';

function Game() {
  const { isMulti, isEnded, setup, startNewGame, endGame } = useGameState(
    (s) => ({
      isMulti: s.isMulti,
      isEnded: s.isEnded,
      setup: s.setup,
      startNewGame: s.startNewGame,
      endGame: s.endGame,
    }),
    shallow
  );
  const { players, addMove, addPoint, changePlayer } = usePlayers();
  const {
    cards,
    activeCards,
    setCardActive,
    setCardsHidden,
    setCardsRevealed,
  } = useGameBoard();
  const handleRestartGame = useRestartGame();

  const handleCardClick = (id: number) => {
    setCardActive(id);
  };

  const handleEndOfTurn = useCallback(() => {
    const [firstCard, secondCard] = activeCards;

    if (!isMulti) addMove();

    if (firstCard.value === secondCard.value) {
      if (isMulti) addPoint();
      setCardsRevealed();
    } else {
      if (isMulti) changePlayer();
      setCardsHidden();
    }
  }, [
    activeCards,
    addMove,
    addPoint,
    changePlayer,
    isMulti,
    setCardsHidden,
    setCardsRevealed,
  ]);

  useEffect(() => {
    if (cards.every((card) => card.state === CardStates.revealed) && !isEnded) {
      endGame();
    }
    if (activeCards.length < 2) return undefined;

    const endOfTurnTimer = setTimeout(() => {
      handleEndOfTurn();
    }, 1000);
    return () => {
      clearInterval(endOfTurnTimer);
    };
  }, [activeCards.length, cards, isEnded, handleEndOfTurn, endGame]);

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
        isEnded={isEnded}
        isMulti={isMulti}
        setup={setup}
        handleCardClick={handleCardClick}
        handleNewGame={startNewGame}
        handleRestart={handleRestartGame}
      />
    </motion.div>
  );
}

export default Game;
