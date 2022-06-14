import { useCallback, useEffect } from 'react';
import useGameBoard, { CardStates } from './useGameBoard';
import useGameState from './useGameState';
import { TGameSetup } from './useStartGame';

const useGame = (gameSetup: TGameSetup) => {
  const {
    setCardActive,
    setCardsHidden,
    setCardsRevealed,
    resetActiveCards,
    gameBoard: { activeCards, cards },
  } = useGameBoard(gameSetup.size);

  const { increaseMoves, addPoint, changePlayer, gameState } =
    useGameState(gameSetup);

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

  const handleEndGame = useCallback(() => {
    console.log('END GAME');
  }, []);

  useEffect(() => {
    if (cards.every((card) => card.state === CardStates.revealed)) {
      handleEndGame();
    }

    if (activeCards.length < 2) return;

    const endOfTurnTimer = setTimeout(() => {
      handleEndOfTurn();
    }, 1000);
    // eslint-disable-next-line consistent-return
    return () => {
      clearInterval(endOfTurnTimer);
    };
  }, [activeCards.length, cards, handleEndGame, handleEndOfTurn]);

  return { handleCardClick, gameState, activeCards, cards };
};

export default useGame;
