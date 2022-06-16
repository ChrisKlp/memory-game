import Wrapper from 'components/Footer/style';
import StatusCard from 'components/StatusCard';
import { TPlayersState } from 'models';

type Props = {
  isMulti: boolean;
  className?: string;
  clock: string;
  players: TPlayersState;
};

function Footer({ isMulti, players, className, clock }: Props) {
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
