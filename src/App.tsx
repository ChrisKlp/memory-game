import { AnimatePresence } from 'framer-motion';
import Game from 'Game';
import gameOptions from 'gameOptions';
import useStartGame from 'hooks/useStartGame';
import globalStyles from 'styles/globalStyles';
import StartGameView from 'views/StartGameView';

function App() {
  const {
    clock,
    setTimerState,
    gameSetup,
    handleNewGame,
    handleStartGameClick,
    handleStartGameSelect,
    isGameStarted,
  } = useStartGame(gameOptions);

  globalStyles();
  return (
    <AnimatePresence>
      {!isGameStarted ? (
        <StartGameView
          key="startGame"
          gameOptions={gameOptions}
          gameSetup={gameSetup}
          handleStartGameClick={handleStartGameClick}
          handleStartGameSelect={handleStartGameSelect}
        />
      ) : (
        <Game
          key="game"
          clock={clock}
          gameSetup={gameSetup}
          handleNewGame={handleNewGame}
          setTimerState={setTimerState}
        />
      )}
    </AnimatePresence>
  );
}

export default App;
