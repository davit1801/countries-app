export type CountryType = {
  id: string;
  likes: number;
  population: number;
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
    population: 3_500_000,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/800px-Flag_of_Georgia.svg.png',
    name: {
      ka: 'საქართველო',
      eng: 'Georgia',
    },
    capital: {
      ka: 'თბილისი',
      eng: 'Tbilisi',
    },
  },
  {
    id: '2',
    likes: 0,
    population: 47_000_000,
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
    id: '3',
    likes: 0,
    population: 59_000_000,
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
];
