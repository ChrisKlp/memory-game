import gameOptions from 'gameOptions';
import { useEffect, useState } from 'react';
import { TGameSetup, Themes, Sizes } from 'models';
import useGameState from 'stores/gameState';
import StartGameView from 'views/StartGameView';
import usePlayers from 'stores/gamePlayers';
import useGameBoard from 'stores/gameBoard';

const initialSetup = () =>
  gameOptions.reduce(
    (result, { name, options }) => ({
      ...result,
      [name]: options[0],
    }),
    {} as TGameSetup
  );

function StartGame() {
  const startGame = useGameState((s) => s.startGame);
  const createPlayersStore = usePlayers((s) => s.createPlayersStore);
  const createGameCards = useGameBoard((s) => s.createGameCards);
  const [setup, setSetup] = useState(initialSetup());

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.removeAttribute('style');
    };
  }, []);

  const handleSelect = (
    name: keyof TGameSetup,
    option: number | Themes | Sizes
  ) => setSetup({ ...setup, [name]: option });

  const handleStart = () => {
    startGame(setup);
    createPlayersStore(setup.players);
    createGameCards(setup.size === Sizes.big ? 36 : 16);
  };

  return (
    <StartGameView
      gameOptions={gameOptions}
      setup={setup}
      handleSelect={handleSelect}
      handleStart={handleStart}
    />
  );
}

export default StartGame;
