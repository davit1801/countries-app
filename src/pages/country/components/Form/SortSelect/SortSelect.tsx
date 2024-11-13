import React, { useEffect, useState } from 'react';
import styles from './SortSelect.module.css';
import { useParams, useSearchParams } from 'react-router-dom';
import CONTENT, { ParamsType } from '@/static/siteContent';
import { countriesReducerAction } from '@/pages/country/views/list/reducer/reducer';
import { useMutation } from '@tanstack/react-query';
import { sortCountries } from '@/api/countries';

type PropsType = {
  dispatch: React.Dispatch<countriesReducerAction>;
};

const SortSelect: React.FC<PropsType> = ({ dispatch }) => {
  const { lang } = useParams<ParamsType>();
  const { countrySort } = CONTENT[lang ?? 'ka'];
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSort = searchParams.get('_sort') || '';
  const [selectedSort, setSelectedSort] = useState(initialSort);

  const { mutate, data } = useMutation({
    mutationFn: sortCountries,
  });

  useEffect(() => {
    if (selectedSort) {
      mutate(selectedSort);
    }
  }, [selectedSort, mutate]);

  useEffect(() => {
    if (data) {
      dispatch({ type: 'sortedData', payload: { sortedCountries: data } });
    }
  }, [data, dispatch]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = e.target.value;
    setSelectedSort(sortValue);
    setSearchParams({ _sort: sortValue });
  };

  return (
    <select onChange={handleSortChange} className={styles.select_input}>
      <option hidden>{countrySort.title}</option>
      <option value="decrease">{countrySort.decrease}</option>
      <option value="increase">{countrySort.increase}</option>
    </select>
  );
};

export default SortSelect;
