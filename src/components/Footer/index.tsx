import { TGameStats } from 'views/MainGame';
import Wrapper from 'components/Footer/style';
import StatusCard from 'components/StatusCard';

type Props = {
  gameStats: TGameStats;
  className?: string;
};

function Footer({ gameStats, className }: Props) {
  const { activePlayer, moves, players, points } = gameStats;
  const isMultiPlayer = players > 1;
  return (
    <Wrapper className={className}>
      {isMultiPlayer ? (
        points?.map((value, i) => {
          const name = `P${(i + 1).toString()}`;
          const isActive = i + 1 === activePlayer;
          return (
            <StatusCard
              key={name}
              isActive={isActive}
              isPlayer={isMultiPlayer}
              label={name}
              value={value.toString()}
            />
          );
        })
      ) : (
        <>
          <StatusCard label="Time" value="1:53" />
          <StatusCard label="Moves" value={moves.toString()} />
        </>
      )}
    </Wrapper>
  );
}

export default Footer;
