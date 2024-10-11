import React, { Dispatch } from 'react';
import styles from './SortSelect.module.css';
import { countriesReducerAction } from '@/pages/country/views/list/reducer/reducer';

type PropsType = {
  dispatch: Dispatch<countriesReducerAction>;
};

const SortSelect: React.FC<PropsType> = ({ dispatch }) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: 'sort',
      payload: {
        sortType: e.target.value,
      },
    });
  };

  return (
    <select onChange={handleSortChange} className={styles.select_input}>
      <option value="">Sort by Likes</option>
      <option value="decrease">Decreases by likes</option>
      <option value="increase">Encreases by likes</option>
    </select>
  );
};

export default SortSelect;
