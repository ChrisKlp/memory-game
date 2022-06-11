export type TGameOptions = {
  name: string;
  label: string;
  options: string[];
}[];

export const gameOptions: TGameOptions = [
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
