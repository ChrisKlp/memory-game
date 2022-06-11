import { gameOptions } from 'gameOptions';
import useStartGame from 'hooks/useStartGame';
import globalStyles from 'styles/globalStyles';
import MainGame from 'views/MainGame';
import StartGame from 'views/StartGame';

export enum Status {
  'active' = 'active',
  'hidden' = 'hidden',
  'revealed' = 'revealed',
}

function App() {
  const {
    gameConfig,
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
          gameConfig={gameConfig}
          handleStartGameSelect={handleStartGameSelect}
          handleStartGameClick={handleStartGameClick}
        />
      ) : (
        <MainGame gameConfig={gameConfig} />
      )}
    </main>
  );
}

export default App;
