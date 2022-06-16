import GameCard from 'components/GameCard';
import {
  CardStates,
  Sizes,
  TGameCard,
  TGameState,
  TPlayersState,
} from 'models';
import * as S from 'views/MainGameView/style';

type Props = {
  boardDisabled: boolean;
  cards: TGameCard[];
  players: TPlayersState;
  gameState: TGameState;
  handleCardClick: (id: number) => void;
  handleNewGame: () => void;
  handleRestart: () => void;
  timer: {
    clock: string;
    startTimer: () => void;
    stopTimer: () => void;
  };
};

function MainGameView({
  boardDisabled,
  cards,
  players,
  gameState,
  handleCardClick,
  handleNewGame,
  handleRestart,
  timer: { clock, startTimer, stopTimer },
}: Props) {
  const { size, theme } = gameState.setup;

  return (
    <S.Container>
      <S.StyledHeader
        handleNewGame={handleNewGame}
        handleRestart={handleRestart}
        startTimer={startTimer}
        stopTimer={stopTimer}
      />
      <S.Board small={size === Sizes.small} disabled={boardDisabled}>
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
      <S.StyledFooter
        isMulti={gameState.isMulti}
        players={players}
        clock={clock}
      />
    </S.Container>
  );
}

export default MainGameView;
