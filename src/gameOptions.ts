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
    options: [1, 2, 3, 4],
  },
  {
    name: 'size',
    label: 'Grid Size',
    options: [Sizes.small, Sizes.big],
  },
];

// <i class="fa-solid fa-acorn"></i>
export const gameIcons = [
  'fa-cat',
  'fa-fish',
  'fa-frog',
  'fa-dragon',
  'fa-user-astronaut',
  'fa-moon',
  'fa-bus',
  'fa-truck-monster',
  'fa-drum',
  'fa-guitar',
  'fa-skull',
  'fa-ghost',
  'fa-camera-retro',
  'fa-film',
  'fa-images',
  'fa-trash',
  'fa-pen-ruler',
  'fa-map',
  'fa-route',
  'fa-plug',
  'fa-sun',
];

export default gameOptions;
