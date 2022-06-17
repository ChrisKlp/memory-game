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
  setGameTime: (time: string) => void;
};

function MainGameView({
  boardDisabled,
  cards,
  players,
  gameState,
  handleCardClick,
  handleNewGame,
  handleRestart,
  setGameTime,
}: Props) {
  const { size, theme } = gameState.setup;

  return (
    <S.Container>
      <S.StyledHeader
        handleNewGame={handleNewGame}
        handleRestart={handleRestart}
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
        isEnded={gameState.isEnded}
        players={players}
        setGameTime={setGameTime}
      />
    </S.Container>
  );
}

export default MainGameView;
