export type CountryType = {
  id: string;
  likes: number;
  population: number;
  active: boolean;
  image: string;
  name: {
    ka: string;
    eng: string;
  };
  capital: {
    ka: string;
    eng: string;
  };
};

export const countriesInitialState: CountryType[] = [
  {
    id: '1',
    likes: 0,
    population: 47_000_000,
    active: true,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg',
    name: {
      ka: 'ესპანეთი',
      eng: 'Spain',
    },
    capital: {
      ka: 'მადრიდი',
      eng: 'Madrid',
    },
  },
  {
    id: '2',
    likes: 0,
    population: 59_000_000,
    active: true,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg',
    name: {
      ka: 'იტალია',
      eng: 'Italy',
    },
    capital: {
      ka: 'რომი  ',
      eng: 'Rome',
    },
  },
  {
    id: '3',
    likes: 0,
    population: 84_000_000,
    active: true,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png',
    name: {
      ka: 'გერმანია',
      eng: 'Germany',
    },
    capital: {
      ka: 'ბერლინი',
      eng: 'Berlin',
    },
  },
];
