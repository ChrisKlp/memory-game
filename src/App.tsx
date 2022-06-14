import Modal from 'components/Modal';
import { gameOptions } from 'gameOptions';
import useGame from 'hooks/useGame';
import useStartGame from 'hooks/useStartGame';
import globalStyles from 'styles/globalStyles';
import EndGame from 'views/EndGame';
import MainGame from 'views/MainGame';
import StartGame from 'views/StartGame';

function App() {
  const {
    gameSetup,
    handleStartGameClick,
    handleStartGameSelect,
    isGameStarted,
  } = useStartGame(gameOptions);

  const { activeCards, cards, gameState, handleCardClick } = useGame(gameSetup);

  globalStyles();
  return (
    <main>
      {!isGameStarted ? (
        <StartGame
          gameOptions={gameOptions}
          gameSetup={gameSetup}
          handleStartGameSelect={handleStartGameSelect}
          handleStartGameClick={handleStartGameClick}
        />
      ) : (
        <MainGame
          activeCards={activeCards}
          cards={cards}
          size={gameSetup.size}
          handleCardClick={handleCardClick}
          gameState={gameState}
        />
      )}
      {gameState.isGameOver && (
        <Modal>
          <EndGame gameState={gameState} />
        </Modal>
      )}
    </main>
  );
}

export default App;
