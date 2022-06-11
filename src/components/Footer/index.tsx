import Wrapper from 'components/Footer/style';
import StatusCard from 'components/StatusCard';
import { TGameStats } from 'hooks/useGame';

type Props = {
  gameStats: TGameStats;
  isMultiPlayer: boolean;
  className?: string;
};

function Footer({ gameStats, className, isMultiPlayer }: Props) {
  const { activePlayer, moves, points } = gameStats;
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
