import Modal from 'components/Modal';
import useGame from 'hooks/useGame';
import { TGameSetup } from 'hooks/useStartGame';
import EndGame from 'views/EndGame';
import MainGame from 'views/MainGame';

type Props = {
  gameSetup: TGameSetup;
  handleNewGame: () => void;
};

function Game({ gameSetup, handleNewGame }: Props) {
  const { activeCards, cards, gameState, handleCardClick, handleRestart } =
    useGame(gameSetup);

  return (
    <>
      <MainGame
        activeCards={activeCards}
        cards={cards}
        size={gameSetup.size}
        handleCardClick={handleCardClick}
        gameState={gameState}
        handleNewGame={handleNewGame}
        handleRestart={handleRestart}
      />
      {gameState.isGameOver && (
        <Modal>
          <EndGame
            gameState={gameState}
            handleNewGame={handleNewGame}
            handleRestart={handleRestart}
          />
        </Modal>
      )}
    </>
  );
}

export default Game;
