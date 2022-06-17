import Game from 'components/Game';
import { AnimatePresence } from 'framer-motion';
import gameOptions from 'gameOptions';
import useGameState from 'hooks/useGameState';
import globalStyles from 'styles/globalStyles';
import StartGameView from 'views/StartGameView';

function App() {
  const {
    endGame,
    gameState,
    restartGame,
    startGame,
    startNewSetup,
    updateSetup,
    setGameTime,
  } = useGameState(gameOptions);
  globalStyles();
  return (
    <AnimatePresence exitBeforeEnter>
      {!gameState.isStarted ? (
        <StartGameView
          key="startGameView"
          gameOptions={gameOptions}
          gameSetup={gameState.setup}
          handleStartGame={startGame}
          handleUpdateSetup={updateSetup}
        />
      ) : (
        <Game
          key={gameState.sessionId}
          gameState={gameState}
          handleNewGame={startNewSetup}
          handleRestart={restartGame}
          handleEndGame={endGame}
          setGameTime={setGameTime}
        />
      )}
    </AnimatePresence>
  );
}

export default App;
