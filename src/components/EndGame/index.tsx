import { TScores } from 'models';
import { useMemo } from 'react';
import usePlayers from 'stores/gamePlayers';
import useGameState from 'stores/gameState';
import EndGameView from 'views/EndGameView';

function EndGame() {
  const isMulti = useGameState((s) => s.isMulti);
  const gameTime = useGameState((s) => s.gameTime);
  const restartGame = useGameState((s) => s.restartGame);
  const startNewGame = useGameState((s) => s.startNewGame);
  const players = usePlayers((s) => s.players);

  const scores = useMemo<TScores>(() => {
    const topScore = [...players].sort((a, b) => b.pairs - a.pairs)[0].pairs;

    return [...players]
      .map(({ name, moves, pairs }) => {
        const isWinner = pairs === topScore;
        return {
          name,
          pairs,
          moves,
          isWinner,
        };
      })
      .sort((a, b) => b.pairs - a.pairs);
  }, [players]);

  const getMultiPlayerHeading = () => {
    const winners = scores.filter((i) => i.isWinner);
    if (winners.length > 1) return 'It’s a tie!';
    return `Player ${winners[0].name[1]} Wins!`;
  };

  const getHeading = () => {
    if (isMulti) return getMultiPlayerHeading();
    return 'You did it!';
  };

  const getInfoText = () =>
    isMulti
      ? 'Game over! Here are the results…'
      : 'Game over! Here’s how you got on…';

  return (
    <EndGameView
      heading={getHeading()}
      infoText={getInfoText()}
      scores={scores}
      isMulti={isMulti}
      gameTime={gameTime}
      handleRestart={restartGame}
      handleNewGame={startNewGame}
    />
  );
}

export default EndGame;
