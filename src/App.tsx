import { gameOptions } from 'gameOptions';
import useStartGame from 'hooks/useStartGame';
import globalStyles from 'styles/globalStyles';
import MainGame from 'views/MainGame';
import StartGame from 'views/StartGame';

function App() {
  const {
    gameSetup,
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
          handleStartGameSelect={handleStartGameSelect}
          handleStartGameClick={handleStartGameClick}
        />
      ) : (
        <MainGame gameSetup={gameSetup} />
      )}
    </main>
  );
}

export default App;
