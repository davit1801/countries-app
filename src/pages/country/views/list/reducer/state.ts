export const countriesInitialState = [
  {
    id: '1',
    name: 'Spain',
    capital: 'Madrid',
    population: 47_000_000,
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg',
    likes: 0,
    active: true,
  },
  {
    id: '2',
    name: 'Italy',
    capital: 'Rome',
    population: 59_000_000,
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg',
    likes: 0,
    active: true,
  },
  {
    id: '3',
    name: 'Germany',
    capital: 'Berlin',
    population: 84_000_000,
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png',
    likes: 0,
    active: true,
  },
];

export interface CountryType {
  id: string;
  name: string;
  capital: string;
  population: number;
  flag: string;
  likes: number;
  active: boolean;
}
