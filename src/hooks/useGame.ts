import { useCallback, useEffect } from 'react';
import { TGameSetup, CardStates } from 'models';
import useGameBoard from './useGameBoard';
import useGameState from './useGameState';

const useGame = (gameSetup: TGameSetup) => {
  const {
    setCardActive,
    setCardsHidden,
    setCardsRevealed,
    resetActiveCards,
    resetCards,
    gameBoard: { activeCards, cards },
  } = useGameBoard(gameSetup);

  const {
    increaseMoves,
    addPoint,
    resetPoints,
    resetMoves,
    changePlayer,
    setGameOver,
    gameState,
  } = useGameState(gameSetup);

  const handleCardClick = (id: number) => {
    setCardActive(id);
    if (!gameState.isMultiPlayer) increaseMoves();
  };

  const handleEndOfTurn = useCallback(() => {
    const [firstCard, secondCard] = activeCards;

    if (firstCard.value === secondCard.value) {
      if (gameState.isMultiPlayer) addPoint();
      setCardsRevealed();
    } else {
      if (gameState.isMultiPlayer) changePlayer();
      setCardsHidden();
    }

    resetActiveCards();
  }, [
    activeCards,
    addPoint,
    changePlayer,
    gameState.isMultiPlayer,
    resetActiveCards,
    setCardsHidden,
    setCardsRevealed,
  ]);

  const handleRestart = useCallback(() => {
    resetCards();
    resetPoints();
    resetMoves();
    changePlayer(true);
    setGameOver(false);
  }, [changePlayer, resetCards, resetMoves, resetPoints, setGameOver]);

  const handleEndGame = useCallback(() => {
    setGameOver(true);
  }, [setGameOver]);

  useEffect(() => {
    if (cards.every((card) => card.state === CardStates.revealed)) {
      handleEndGame();
    }

    if (activeCards.length < 2) return undefined;

    const endOfTurnTimer = setTimeout(() => {
      handleEndOfTurn();
    }, 1000);
    return () => {
      clearInterval(endOfTurnTimer);
    };
  }, [activeCards.length, cards, handleEndGame, handleEndOfTurn]);

  return { handleCardClick, gameState, activeCards, cards, handleRestart };
};

export default useGame;
