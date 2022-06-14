import GameCard from 'components/GameCard';
import { Sizes } from 'gameOptions';
import { CardStates, TGameCard } from 'hooks/useGameBoard';
import { TGameState } from 'hooks/useGameState';
import * as S from 'views/MainGame/style';

type Props = {
  activeCards: TGameCard[];
  cards: TGameCard[];
  size: string;
  handleCardClick: (id: number) => void;
  gameState: TGameState;
};

function MainGame({
  activeCards,
  cards,
  size,
  handleCardClick,
  gameState,
}: Props) {
  return (
    <S.Container>
      <S.StyledHeader />
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
