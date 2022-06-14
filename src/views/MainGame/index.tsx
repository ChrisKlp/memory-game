import GameCard from 'components/GameCard';
import { CardStates, Sizes, TGameCard, TGameSetup, TGameState } from 'models';
import * as S from 'views/MainGame/style';

type Props = {
  activeCards: TGameCard[];
  cards: TGameCard[];
  handleCardClick: (id: number) => void;
  gameSetup: TGameSetup;
  gameState: TGameState;
  handleNewGame: () => void;
  handleRestart: () => void;
};

function MainGame({
  activeCards,
  cards,
  handleCardClick,
  gameSetup,
  gameState,
  handleNewGame,
  handleRestart,
}: Props) {
  const { size, theme } = gameSetup;
  return (
    <S.Container>
      <S.StyledHeader
        handleNewGame={handleNewGame}
        handleRestart={handleRestart}
      />
      <S.Board small={size === Sizes.small} disabled={activeCards.length === 2}>
        {cards.map(({ id, state, value, icon }) => (
          <GameCard
            key={id}
            theme={theme}
            icon={icon}
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
