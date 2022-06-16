import { AnimatePresence } from 'framer-motion';
import Game from 'Game';
import gameOptions from 'gameOptions';
import useStartGame from 'hooks/useStartGame';
import globalStyles from 'styles/globalStyles';
import StartGame from 'views/StartGame';

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
        <StartGame
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
