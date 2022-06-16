import Modal from 'components/Modal';
import { motion } from 'framer-motion';
import useGame from 'hooks/useGame';
import { TGameSetup, TimerStates } from 'models';
import EndGameView from 'views/EndGameView';
import MainGameView from 'views/MainGameView';

type Props = {
  gameSetup: TGameSetup;
  handleNewGame: () => void;
  clock: string;
  setTimerState: (state: TimerStates) => void;
};

function Game({ gameSetup, handleNewGame, clock, setTimerState }: Props) {
  const { activeCards, cards, gameState, handleCardClick, handleRestart } =
    useGame(gameSetup);

  const handleRestartGame = () => {
    setTimerState(TimerStates.reset);
    handleRestart();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainGameView
        activeCards={activeCards}
        cards={cards}
        clock={clock}
        gameSetup={gameSetup}
        gameState={gameState}
        handleCardClick={handleCardClick}
        handleNewGame={handleNewGame}
        handleRestart={handleRestartGame}
        setTimerState={setTimerState}
      />
      {gameState.isGameOver && (
        <Modal>
          <EndGameView
            gameState={gameState}
            handleNewGame={handleNewGame}
            handleRestart={handleRestartGame}
          />
        </Modal>
      )}
    </motion.div>
  );
}

export default Game;
