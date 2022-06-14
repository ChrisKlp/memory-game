import Game from 'Game';
import gameOptions from 'gameOptions';
import useStartGame from 'hooks/useStartGame';
import globalStyles from 'styles/globalStyles';
import StartGame from 'views/StartGame';

function App() {
  const {
    gameSetup,
    handleStartGameClick,
    handleStartGameSelect,
    handleNewGame,
    isGameStarted,
  } = useStartGame(gameOptions);

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
        <Game gameSetup={gameSetup} handleNewGame={handleNewGame} />
      )}
    </main>
  );
}

export default App;
