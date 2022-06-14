import { Sizes, TGameOptions, Themes } from 'models';

const gameOptions: TGameOptions = [
  {
    name: 'theme',
    label: 'Select Theme',
    options: [Themes.numbers, Themes.icons],
  },
  {
    name: 'players',
    label: 'Numbers of Players',
    options: ['1', '2', '3', '4'],
  },
  {
    name: 'size',
    label: 'Grid Size',
    options: [Sizes.small, Sizes.big],
  },
];

export default gameOptions;
