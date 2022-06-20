import { Sizes } from 'models';
import useGameBoard from 'stores/gameBoard';
import usePlayers from 'stores/gamePlayers';
import useGameState from 'stores/gameState';

export default function useRestartGame() {
  const setup = useGameState((s) => s.setup);
  const restartGame = useGameState((s) => s.restartGame);
  const createGameCards = useGameBoard((s) => s.createGameCards);
  const createPlayers = usePlayers((s) => s.createPlayers);

  const handleRestartGame = () => {
    restartGame();
    createPlayers(setup.players);
    createGameCards(setup.size === Sizes.big ? 36 : 16);
  };

  return handleRestartGame;
}
