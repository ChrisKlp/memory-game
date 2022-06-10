import GameCard from 'components/GameCard';
import StatusCard from 'components/StatusCard';
import globalStyles from 'styles/globalStyles';
import StartGame from 'views/StartGame';

const config = [
  {
    name: 'theme',
    label: 'Select Theme',
    options: ['Numbers', 'Icons'],
  },
  {
    name: 'players',
    label: 'Numbers of Players',
    options: ['1', '2', '3', '4'],
  },
  {
    name: 'size',
    label: 'Grid Size',
    options: ['4x4', '6x6'],
  },
];

export type TConfig = typeof config;

export enum Status {
  'active' = 'active',
  'hidden' = 'hidden',
  'revealed' = 'revealed',
}

function App() {
  globalStyles();
  return (
    <div style={{ display: 'grid', gap: '40px', padding: '100px' }}>
      <StatusCard isPlayer isActive label="Time" value="1:54" />
      <StatusCard label="Time" value="1:54" />
      <GameCard value="18" status={Status.hidden} big />
    </div>
  );
}

export default App;
