import GameCard from 'components/GameCard';
import { Sizes } from 'gameOptions';
import useGameBoard, { CardStates } from 'hooks/useGameBoard';
import useGameStats from 'hooks/useGameStats';
import { TGameSetup } from 'hooks/useStartGame';
import { useCallback, useEffect } from 'react';
import * as S from 'views/MainGame/style';

type Props = {
  gameSetup: TGameSetup;
};

function MainGame({ gameSetup }: Props) {
  const {
    setCardActive,
    setCardsHidden,
    setCardsRevealed,
    resetActiveCards,
    gameBoard: { activeCards, cards },
  } = useGameBoard(gameSetup.size === Sizes.big ? Sizes.big : Sizes.small);
  const { increaseMoves, addPoint, changePlayer, gameStats } =
    useGameStats(gameSetup);

  const handleCardClick = (id: number) => {
    setCardActive(id);
    if (!gameStats.isMultiPlayer) increaseMoves();
  };

  const handleEndOfTurn = useCallback(() => {
    const [firstCard, secondCard] = activeCards;

    if (firstCard.value === secondCard.value) {
      addPoint();
      setCardsRevealed();
    } else {
      setCardsHidden();
      if (gameStats.isMultiPlayer) changePlayer();
    }

    resetActiveCards();
  }, [
    activeCards,
    addPoint,
    changePlayer,
    gameStats.isMultiPlayer,
    resetActiveCards,
    setCardsHidden,
    setCardsRevealed,
  ]);

  const handleEndGame = useCallback(() => {
    if (cards.every((card) => card.state === CardStates.revealed)) {
      console.log('END GAME');
    }
  }, [cards]);

  useEffect(() => {
    handleEndGame();

    if (activeCards.length < 2) return;
    const endOfTurnTimer = setTimeout(() => {
      handleEndOfTurn();
    }, 1000);
    // eslint-disable-next-line consistent-return
    return () => {
      clearInterval(endOfTurnTimer);
    };
  }, [activeCards.length, cards, handleEndGame, handleEndOfTurn]);

  return (
    <S.Container>
      <S.StyledHeader />
      <S.Board
        small={gameSetup.size === Sizes.small}
        disabled={activeCards.length === 2}
      >
        {cards.map(({ id, state, value }) => (
          <GameCard
            key={id}
            value={value.toString()}
            state={state}
            big={gameSetup.size === Sizes.small}
            onClick={() => state === CardStates.hidden && handleCardClick(id)}
          />
        ))}
      </S.Board>
      <S.StyledFooter gameStats={gameStats} />
    </S.Container>
  );
}

export default MainGame;
