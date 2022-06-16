import GameCard from 'components/GameCard';
import {
  CardStates,
  Sizes,
  TGameCard,
  TGameSetup,
  TGameState,
  TimerStates,
} from 'models';
import * as S from 'views/MainGameView/style';

type Props = {
  activeCards: TGameCard[];
  cards: TGameCard[];
  clock: string;
  gameSetup: TGameSetup;
  gameState: TGameState;
  handleCardClick: (id: number) => void;
  handleNewGame: () => void;
  handleRestart: () => void;
  setTimerState: (state: TimerStates) => void;
};

function MainGameView({
  activeCards,
  cards,
  clock,
  gameSetup,
  gameState,
  handleCardClick,
  handleNewGame,
  handleRestart,
  setTimerState,
}: Props) {
  const { size, theme } = gameSetup;

  return (
    <S.Container>
      <S.StyledHeader
        handleNewGame={handleNewGame}
        handleRestart={handleRestart}
        setTimerState={setTimerState}
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
      <S.StyledFooter gameState={gameState} clock={clock} />
    </S.Container>
  );
}

export default MainGameView;
