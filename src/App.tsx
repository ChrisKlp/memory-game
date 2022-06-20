import EndGame from 'components/EndGame';
import Game from 'components/Game';
import Modal from 'components/Modal';
import StartGame from 'components/StartGame';
import { AnimatePresence } from 'framer-motion';
import useGameState from 'stores/gameState';
import globalStyles from 'styles/globalStyles';

function App() {
  const isStarted = useGameState((s) => s.isStarted);
  const isEnded = useGameState((s) => s.isEnded);
  const sessionId = useGameState((s) => s.sessionId);
  globalStyles();
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => null}
    >
      {!isStarted ? (
        <StartGame key="startGameView" />
      ) : (
        <>
          <Game key={sessionId} />
          {isEnded && (
            <Modal key="EndGame">
              <EndGame />
            </Modal>
          )}
        </>
      )}
    </AnimatePresence>
  );
}

export default App;
