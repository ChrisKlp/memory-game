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

function App() {
  globalStyles();
  return <StartGame config={config} />;
}

export default App;
