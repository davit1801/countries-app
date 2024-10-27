export interface CountryType {
  id: string;
  name: string;
  capital: string;
  population: number;
  image: string;
  likes: number;
  active: boolean;
}

export interface countriesInitialStateTypes {
  eng: CountryType[];
  ka: CountryType[];
}

export const countriesInitialState = {
  eng: [
    {
      id: '1',
      name: 'Spain',
      capital: 'Madrid',
      population: 47_000_000,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg',
      likes: 0,
      active: true,
    },
    {
      id: '2',
      name: 'Italy',
      capital: 'Rome',
      population: 59_000_000,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg',
      likes: 0,
      active: true,
    },
    {
      id: '3',
      name: 'Germany',
      capital: 'Berlin',
      population: 84_000_000,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png',
      likes: 0,
      active: true,
    },
  ],
  ka: [
    {
      id: '1',
      name: 'ესპანეთი',
      capital: 'მადრიდი',
      population: 47_000_000,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg',
      likes: 0,
      active: true,
    },
    {
      id: '2',
      name: 'იტალია',
      capital: 'რომი',
      population: 59_000_000,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg',
      likes: 0,
      active: true,
    },
    {
      id: '3',
      name: 'გერმანია',
      capital: 'ბერლინი',
      population: 84_000_000,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png',
      likes: 0,
      active: true,
    },
  ],
};
