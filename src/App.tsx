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
    <main>
      {!isGameStarted ? (
        <StartGame
          gameOptions={gameOptions}
          gameSetup={gameSetup}
          handleStartGameClick={handleStartGameClick}
          handleStartGameSelect={handleStartGameSelect}
        />
      ) : (
        <Game
          gameSetup={gameSetup}
          handleNewGame={handleNewGame}
          clock={clock}
          setTimerState={setTimerState}
        />
      )}
    </main>
  );
}

export default App;
