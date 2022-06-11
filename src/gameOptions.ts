export enum Themes {
  numbers = 'Numbers',
  icons = 'Icons',
}

export enum Sizes {
  small = '4x4',
  big = '6x6',
}

export type TGameOptions = {
  name: string;
  label: string;
  options: string[] | Themes[] | Sizes[];
}[];

export const gameOptions: TGameOptions = [
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
