import GameCard from 'components/GameCard';
import { TGameCard, TGameState, Sizes, CardStates } from 'models';
import * as S from 'views/MainGame/style';

type Props = {
  activeCards: TGameCard[];
  cards: TGameCard[];
  size: string;
  handleCardClick: (id: number) => void;
  gameState: TGameState;
  handleNewGame: () => void;
  handleRestart: () => void;
};

function MainGame({
  activeCards,
  cards,
  size,
  handleCardClick,
  gameState,
  handleNewGame,
  handleRestart,
}: Props) {
  return (
    <S.Container>
      <S.StyledHeader
        handleNewGame={handleNewGame}
        handleRestart={handleRestart}
      />
      <S.Board small={size === Sizes.small} disabled={activeCards.length === 2}>
        {cards.map(({ id, state, value }) => (
          <GameCard
            key={id}
            value={value.toString()}
            state={state}
            big={size === Sizes.small}
            onClick={() => state === CardStates.hidden && handleCardClick(id)}
          />
        ))}
      </S.Board>
      <S.StyledFooter gameState={gameState} />
    </S.Container>
  );
}

export default MainGame;
