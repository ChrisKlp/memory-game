import globalStyles from 'styles/globalStyles';
import MainGame from 'views/MainGame';

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
    <div>
      <MainGame players={4} />
    </div>
  );
}

export default App;
