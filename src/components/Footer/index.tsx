import { useEffect } from 'react';
import Wrapper from 'components/Footer/style';
import StatusCard from 'components/StatusCard';
import useTimer from 'hooks/useTimer';
import { TPlayersState } from 'models';

type Props = {
  isMulti: boolean;
  isEnded: boolean;
  className?: string;
  players: TPlayersState;
  setGameTime: (time: string) => void;
};

function Footer({ isMulti, isEnded, players, className, setGameTime }: Props) {
  const { clock, isStarted, startTimer, stopTimer } = useTimer();

  useEffect(() => {
    if (isMulti) return;
    if (!isStarted && !isEnded) {
      startTimer();
    }

    if (isStarted && isEnded) {
      stopTimer();
      setGameTime(clock);
    }
  }, [clock, isEnded, isMulti, isStarted, setGameTime, startTimer, stopTimer]);

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
          <StatusCard
            label="Moves"
            value={Math.floor(players[0].moves / 2).toString()}
          />
        </>
      )}
    </Wrapper>
  );
}

export default Footer;
