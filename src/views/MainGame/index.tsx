import GameCard from 'components/GameCard';
import { Sizes } from 'gameOptions';
import useGame from 'hooks/useGame';
import { TGameSetup } from 'hooks/useStartGame';
import * as S from 'views/MainGame/style';

type Props = {
  gameSetup: TGameSetup;
};

function MainGame({ gameSetup }: Props) {
  const { gameBoard, gameStats, handleCardClick, isMultiPlayer } =
    useGame(gameSetup);
  return (
    <S.Container>
      <S.StyledHeader />
      <S.Board small={gameSetup.size === Sizes.small}>
        {gameBoard.map(({ id, status, value }) => (
          <GameCard
            key={id}
            value={value.toString()}
            status={status}
            big={gameSetup.size === Sizes.small}
            onClick={() => handleCardClick(id)}
          />
        ))}
      </S.Board>
      <S.StyledFooter gameStats={gameStats} isMultiPlayer={isMultiPlayer} />
    </S.Container>
  );
}

export default MainGame;
