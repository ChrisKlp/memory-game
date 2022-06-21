import { useEffect } from 'react';
import Wrapper from 'components/Footer/style';
import StatusCard from 'components/StatusCard';
import useTimer from 'hooks/useTimer';
import { TPlayersState } from 'models';
import useGameState from 'stores/gameState';

type Props = {
  isMulti: boolean;
  isEnded: boolean;
  className?: string;
  players: TPlayersState;
};

function Footer({ isMulti, isEnded, players, className }: Props) {
  const { clock, isTimeStarted, startTimer, stopTimer } = useTimer();
  const setGameTime = useGameState((s) => s.setGameTime);

  useEffect(() => {
    if (isMulti) return;
    if (!isTimeStarted && !isEnded) {
      startTimer();
    }

    if (isTimeStarted && isEnded) {
      stopTimer();
      setGameTime(clock);
    }
  }, [
    clock,
    isEnded,
    isMulti,
    isTimeStarted,
    setGameTime,
    startTimer,
    stopTimer,
  ]);

  return (
    <Wrapper className={className}>
      {isMulti ? (
        players.map(({ isActive, name, pairs }) => (
          <StatusCard
            key={name}
            isActive={isActive}
            isPlayer={isMulti}
            label={name}
            value={pairs.toString()}
          />
        ))
      ) : (
        <>
          <StatusCard label="Time" value={clock} />
          <StatusCard label="Moves" value={players[0].moves.toString()} />
        </>
      )}
    </Wrapper>
  );
}

export default Footer;
