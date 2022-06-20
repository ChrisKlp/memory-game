import { motion } from 'framer-motion';
import { CardStates } from 'models';
import { useCallback, useEffect } from 'react';
import useGameBoard from 'stores/gameBoard';
import usePlayers from 'stores/gamePlayers';
import useGameState from 'stores/gameState';
import MainGameView from 'views/MainGameView';

function Game() {
  const { players, addMove, addPoint, changePlayer } = usePlayers();
  const {
    cards,
    activeCards,
    setCardActive,
    setCardsHidden,
    setCardsRevealed,
    resetActiveCards,
  } = useGameBoard();
  const {
    isMulti,
    isEnded,
    setup,
    restartGame,
    startNewGame,
    endGame,
    setGameTime,
  } = useGameState();

  const handleCardClick = (id: number) => {
    setCardActive(id);
    if (!isMulti) addMove();
  };

  const handleEndOfTurn = useCallback(() => {
    const [firstCard, secondCard] = activeCards;

    if (firstCard.value === secondCard.value) {
      if (isMulti) addPoint();
      setCardsRevealed();
    } else {
      if (isMulti) changePlayer();
      setCardsHidden();
    }

    resetActiveCards();
  }, [
    activeCards,
    addPoint,
    changePlayer,
    isMulti,
    resetActiveCards,
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
        handleRestart={restartGame}
        setGameTime={setGameTime}
      />
    </motion.div>
  );
}

export default Game;
