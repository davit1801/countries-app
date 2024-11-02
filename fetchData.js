import axios from 'axios';

const fetchData = async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  const data = response.data;

  const filterData = data.map((country, index) => {
    const capital =
      country.capital?.length > 0 ? country.capital[0] : 'Not have Capital';

    return {
      id: (3 + (index + 1)).toString(),
      likes: 0,
      population: country.population,
      image: country.flags.png,
      name: {
        ka: country.name.common,
        eng: country.name.common,
      },
      capital: {
        ka: capital,
        eng: capital,
      },
    };
  });

  const postCountry = async (country) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/countries',
        country,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(
        `Country ${country.name.eng} added successfully`,
        response.data,
      );
    } catch (error) {
      console.error('Failed to add country:', error.message || error);
    }
  };

  for (const country of filterData) {
    await postCountry(country);
  }
};

fetchData();
